import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, email, service, message } = req.body

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' })
  }

  const { data, error } = await resend.emails.send({
    // onboarding@resend.dev can only deliver to your Resend account's own email.
    // To send to lizjcleans@gmail.com, verify a domain at resend.com/domains
    // then change this to e.g. noreply@yourdomain.com
    from: 'Affordable Residential Cleaning <onboarding@resend.dev>',
    to: 'lizjcleans@gmail.com',
    reply_to: email || undefined,
    subject: `New quote request from ${name}`,
    html: `
      <h2>New Quote Request</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
        <tr><td style="padding:8px;font-weight:bold;width:120px">Name</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone}</td></tr>
        ${email ? `<tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${email}</td></tr>` : ''}
        ${service ? `<tr><td style="padding:8px;font-weight:bold">Service</td><td style="padding:8px">${service}</td></tr>` : ''}
        ${message ? `<tr><td style="padding:8px;font-weight:bold">Message</td><td style="padding:8px">${message}</td></tr>` : ''}
      </table>
    `,
  })

  if (error) {
    console.error('Resend error:', JSON.stringify(error))
    return res.status(500).json({ error: error.message })
  }

  console.log('Email sent:', data?.id)
  return res.status(200).json({ success: true, id: data?.id })
}
