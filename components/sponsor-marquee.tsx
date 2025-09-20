"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SponsorMarquee() {
  const sponsors = [
    {
      name: "AM Tourism Holiday Masters",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2016.15.38_ce41b1f1.jpg-Qj5M2cPcBbqa3iRLSfmUWWnT3YKX7y.jpeg",
      description: "Tourism & Holiday Services",
    },
    {
      name: "THIRAMAI LLP",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2016.00.22_b1db4a20.jpg-6Wnpd3M70pO9H4sYwVRMtQ40Iw1r9y.jpeg",
      description: "Technical Consulting Services",
    },
    {
      name: "Sponsor 3",
      image: "/generic-tech-logo.png",
      description: "Technology Partner",
    },
    {
      name: "Sponsor 4",
      image: "/innovation-company-logo.png",
      description: "Innovation Partner",
    },
  ]

  return (
    <section className="text-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Our <span className="text-lime-300">Sponsors</span>
          </h2>
          <Button variant="outline" className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced bg-transparent">
            Learn More
          </Button>
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            We proudly acknowledge our sponsors, whose support helps us foster innovation and learning throughout this
            symposium.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="group relative">
              <div className="w-full h-48 sm:h-56 lg:h-64 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.image || "/placeholder.svg"}
                    alt={sponsor.name}
                    fill
                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="(min-width: 1024px) 500px, (min-width: 640px) 400px, 350px"
                  />
                </div>
              </div>

              {/* Sponsor name and description on hover */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-6">
                <h3 className="text-white font-semibold text-center mb-3 text-base sm:text-lg">{sponsor.name}</h3>
                <p className="text-neutral-300 text-sm sm:text-base text-center">{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
