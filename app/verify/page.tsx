"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Search } from "lucide-react"

interface VerificationResult {
  success: boolean
  data?: {
    registrationId: string
    name: string
    email: string
    passType: string
    amount: number
    collegeName: string
  }
  message: string
}

export default function VerifyPage() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState<VerificationResult | null>(null)
  const [loading, setLoading] = useState(false)

  const handleVerify = async () => {
    if (!code.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code.trim().toUpperCase() }),
      })

      const result: VerificationResult = await response.json()
      setResult(result)
    } catch (error) {
      setResult({
        success: false,
        message: "Verification failed. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-lime-400">Event Verification</CardTitle>
            <CardDescription className="text-slate-300">Enter your verification code to confirm entry</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="code" className="text-sm font-medium text-slate-200">
                Verification Code
              </label>
              <Input
                id="code"
                type="text"
                placeholder="Enter 6-digit code"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                maxLength={6}
              />
            </div>

            <Button
              onClick={handleVerify}
              disabled={loading || !code.trim()}
              className="w-full bg-lime-600 hover:bg-lime-700 text-white"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Verifying...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Verify Code
                </div>
              )}
            </Button>

            {result && (
              <Card
                className={`${result.success ? "bg-green-900/20 border-green-700" : "bg-red-900/20 border-red-700"}`}
              >
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    {result.success ? (
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className={`font-medium ${result.success ? "text-green-400" : "text-red-400"}`}>
                        {result.success ? "Verification Successful!" : "Verification Failed"}
                      </p>
                      <p className="text-sm text-slate-300 mt-1">{result.message}</p>

                      {result.success && result.data && (
                        <div className="mt-3 space-y-1 text-sm text-slate-300">
                          <p>
                            <span className="font-medium">Name:</span> {result.data.name}
                          </p>
                          <p>
                            <span className="font-medium">Registration ID:</span> {result.data.registrationId}
                          </p>
                          <p>
                            <span className="font-medium">Pass Type:</span> {result.data.passType}
                          </p>
                          <p>
                            <span className="font-medium">College:</span> {result.data.collegeName}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
