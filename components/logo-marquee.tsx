"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  const logos = [
    {
      name: "Sirfa Shopping",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.17.10_8542f86f.jpg-ajOpJtInVOWSRTRaBGdXVA9mKlOyGc.jpeg",
    },
    {
      name: "The Pastry Heaven",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2021.16.26_e9f7ce85.jpg-zHOGSofxPN06KatiVKTr6F00vUQRbg.jpeg",
    },
    {
      name: "T & H",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.17.12_ba7af1db.jpg-R72Eijz62yOYLJ0W2uHVaC0d8goP66.jpeg",
    },
    {
      name: "String Theory Studio",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.17.13_22650387.jpg-G8QbuQKJVwiOByZ58WkSaxddwHzzGW.jpeg",
    },
    {
      name: "Arabic Brand",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.17.10_53006730.jpg-Oxt9wMk9uEJuHLHcTabXIemTDwSFOA.jpeg",
    },
    {
      name: "Pick Me Up",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.17.12_9a7b9ace.jpg-DqUzUUZ43M99mkwTwe2xqwYqGICN0V.jpeg",
    },
    {
      name: "A R EDIBLE Foods",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.18.59_a6d1c123.jpg-OJs2pLk71pgxDzyhpehpNWabUpoKyE.jpeg",
    },
  ]

  const secondRowLogos = [
    {
      name: "Naba's Boutique",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.17.10_78ef1310.jpg-0cV4egcbuQrwXy4PzbdGIHlul1ue9S.jpeg",
    },
    {
      name: "Hana Healthy Drink",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.17.12_11073070.jpg-gEUOnhqExxYjFSDyUFAbOPc19TtubV.jpeg",
    },
    {
      name: "Sirfa Shopping",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.17.10_8542f86f.jpg-ajOpJtInVOWSRTRaBGdXVA9mKlOyGc.jpeg",
    },
    {
      name: "The Pastry Heaven",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2021.16.26_e9f7ce85.jpg-zHOGSofxPN06KatiVKTr6F00vUQRbg.jpeg",
    },
    {
      name: "String Theory Studio",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.17.13_22650387.jpg-G8QbuQKJVwiOByZ58WkSaxddwHzzGW.jpeg",
    },
    {
      name: "Pick Me Up",
      content: "image",
      color: "text-neutral-300",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.17.12_9a7b9ace.jpg-DqUzUUZ43M99mkwTwe2xqwYqGICN0V.jpeg",
    },
  ]

  const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 group">
        {logo.image ? (
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 p-1.5">
            <Image
              src={logo.image || "/placeholder.svg"}
              alt={logo.name}
              fill
              className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              sizes="(min-width: 1024px) 96px, (min-width: 640px) 80px, 64px"
            />
          </div>
        ) : logo.bg ? (
          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${logo.bg} flex items-center justify-center`}>
            <span className={`text-sm sm:text-lg font-bold ${logo.color}`}>{logo.content}</span>
          </div>
        ) : (
          <span className={`text-lg sm:text-xl lg:text-2xl font-semibold ${logo.color}`}>{logo.content}</span>
        )}
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Brands We <span className="text-lime-300">Work</span>
            <br />
            With
          </h2>
          <Button variant="outline" className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced bg-transparent">
            Learn More
          </Button>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-right whitespace-nowrap ${pausedRow === "first" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {/* Triple the logos for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-left whitespace-nowrap ${pausedRow === "second" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {/* Triple the logos for seamless loop */}
              {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
                <LogoCard key={`second-${index}`} logo={logo} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
