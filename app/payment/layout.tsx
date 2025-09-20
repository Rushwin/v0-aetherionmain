import type React from "react"
export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">{children}</div>
}
