"use client"

import { useState } from "react"

export function NonTechnicalEvents() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const events = [
    {
      id: 1,
      title: "Bomb Squad",
      subtitle: "Game Tournament",
      emoji: "🎮",
      time: "14:00 - 16:00",
      location: "Gaming Arena",
      description: "High-energy gaming event in knockout format.",
      details: [
        "⚔ 8 teams → Quarters → Semis → Finals",
        "💥 Only 1 champion squad survives",
        "🏆 Winner takes all tournament",
      ],
      skills: "Team Strategy, Quick Reflex, Communication",
    },
    {
      id: 2,
      title: "Noise vs. Voice",
      subtitle: "Communication Challenge",
      emoji: "🔊",
      time: "16:30 - 18:00",
      location: "Activity Hall",
      description:
        "Multi-round challenge where participants distinguish between noise and meaningful voice across various scenarios, including lip-reading challenges.",
      details: [
        "👥 Teams of 2: One Speaker, One Listener",
        "🎧 Listener wears headphones with loud music",
        "👄 Speaker says words clearly - lip reading only",
        "⏱️ 2 minutes per round, 1 point per correct word",
        "🚫 No gestures, sign language, or acting allowed",
        "🏆 Highest score wins, tie-breaker round if needed",
      ],
      skills: "Lip Reading, Clear Communication, Focus Under Pressure",
      fullDescription: `**Event Overview:** Participants engage in multiple rounds focused on distinguishing between noise and meaningful voice across various scenarios. Each round presents statements or audio clips requiring teams to swiftly identify noise versus voice elements. Points awarded for accurate identifications, with highest scoring team declared winner. Collaboration with external aids or non-team members strictly prohibited. Event host has final authority on scoring and disputes.

**Team Formation:** Game played in pairs (2 members per team) - one Speaker and one Listener.

**Game Setup:** The Listener wears headphones with loud music to block outside sound. The Speaker receives a set of words on paper slips. The Listener must guess words by lip-reading only.

**How to Play:** Speaker selects and says words clearly without shouting, gestures, or acting. Only lip movement allowed - no sign language, hand spelling, or pointing. Listener watches lips and says the word aloud to confirm. Teams continue with as many words as possible within the time limit.

**Time & Scoring:** Each team gets 2 minutes per round. 1 point awarded for every correctly guessed word. Highest score wins. Tie-breaker round played if needed.

**General Rules:** Speaker must not act, mime, or draw - only lip movement allowed. Listener cannot remove or lower headphone volume. Words must be spoken naturally and clearly. Organizers' decisions are final.

**Disqualification:** Using gestures, body language, or writing/drawing clues. Cheating by lowering headphone volume. Misbehavior or arguing with organizers.`,
    },
    {
      id: 3,
      title: "Guess the Word",
      subtitle: "Blind Drawing",
      emoji: "✏️",
      time: "18:30 - 20:00",
      location: "Creative Studio",
      description: "Creativity & chaos guaranteed!",
      details: [
        "🙈 One teammate is blindfolded & must draw the word",
        "👥 Team must guess based on the doodle",
        "🔄 Drawing role rotates each round",
      ],
      skills: "Creativity, Abstract Thinking, Teamwork",
    },
    {
      id: 4,
      title: "IPL Auction",
      subtitle: "Cricket Team Building",
      emoji: "🏏",
      time: "20:30 - 22:00",
      location: "Auction Hall",
      description: "Build your dream cricket team!",
      details: [
        "🎤 Teams act as franchise owners",
        "💰 Bid strategically to balance budget & players",
        "🏆 Strongest roster wins!",
      ],
      skills: "Strategy, Budgeting, Negotiation, Decision Making",
    },
    {
      id: 5,
      title: "Free Fire",
      subtitle: "Battle Royale Championship",
      emoji: "🎮",
      time: "10:00 - 12:00",
      location: "Gaming Arena",
      description:
        "Dynamic battle royale competition featuring Garena Free Fire where participants compete to demonstrate their skills and strategies.",
      details: [
        "🔥 Battle royale survival gameplay",
        "⚡ Fast-paced action and strategy",
        "🏆 Last squad standing wins",
        "📱 Mobile gaming competition",
      ],
      skills: "Quick Reflexes, Strategic Thinking, Team Coordination",
      fullDescription: `**Event Overview:** Participants will compete in a dynamic Free Fire environment to demonstrate their skills and strategies. This high-energy battle royale competition will test players' survival instincts and tactical abilities.

**Game Format:** Teams compete in classic Free Fire battle royale matches with elimination-style progression.

**Rules & Regulations:** Detailed rules for this segment will be provided on-site to ensure an engaging and competitive atmosphere. All participants must follow fair play guidelines and tournament regulations.

**Equipment:** Gaming devices will be provided, or participants may use their own mobile devices with Free Fire installed.

**Judging:** Winners determined by in-game performance and survival rankings.`,
    },
  ]

  const handleBackToList = () => {
    setSelectedEvent(null)
  }

  const handleEventSelect = (eventId: number) => {
    setSelectedEvent(eventId)
  }

  if (selectedEvent !== null) {
    const event = events.find((e) => e.id === selectedEvent)
    if (!event) return null

    return (
      <div className="mb-16">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBackToList}
            className="flex items-center gap-1 text-sm text-lime-300 hover:text-lime-200 mb-6 transition-colors"
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Non-Technical Events
          </button>

          <div className="glass-border-enhanced rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="text-8xl mb-6" style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                {event.emoji}
              </div>
              <h2 className="text-4xl font-bold mb-2 text-white">{event.title}</h2>
              <p className="text-xl text-gray-300 mb-4">{event.subtitle}</p>
              <div
                style={{
                  backgroundColor: "#a3e635",
                  color: "#000000",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "600",
                  display: "inline-block",
                  marginBottom: "24px",
                }}
              >
                AN Event
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-lime-300 mb-4">Event Details</h3>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">⏰</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">📍</span>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-300 mt-4">{event.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-lime-300 mb-4">How It Works</h3>
                <div className="space-y-3">
                  {event.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="text-sm"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        color: "#ffffff",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {event.fullDescription && (
              <div
                className="mt-8 p-6 rounded-xl"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
              >
                <h3 className="text-xl font-semibold text-lime-300 mb-4">Complete Rules & Regulations</h3>
                <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{event.fullDescription}</div>
              </div>
            )}

            <div className="text-center">
              <div className="text-sm text-gray-400 mb-2">Skills Required:</div>
              <div className="text-lg font-medium text-lime-300">{event.skills}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-4 text-white">
          Non-Technical <span className="text-lime-300">Events</span>
        </h3>
        <div className="text-lime-300 text-xl font-semibold mb-4">Fun & Rewards! 🎉 Winner ₹1000</div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Engaging competitions that test creativity, strategy, and teamwork
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="glass-border-enhanced rounded-2xl p-6 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleEventSelect(event.id)}
          >
            <div className="text-center">
              <div className="text-6xl mb-4" style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                {event.emoji}
              </div>
              <h4 className="text-2xl font-bold mb-2 text-white">{event.title}</h4>
              <p className="text-lg text-gray-300 mb-4">{event.subtitle}</p>
              <div
                style={{
                  backgroundColor: "#a3e635",
                  color: "#000000",
                  padding: "3px 10px",
                  borderRadius: "10px",
                  fontSize: "11px",
                  fontWeight: "600",
                  display: "inline-block",
                  marginBottom: "16px",
                }}
              >
                AN Event
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center justify-center gap-2">
                  <span>⏰</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>📍</span>
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="mt-4 text-lime-300 text-sm font-medium">Click to view details →</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="glass-border-enhanced rounded-2xl p-6 max-w-2xl mx-auto">
          <div className="text-6xl mb-4">🎮</div>
          <h4 className="text-2xl font-bold mb-2 text-white">Consolex</h4>
          <p className="text-lg text-gray-300 mb-4">PS4 console gaming – jump in and play</p>
          <div className="text-lime-300 font-semibold">On the Spot Registration</div>
        </div>
      </div>
    </div>
  )
}
