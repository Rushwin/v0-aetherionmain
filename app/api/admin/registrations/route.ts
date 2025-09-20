import { NextResponse } from "next/server"
import { verificationStore } from "@/lib/verification-store"

// Admin endpoint to view all registrations
export async function GET() {
  try {
    const registrations = verificationStore.getAllEntries()

    return NextResponse.json({
      success: true,
      data: registrations.map((entry) => ({
        registrationId: entry.registrationId,
        verificationCode: entry.verificationCode,
        name: entry.name,
        email: entry.email,
        collegeName: entry.collegeName,
        passType: entry.passType,
        amount: entry.amount,
        verified: entry.verified,
        createdAt: entry.createdAt,
      })),
    })
  } catch (error) {
    console.error("[v0] Admin API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
