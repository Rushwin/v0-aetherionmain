"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function RegistrationForm() {
  const handleRegistrationClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfABpJ2k55QTnY7pMIBtiUm4BUZgAJ8_OyqGPJ2VhXpm1CzQg/viewform?usp=header",
      "_blank",
    )
  }

  return (
    <section id="registration" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Register for <span className="text-lime-300">Aetherion</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto text-pretty">
            Secure your spot at Aetherion - September 27th – A full-day symposium featuring both Technical and
            Non-Technical events.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Button
            onClick={handleRegistrationClick}
            className="w-full font-semibold py-4 text-lg flex items-center justify-center gap-2"
            style={{
              backgroundColor: "#a3e635",
              color: "#000000",
              border: "none",
            }}
          >
            <span style={{ color: "#000000" }}>Complete Aetherion Registration</span>
            <ExternalLink className="h-5 w-5" style={{ color: "#000000" }} />
          </Button>
        </div>
      </div>
    </section>
  )
}
