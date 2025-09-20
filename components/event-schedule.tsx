import { TechnicalEvents } from "./technical-events"
import { NonTechnicalEvents } from "./non-technical-events"
import { StallsExhibits } from "./stalls-exhibits"

export function EventSchedule() {
  return (
    <section id="schedule" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Aetherion <span className="text-lime-300">Schedule</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto text-pretty">
            September 27th – A full-day symposium featuring both Technical and Non-Technical events.
          </p>
        </div>

        <TechnicalEvents />
        <NonTechnicalEvents />

        {/* Added Stalls & Exhibits section */}
        <StallsExhibits />
      </div>
    </section>
  )
}
