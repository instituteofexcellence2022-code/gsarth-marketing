import { createServerFn } from '@tanstack/react-start'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import { Resend } from 'resend'
import { z } from 'zod'

const contactRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(2),
  service: z.string().min(1),
  message: z.string().min(10),
})

type ContactRequest = z.infer<typeof contactRequestSchema>

function getFromName() {
  return process.env.EMAIL_FROM_NAME?.trim() || 'GSARTH'
}

function getContactToEmail() {
  return process.env.CONTACT_TO_EMAIL?.trim() || 'studyspotindia@gmail.com'
}

function getResendFrom() {
  return process.env.RESEND_FROM?.trim() || `${getFromName()} <onboarding@resend.dev>`
}

function toResendRecipients(to: string) {
  return to
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean)
}

function gmailApiConfigured() {
  return Boolean(
    process.env.GMAIL_CLIENT_ID &&
      process.env.GMAIL_CLIENT_SECRET &&
      process.env.GMAIL_REFRESH_TOKEN &&
      process.env.GMAIL_USER,
  )
}

function base64UrlEncode(buf: Buffer) {
  return buf
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '')
}

async function sendViaGmailApi({
  to,
  replyTo,
  subject,
  html,
}: {
  to: string
  replyTo: string
  subject: string
  html: string
}) {
  const user = process.env.GMAIL_USER
  const clientId = process.env.GMAIL_CLIENT_ID
  const clientSecret = process.env.GMAIL_CLIENT_SECRET
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN
  const redirectUri =
    process.env.GMAIL_REDIRECT_URI?.trim() ||
    'https://developers.google.com/oauthplayground'

  if (!user || !clientId || !clientSecret || !refreshToken) {
    throw new Error('Gmail API credentials are not configured')
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri)
  oauth2Client.setCredentials({ refresh_token: refreshToken })

  const gmail = google.gmail({ version: 'v1', auth: oauth2Client })

  const rawMessage = [
    `From: ${getFromName()} <${user}>`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    '',
    html,
  ].join('\r\n')

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: base64UrlEncode(Buffer.from(rawMessage, 'utf8')),
    },
  })
}

async function sendViaGmail({
  to,
  replyTo,
  subject,
  html,
}: {
  to: string
  replyTo: string
  subject: string
  html: string
}) {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD

  if (!user || !pass) {
    throw new Error('Gmail credentials are not configured')
  }

  const payload = {
    from: `${getFromName()} <${user}>`,
    to,
    replyTo,
    subject,
    html,
  }

  try {
    const transporter587 = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user,
        pass,
      },
      requireTLS: true,
      tls: {
        servername: 'smtp.gmail.com',
      },
    })

    await transporter587.sendMail(payload)
    return
  } catch {
    const transporter465 = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
      tls: {
        servername: 'smtp.gmail.com',
      },
    })

    await transporter465.sendMail(payload)
  }
}

async function sendViaResend({
  to,
  replyTo,
  subject,
  html,
}: {
  to: string
  replyTo: string
  subject: string
  html: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not set')
  }

  const resend = new Resend(apiKey)
  const result = await resend.emails.send({
    from: getResendFrom(),
    to: toResendRecipients(to),
    replyTo,
    subject,
    html,
  })

  if (result.error) {
    throw new Error(result.error.message)
  }
}

export const sendContactEmail = createServerFn({ method: 'POST' })
  .inputValidator(contactRequestSchema)
  .handler(async ({ data }: { data: ContactRequest }) => {
    const { name, email, phone, company, service, message } = data

    const to = getContactToEmail()
    const replyTo = email
    const subject = `New Strategy Request — ${company} via ${name}`
    const html = `
      <h2>New GSARTH Strategy Request</h2>
      <table style="font-family:sans-serif;border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Name</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Email</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Company</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${company}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Service</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${service}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Message</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${message.replace(/\n/g, '<br>')}</td></tr>
      </table>
    `

    const errors: Array<string> = []

    try {
      if (gmailApiConfigured()) {
        await sendViaGmailApi({ to, replyTo, subject, html })
      } else {
        await sendViaGmail({ to, replyTo, subject, html })
      }
    } catch (err) {
      errors.push(err instanceof Error ? err.message : 'Gmail send failed')
      try {
        await sendViaResend({ to, replyTo, subject, html })
      } catch (err2) {
        errors.push(err2 instanceof Error ? err2.message : 'Resend send failed')
        throw new Error(`Email delivery failed: ${errors.join(' | ')}`)
      }
    }

    return { success: true }
  })
