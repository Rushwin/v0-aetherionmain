"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Calendar, Info } from "lucide-react"
import { AboutModal } from "./about-modal"

export function SiteHeader() {
  const links = [
    { href: "/", label: "Home", icon: Calendar },
    { href: "#schedule", label: "Schedule", icon: Calendar },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-18%20at%2019.32.34_2f460d42.jpg-xFHYdVW6GA61UPKw4oSkJSJsqkyOZE.jpeg"
                alt="Aetherion Logo"
                fill
                className="object-contain rounded-sm"
                priority
              />
            </div>
            <span className="font-semibold tracking-wide text-white drop-shadow-sm">Aetherion</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-lime-300 transition-colors drop-shadow-sm">
                {l.label}
              </Link>
            ))}
            <AboutModal>
              <button className="hover:text-lime-300 transition-colors drop-shadow-sm">About</button>
            </AboutModal>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfABpJ2k55QTnY7pMIBtiUm4BUZgAJ8_OyqGPJ2VhXpm1CzQg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-black font-medium
                         transition-all hover:shadow-md hover:scale-[1.02]"
              style={{
                backgroundColor: "#a3e635",
                color: "#000000",
                border: "none",
                textDecoration: "none",
              }}
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
                  <div className="h-8 w-8 relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-18%20at%2019.32.34_2f460d42.jpg-xFHYdVW6GA61UPKw4oSkJSJsqkyOZE.jpeg"
                      alt="Aetherion Logo"
                      fill
                      className="object-contain rounded-sm"
                    />
                  </div>
                  <span className="font-semibold tracking-wide text-white text-lg">Aetherion</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-lime-300 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                  <AboutModal>
                    <button className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-lime-300 transition-colors w-full text-left">
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <Info className="h-4 w-4" />
                      </span>
                      <span className="text-sm">About</span>
                    </button>
                  </AboutModal>
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfABpJ2k55QTnY7pMIBtiUm4BUZgAJ8_OyqGPJ2VhXpm1CzQg/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-black font-medium
                               transition-all hover:shadow-md hover:scale-[1.02]"
                    style={{
                      backgroundColor: "#a3e635",
                      color: "#000000",
                      border: "none",
                      textDecoration: "none",
                    }}
                  >
                    Register Now
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
