import { createServerFn } from '@tanstack/react-start'
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

export const sendContactEmail = createServerFn({ method: 'POST' })
  .inputValidator(contactRequestSchema)
  .handler(async ({ data }: { data: ContactRequest }) => {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not set')
    }

    const resend = new Resend(apiKey)

    const { name, email, phone, company, service, message } = data

    const result = await resend.emails.send({
      from: 'GSARTH Leads <leads@gsarth.com>',
      to: ['contact@gsarth.com'],
      replyTo: email,
      subject: `New Strategy Request — ${company} via ${name}`,
      html: `
        <h2>New GSARTH Strategy Request</h2>
        <table style="font-family:sans-serif;border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Name</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Email</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Company</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${company}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Service</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${service}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Message</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${message.replace(/\n/g, '<br>')}</td></tr>
        </table>
      `,
    })

    if (result.error) {
      throw new Error(result.error.message)
    }

    return { success: true }
  })
