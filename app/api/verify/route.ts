import { type NextRequest, NextResponse } from "next/server"
import { verificationStore } from "@/lib/verification-store"

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()

    if (!code || typeof code !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid verification code format",
        },
        { status: 400 },
      )
    }

    // Attempt to verify the code
    const verificationResult = verificationStore.verify(code.toUpperCase())

    if (verificationResult) {
      return NextResponse.json({
        success: true,
        message: "Verification successful! Welcome to Aetherion.",
        data: {
          registrationId: verificationResult.registrationId,
          name: verificationResult.name,
          email: verificationResult.email,
          passType: verificationResult.passType,
          amount: verificationResult.amount,
          collegeName: verificationResult.collegeName,
        },
      })
    } else {
      // Check if code exists but was already used
      const existingEntry = verificationStore.getByCode(code.toUpperCase())

      if (existingEntry && existingEntry.verified) {
        return NextResponse.json({
          success: false,
          message: "This verification code has already been used.",
        })
      } else {
        return NextResponse.json({
          success: false,
          message: "Invalid verification code. Please check and try again.",
        })
      }
    }
  } catch (error) {
    console.error("[v0] Verification API error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Verification failed. Please try again.",
      },
      { status: 500 },
    )
  }
}
