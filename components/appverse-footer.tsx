"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Thank you for being part of our journey. We look forward to seeing you at the next symposium!",
  copyright: "© 2025 — Artificial Intelligence & Data Science",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col items-center space-y-6">
            {/* Brand */}
            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/images/aetherion-artistic-logo.jpeg"
                  alt="Aetherion Artistic Logo"
                  className="h-20 w-auto object-contain"
                />
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/revisions" className="hover:text-lime-300">
                Revision Policy
              </Link>
              <Link href="/t&c" className="hover:text-lime-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
