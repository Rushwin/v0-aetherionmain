import { Resend } from "resend"

const resend = null

export interface RegistrationData {
  name: string
  email: string
  registrationId: string
  verificationCode: string
  passType: string
  amount: number
  collegeName?: string
  phone?: string
}

export interface EmailData {
  email: string
  name: string
  verificationCode: string
}

export function createRegistrationEmailTemplate(data: RegistrationData): EmailData {
  return {
    email: data.email,
    name: data.name,
    verificationCode: data.verificationCode,
  }
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("[v0] Resend API key not configured")
      return false
    }

    const resend = new Resend(apiKey)

    console.log("[v0] Sending confirmation email to:", data.email)
    console.log("[v0] Verification code:", data.verificationCode)

    const isTestingMode = !process.env.RESEND_VERIFIED_DOMAIN
    const recipientEmail = isTestingMode ? "aetherionaids@gmail.com" : data.email

    if (isTestingMode) {
      console.log("[v0] Testing mode: Redirecting email to verified address:", recipientEmail)
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aetherion Registration Confirmation</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8fafc;
          }
          .container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e2e8f0;
          }
          .logo {
            font-size: 28px;
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 10px;
          }
          .verification-code {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin: 30px 0;
          }
          .code {
            font-size: 32px;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 10px 0;
          }
          .event-details {
            background: #f1f5f9;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            padding: 5px 0;
            border-bottom: 1px solid #e2e8f0;
          }
          .detail-label {
            font-weight: 600;
            color: #475569;
          }
          .detail-value {
            color: #1e293b;
          }
          .instructions {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 15px;
            margin: 20px 0;
          }
          .testing-notice {
            background: #dbeafe;
            border-left: 4px solid #3b82f6;
            padding: 15px;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">AETHERION</div>
            <p style="color: #64748b; margin: 0;">Registration Confirmation</p>
          </div>

          <h2 style="color: #1e293b; margin-bottom: 20px;">Welcome, ${data.name}!</h2>
          
          <p>Congratulations! Your registration for <strong>Aetherion</strong> has been successfully confirmed. We're excited to have you join us for this incredible event.</p>

          ${
            isTestingMode
              ? `
          <div class="testing-notice">
            <h4 style="margin-top: 0; color: #1e40af;">Testing Mode Notice</h4>
            <p style="margin: 0;">This email was originally intended for <strong>${data.email}</strong> but was redirected to the verified email address for testing purposes. In production, emails will be sent directly to the registered email address.</p>
          </div>
          `
              : ""
          }

          <div class="verification-code">
            <p style="margin: 0; font-size: 16px;">Your Verification Code</p>
            <div class="code">${data.verificationCode}</div>
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">Present this code at the event entrance</p>
          </div>

          <div class="event-details">
            <h3 style="margin-top: 0; color: #1e293b;">Event Details</h3>
            <div class="detail-row">
              <span class="detail-label">Event Name:</span>
              <span class="detail-value">Aetherion</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date:</span>
              <span class="detail-value">December 15, 2024</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">6:00 PM - 11:00 PM</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Venue:</span>
              <span class="detail-value">Grand Convention Center</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Dress Code:</span>
              <span class="detail-value">Semi-formal</span>
            </div>
            ${
              isTestingMode
                ? `
            <div class="detail-row">
              <span class="detail-label">Original Email:</span>
              <span class="detail-value">${data.email}</span>
            </div>
            `
                : ""
            }
          </div>

          <div class="instructions">
            <h4 style="margin-top: 0; color: #92400e;">Important Instructions</h4>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Arrive at least 30 minutes before the event starts</li>
              <li>Present your verification code <strong>${data.verificationCode}</strong> at the entrance</li>
              <li>Bring a valid photo ID for verification</li>
              <li>Keep this email accessible on your phone for quick reference</li>
              <li>Contact support if you have any questions or issues</li>
            </ul>
          </div>

          <p>We look forward to seeing you at Aetherion! If you have any questions or need assistance, please don't hesitate to reach out to our support team.</p>

          <div class="footer">
            <p>This is an automated confirmation email for your Aetherion registration.</p>
            <p>© 2024 Aetherion. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `

    const result = await resend.emails.send({
      from: "Aetherion <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `Aetherion Registration Confirmed - ${isTestingMode ? `[TEST for ${data.email}] ` : ""}Your Verification Code Inside`,
      html: emailHtml,
    })

    console.log("[v0] Email sent successfully:", result)

    if (result.error) {
      console.error("[v0] Resend API error:", result.error)
      return false
    }

    return true
  } catch (error) {
    console.error("[v0] Email sending failed:", error)
    return false
  }
}

export async function sendConfirmationEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  const success = await sendEmail(data)
  return success ? { success: true } : { success: false, error: "Failed to send email" }
}
