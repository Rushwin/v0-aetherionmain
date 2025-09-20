import { SiteHeader } from "@/components/site-header"
import { SymposiumHero } from "@/components/symposium-hero"
import { EventSchedule } from "@/components/event-schedule"
// import { SpeakerProfiles } from "@/components/speaker-profiles"
import { LogoMarquee } from "@/components/logo-marquee"
import { SponsorMarquee } from "@/components/sponsor-marquee"
import { RegistrationForm } from "@/components/registration-form"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  const symposiumStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": "https://symposium2024.com/",
    name: "Aetherion",
    description:
      "Join industry leaders and innovators for a transformative event exploring the future of technology and its impact on society.",
    url: "https://symposium2024.com/",
    startDate: "2024-10-15T09:30:00",
    endDate: "2024-10-17T18:00:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Innovation Center",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Tech Boulevard",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94105",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Tech Innovation Institute",
      url: "https://symposium2024.com",
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://symposium2024.com/",
    name: "Aetherion | Transform Your Future",
    description:
      "Join industry leaders and innovators for a transformative event exploring the future of technology and its impact on society.",
    url: "https://symposium2024.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Tech Innovation Institute",
      url: "https://symposium2024.com",
    },
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <SymposiumHero />
        <EventSchedule />
        <LogoMarquee />
        <SponsorMarquee />
        <RegistrationForm />
        <AppverseFooter />
      </main>

      <Script
        id="symposium-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(symposiumStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
