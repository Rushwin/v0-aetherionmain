"use client"

import { Instagram, Mail } from "lucide-react"

export function SocialMediaSection() {
  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Connect With Us</h2>
            <p className="text-neutral-400 text-sm">Follow our journey and stay updated</p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/aetherion_2k25_?igsh=MXdoMHdtNWgxaHJ3MQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:border-lime-400/50 hover:bg-lime-400/10 transition-all duration-300 group"
              aria-label="Follow aetherion on Instagram"
            >
              <Instagram className="h-5 w-5 text-neutral-400 group-hover:text-lime-400 transition-colors" />
              <span className="text-sm font-medium group-hover:text-lime-400 transition-colors">Instagram</span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=aetherionaids@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:border-lime-400/50 hover:bg-lime-400/10 transition-all duration-300 group"
              aria-label="Contact us via Gmail app"
            >
              <Mail className="h-5 w-5 text-neutral-400 group-hover:text-lime-400 transition-colors" />
              <span className="text-sm font-medium group-hover:text-lime-400 transition-colors">Gmail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
