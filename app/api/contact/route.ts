import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// Simple honeypot and rate limiting
const submissions = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60000 // 1 minute
const MAX_SUBMISSIONS = 3 // Max 3 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const userSubmissions = submissions.get(ip) || []
  
  // Clean old submissions
  const recentSubmissions = userSubmissions.filter(
    (time) => now - time < RATE_LIMIT_WINDOW
  )
  
  if (recentSubmissions.length >= MAX_SUBMISSIONS) {
    return true
  }
  
  recentSubmissions.push(now)
  submissions.set(ip, recentSubmissions)
  return false
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .slice(0, 5000) // Limit length
}

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us via WhatsApp.' },
        { status: 503 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, company, subject, message, honeypot } = body

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      // Return success to not alert the bot
      return NextResponse.json({ success: true })
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone || ''),
      company: sanitizeInput(company || ''),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    }

    // Check for minimum message length
    if (sanitizedData.message.length < 10) {
      return NextResponse.json(
        { error: 'Please provide a more detailed message.' },
        { status: 400 }
      )
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'ALMZAJ USA Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'info@almzajusa.com',
      replyTo: sanitizedData.email,
      subject: `[Website Inquiry] ${sanitizedData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #0066cc 0%, #004499 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">ALMZAJ USA Import & Export Inc.</p>
            </div>
            
            <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</strong>
                    <p style="margin: 4px 0 0 0; font-size: 16px; color: #1e293b;">${sanitizedData.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Business Email</strong>
                    <p style="margin: 4px 0 0 0; font-size: 16px; color: #1e293b;">
                      <a href="mailto:${sanitizedData.email}" style="color: #0066cc; text-decoration: none;">${sanitizedData.email}</a>
                    </p>
                  </td>
                </tr>
                ${sanitizedData.phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</strong>
                    <p style="margin: 4px 0 0 0; font-size: 16px; color: #1e293b;">
                      <a href="tel:${sanitizedData.phone}" style="color: #0066cc; text-decoration: none;">${sanitizedData.phone}</a>
                    </p>
                  </td>
                </tr>
                ` : ''}
                ${sanitizedData.company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Company Name</strong>
                    <p style="margin: 4px 0 0 0; font-size: 16px; color: #1e293b;">${sanitizedData.company}</p>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</strong>
                    <p style="margin: 4px 0 0 0; font-size: 16px; color: #1e293b;">${sanitizedData.subject}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</strong>
                    <div style="margin: 8px 0 0 0; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
                      <p style="margin: 0; font-size: 15px; color: #1e293b; white-space: pre-wrap;">${sanitizedData.message}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            
            <div style="background: #1e293b; padding: 20px 30px; border-radius: 0 0 12px 12px; text-align: center;">
              <p style="color: #94a3b8; margin: 0; font-size: 12px;">
                This email was sent from the ALMZAJ USA website contact form.
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission
===========================

Full Name: ${sanitizedData.name}
Business Email: ${sanitizedData.email}
Phone Number: ${sanitizedData.phone || 'Not provided'}
Company Name: ${sanitizedData.company || 'Not provided'}
Subject: ${sanitizedData.subject}

Message:
${sanitizedData.message}

---
This email was sent from the ALMZAJ USA website contact form.
      `.trim(),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
