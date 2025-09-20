import { type NextRequest, NextResponse } from "next/server"
import { createRegistrationEmailTemplate, sendEmail, type RegistrationData } from "@/lib/email-service"
import { verificationStore } from "@/lib/verification-store"

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.registrationId || !data.verificationCode) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Store verification data
    verificationStore.store({
      registrationId: data.registrationId,
      verificationCode: data.verificationCode,
      email: data.email,
      name: data.name,
      passType: data.passType,
      amount: data.amount,
      collegeName: data.collegeName,
      phone: data.phone,
    })

    // Create email template
    const emailData = createRegistrationEmailTemplate(data)

    // Send email
    const emailSent = await sendEmail(emailData)

    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: "Confirmation email sent successfully",
      })
    } else {
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }
  } catch (error) {
    console.error("[v0] Email API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
