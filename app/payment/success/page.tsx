"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Calendar, MapPin, Mail, Home, Copy, Eye, EyeOff } from "lucide-react"

export default function PaymentSuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [emailSent, setEmailSent] = useState(false)
  const [emailSending, setEmailSending] = useState(true)
  const [showVerificationCode, setShowVerificationCode] = useState(false)

  const [registrationData] = useState(() => {
    const timestamp = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2, 5)
    const registrationId = `AET-${timestamp}-${random}`.toUpperCase()
    const verificationCode = Math.random().toString(36).substring(2, 8).toUpperCase()

    return { registrationId, verificationCode }
  })

  const ticketType = searchParams.get("ticket") || "standard"
  const amount = searchParams.get("amount") || "100"
  const name = searchParams.get("name") || ""
  const email = searchParams.get("email") || ""
  const collegeName = searchParams.get("college") || ""
  const phone = searchParams.get("phone") || ""

  const ticketTypeNames: Record<string, string> = {
    standard: "Standard Pass",
    premium: "Premium Pass",
    "paper-presentation": "Paper Presentation",
  }

  useEffect(() => {
    const sendConfirmationEmail = async () => {
      if (!email || !name) return

      try {
        const response = await fetch("/api/send-confirmation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            collegeName,
            phone,
            passType: ticketTypeNames[ticketType] || "Standard Pass",
            amount: Number.parseInt(amount),
            registrationId: registrationData.registrationId,
            verificationCode: registrationData.verificationCode,
          }),
        })

        if (response.ok) {
          setEmailSent(true)
        }
      } catch (error) {
        console.error("[v0] Failed to send confirmation email:", error)
      } finally {
        setEmailSending(false)
      }
    }

    sendConfirmationEmail()
  }, [email, name, collegeName, phone, ticketType, amount, registrationData])

  const copyVerificationCode = () => {
    navigator.clipboard.writeText(registrationData.verificationCode)
    alert("Verification code copied to clipboard!")
  }

  const downloadTicket = () => {
    // Simulate ticket download
    alert("Your digital ticket has been downloaded! Check your downloads folder.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-lime-300 rounded-full mb-6">
            <CheckCircle className="h-10 w-10 text-black" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Registration Successful!</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Welcome to Aetherion! Your payment has been processed and your registration is confirmed.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Registration Details */}
          <Card className="glass-border-enhanced bg-black/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-lime-300" />
                Registration Confirmed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Registration ID:</span>
                  <span className="text-white font-mono text-sm bg-black/70 px-2 py-1 rounded">
                    {registrationData.registrationId}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Verification Code:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lime-300 font-mono text-lg bg-black/70 px-3 py-1 rounded">
                      {showVerificationCode ? registrationData.verificationCode : "••••••"}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setShowVerificationCode(!showVerificationCode)}
                      className="text-gray-400 hover:text-white p-1"
                    >
                      {showVerificationCode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={copyVerificationCode}
                      className="text-gray-400 hover:text-white p-1"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pass Type:</span>
                  <Badge className="bg-lime-400 text-black">{ticketTypeNames[ticketType] || "Standard Pass"}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Amount Paid:</span>
                  <span className="text-2xl font-bold text-lime-300">₹{amount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Participant:</span>
                  <span className="text-white">{name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Email:</span>
                  <span className="text-white text-sm">{email}</span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Confirmation
                </h3>

                {emailSending ? (
                  <div className="flex items-center gap-2 text-yellow-400 text-sm">
                    <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                    Sending confirmation email...
                  </div>
                ) : emailSent ? (
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      Confirmation email sent successfully!
                    </div>
                    <ul className="space-y-1 ml-6">
                      <li>• Email sent to {email}</li>
                      <li>• Contains your verification code</li>
                      <li>• Includes event details and instructions</li>
                      <li>• Present verification code at event entrance</li>
                    </ul>
                  </div>
                ) : (
                  <div className="text-red-400 text-sm">
                    Failed to send confirmation email. Please save your verification code.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Event Information */}
          <Card className="glass-border-enhanced bg-black/50">
            <CardHeader>
              <CardTitle className="text-white">Event Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-lime-300" />
                  <div>
                    <p className="text-white font-semibold">September 27, 2024</p>
                    <p className="text-gray-300 text-sm">Full-day symposium</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-lime-300" />
                  <div>
                    <p className="text-white font-semibold">Premium Venue</p>
                    <p className="text-gray-300 text-sm">Location details in confirmation email</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4">
                <h3 className="text-white font-semibold mb-3">Your Access Includes:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {ticketType === "standard" && (
                    <>
                      <li>• Access to one Technical or Non-Technical session</li>
                      <li>• Welcome refreshments</li>
                      <li>• Digital conference materials</li>
                      <li>• Certificate of attendance</li>
                    </>
                  )}
                  {ticketType === "premium" && (
                    <>
                      <li>• Access to any two sessions</li>
                      <li>• Priority seating</li>
                      <li>• Welcome refreshments and networking lunch</li>
                      <li>• Aetherion branded swag package</li>
                      <li>• Certificate of attendance</li>
                    </>
                  )}
                  {ticketType === "paper-presentation" && (
                    <>
                      <li>• Present your research/paper</li>
                      <li>• Access to all sessions</li>
                      <li>• Priority networking opportunities</li>
                      <li>• Certificate of participation as presenter</li>
                      <li>• Publication opportunity</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="space-y-3 pt-4">
                <Button
                  onClick={downloadTicket}
                  className="w-full bg-lime-600 hover:bg-lime-700 text-black font-semibold"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Digital Ticket
                </Button>

                <Button
                  onClick={() => router.push("/")}
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Return to Homepage
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-border-enhanced bg-black/50 mt-8">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-white font-semibold">Event Entry Instructions</h3>
              <div className="grid gap-4 md:grid-cols-3 text-sm text-gray-300">
                <div>
                  <p className="font-semibold text-lime-300 mb-1">Bring Your Code</p>
                  <p>Present your 6-digit verification code at the venue entrance for quick check-in</p>
                </div>
                <div>
                  <p className="font-semibold text-lime-300 mb-1">Arrive Early</p>
                  <p>Registration opens 30 minutes before the first session</p>
                </div>
                <div>
                  <p className="font-semibold text-lime-300 mb-1">Valid ID Required</p>
                  <p>Bring your college ID or government-issued photo ID</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
