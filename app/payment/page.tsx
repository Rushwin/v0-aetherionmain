"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Copy, CheckCircle, Clock, Smartphone } from "lucide-react"
import Image from "next/image"

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [copied, setCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds

  const ticketType = searchParams.get("ticket") || "standard"
  const amount = searchParams.get("amount") || "100"
  const name = searchParams.get("name") || ""
  const email = searchParams.get("email") || ""

  const upiId = "aaseemabu-1@okicici"

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("/registration")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(upiId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy UPI ID:", err)
    }
  }

  const handlePaymentComplete = () => {
    // Simulate payment completion and redirect to success page
    router.push(
      `/payment/success?ticket=${ticketType}&amount=${amount}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`,
    )
  }

  const openGooglePay = () => {
    const googlePayUrl = `upi://pay?pa=${upiId}&pn=Abu&am=${amount}&cu=INR&tn=Aetherion Registration - ${ticketType}`
    window.location.href = googlePayUrl
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => router.back()} className="text-white hover:bg-white/10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Registration
          </Button>
          <div className="flex items-center gap-2 text-orange-400">
            <Clock className="h-4 w-4" />
            <span className="font-mono text-sm">Time remaining: {formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Payment Details */}
          <Card className="glass-border-enhanced bg-black/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-lime-300" />
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Registration Type:</span>
                  <Badge className="bg-lime-400 text-black capitalize">{ticketType.replace("-", " ")}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Amount:</span>
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
                <h3 className="text-white font-semibold mb-3">Payment Instructions:</h3>
                <ol className="space-y-2 text-sm text-gray-300">
                  <li>1. Scan the QR code with any UPI app</li>
                  <li>2. Or copy the UPI ID and make payment</li>
                  <li>3. Enter amount: ₹{amount}</li>
                  <li>4. Complete the payment</li>
                  <li>5. Click "I've Completed Payment" below</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* QR Code and Payment Options */}
          <Card className="glass-border-enhanced bg-black/50">
            <CardHeader>
              <CardTitle className="text-white text-center">Pay with UPI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* QR Code */}
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-lg">
                  <Image
                    src="/images/google-pay-qr.jpg"
                    alt="Google Pay QR Code"
                    width={250}
                    height={350}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* UPI ID */}
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-gray-300 text-sm mb-2">UPI ID:</p>
                  <div className="flex items-center justify-center gap-2 bg-black/70 p-3 rounded-lg">
                    <span className="text-white font-mono">{upiId}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={copyUpiId}
                      className="text-lime-300 hover:bg-lime-300/10"
                    >
                      {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  {copied && <p className="text-lime-300 text-xs mt-1">UPI ID copied!</p>}
                </div>
              </div>

              {/* Payment Buttons */}
              <div className="space-y-3">
                <Button onClick={openGooglePay} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Open Google Pay
                </Button>

                <Button
                  onClick={handlePaymentComplete}
                  className="w-full font-semibold"
                  style={{
                    backgroundColor: "#a3e635",
                    color: "#000000",
                  }}
                >
                  I've Completed Payment
                </Button>
              </div>

              <p className="text-xs text-gray-400 text-center">
                Click "I've Completed Payment" only after successful payment completion
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
