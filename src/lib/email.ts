import { createServerFn } from '@tanstack/react-start'
import nodemailer from 'nodemailer'
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

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  })

  await transporter.sendMail({
    from: `GSARTH Leads <${user}>`,
    to,
    replyTo,
    subject,
    html,
  })
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
    from: 'GSARTH Leads <leads@gsarth.com>',
    to: [to],
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

    const to = 'contact@gsarth.com'
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
      await sendViaGmail({ to, replyTo, subject, html })
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
