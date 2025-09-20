"use client"

import { useState } from "react"

export function NonTechnicalEvents() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const events = [
    {
      id: 1,
      title: "Bomb Squad",
      subtitle: "Game Tournament",
      emoji: "/images/bomb-logo.jpeg",
      isImage: true, // Flag to indicate this is an image instead of emoji
      time: "14:00 - 16:00",
      location: "AI&DS Block",
      description: "High-energy gaming event in knockout format.",
      details: [
        "⚔ 8 teams → Quarters → Semis → Finals",
        "💥 Only 1 champion squad survives",
        "🏆 Winner takes all tournament",
      ],
      skills: "Team Strategy, Quick Reflex, Communication, Problem-solving under pressure, Coordination",
      fullDescription: `**Game Description:**
Bomb Squad is an action-packed, fast-paced arena game where players throw "bombs" at each other, with the goal of eliminating the opposing team. The game is played in a designated arena with obstacles for cover, and the last team standing (or the team with the most players remaining when time runs out) wins.

**Objective:**
Eliminate the opposing team by throwing bombs to hit them. Players are out when they are hit by a bomb or are in the blast radius. The team that eliminates all opposing players or has the most players remaining at the end of the round wins.

**Core Rules:**

**Starting:** Players spawn at designated points with countdown before each round.

**Throwing Bombs:** Bombs explode on impact or after set time, affecting players in blast radius. Can knock players back or off platforms.

**Elimination:** Players eliminated if hit directly, caught in blast radius, or fall out of bounds.

**Special Features:** 
• Power-ups spawn for better bombs, extra bombs, or shields
• Some bombs have special effects (freeze, stun, bigger explosions)
• Arena hazards like pits and fire zones add strategy

**Team Play:** Coordinate attacks, create traps, use communication for effective elimination strategies.

**Victory Conditions:**
• Elimination: First team to eliminate all opponents wins
• Survival: Most remaining players when time runs out wins
• Points-Based: Most eliminations/points across multiple rounds wins

**Tournament Format:**
• 8 teams participate in a knockout tournament
• Quarters → Semis → Finals progression
• Only 1 champion squad survives
• Winner takes all tournament structure

**Skills Required:**
Team Strategy, Quick Reflex, Communication, Problem-solving under pressure, Coordination

This event is designed to create an exciting, high-energy gaming experience that combines physical activity with strategic thinking, making it perfect for teams who enjoy action-packed challenges and working under pressure.`,
    },
    {
      id: 2,
      title: "Noise Vs Voice",
      subtitle: "Communication Challenge",
      emoji: "🔊",
      time: "16:30 - 18:00",
      location: "AI&DS Block",
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
      title: "guess the sketch",
      subtitle: "Blind Drawing",
      emoji: "✏️",
      time: "18:30 - 20:00",
      location: "AI&DS Block",
      description: "Creativity & chaos guaranteed!",
      details: [
        "🙈 One teammate is blindfolded & must draw the word",
        "👥 Team must guess based on the doodle",
        "🔄 Drawing role rotates each round",
      ],
      skills: "Creativity, Abstract Thinking, Teamwork",
      fullDescription: `**Event Description: Guess the Sketch (Blind Drawing)**

"Guess the Sketch" is a chaotic and creative team event where communication and abstract thinking are key. Taking place from 18:30 to 20:00 in the Creative Studio, this blind drawing competition promises an evening of pure fun and hilarious misinterpretations.

**How It Works:**
The rules are simple: one person on each team is blindfolded and given a word to draw. With only their sense of touch and a vague idea of the canvas, they must create a sketch that their teammates can decipher. The rest of the team must then work together to guess the word based on the resulting doodle.

**Game Format:**
• One team member is blindfolded each round
• Blindfolded player receives a word to draw
• They must sketch using only touch and spatial awareness
• Teammates observe the drawing process and final result
• Team collaborates to guess the word from the sketch
• Drawing role rotates each round ensuring everyone participates

**Key Rules:**
• No verbal hints from the drawer during sketching
• Teammates can only guess after drawing is complete
• Time limit applies for both drawing and guessing phases
• All team members must take turns as the blindfolded artist

**What Makes It Special:**
This isn't about artistic talent; it's about making the most of a messy situation. The drawing role rotates each round, ensuring everyone gets a chance to test their communication and sketching skills. This event is perfect for those who enjoy a challenge and don't mind a little "creativity & chaos guaranteed!"

Get ready to laugh as you try to turn a simple word into a masterpiece—or, more likely, a hilarious scribble. The event combines the challenge of blind drawing with team collaboration, creating memorable moments of creative chaos and unexpected artistic interpretations.`,
    },
    {
      id: 4,
      title: "IPL Auction",
      subtitle: "Cricket Team Building",
      emoji: "/images/ipl-logo.jpeg",
      isImage: true, // Flag to indicate this is an image instead of emoji
      time: "20:30 - 22:00",
      location: "AI&DS Block",
      description: "Build your dream cricket team!",
      details: [
        "🎤 Teams act as franchise owners",
        "💰 Bid strategically to balance budget & players",
        "🏆 Strongest roster wins!",
      ],
      skills: "Strategy, Budgeting, Negotiation, Decision Making",
      fullDescription: `**🏏 IPL Auction Rules**

**Rule 1:** Each team must build a squad of 11 players within their purse of ₹50 Crores.

**Rule 2:** Each squad must include a minimum of 3 batsmen, 3 bowlers, 1 wicketkeeper, and 1 all-rounder.

**Rule 3:** A special Steal Card will also be auctioned. This card allows the team to steal a player from another franchise at the same price that was originally paid.

**Rule 4:** A Hidden Card will be introduced. In this case, only the role of the player will be revealed during the bidding. The actual player's name will be disclosed only after the bidding is completed.

**Rule 5:** Every player will have a base price according to their potential.

---

**🏆 Winning Criteria**

Each player carries a credit score based on their last 5 years of IPL performance.

The franchise whose playing XI has the highest total credit score will be declared the winner.`,
    },
    {
      id: 5,
      title: "Free Fire",
      subtitle: "Battle Royale Championship",
      emoji: "/images/garena-logo.jpeg",
      isImage: true, // Flag to indicate this is an image instead of emoji
      time: "10:00 - 12:00",
      location: "AI&DS Block",
      description:
        "Dynamic battle royale competition featuring Garena Free Fire where participants compete to demonstrate their skills and strategies.",
      details: [
        "🔥 Battle royale survival gameplay",
        "⚡ Fast-paced action and strategy",
        "🏆 Last squad standing wins",
        "📱 Mobile gaming competition",
      ],
      skills: "Quick Reflexes, Strategic Thinking, Team Coordination",
      fullDescription: `**Event Overview:** Full map match conducted with teams competing for top positions. Those who listed in top two advance to the final clash squad match.

**General Rules:**
• Full map match conducted
• Those who listed in top two are selected for clash squad match
• All final decisions are decided by the organizers and coordinators (no arguments)
• If any player or team involves in arguments with other teams, the whole team will be eliminated

**BR MATCH RULES:**
1. Top two teams selected based on points
2. Points are calculated as:
   • Each kill - 5 points
   • Booyah - 10 points
3. If points are tied between two teams, we conduct (4-round) clash squad match
4. No panel, No emulator
5. If any player in a team is caught in suspicious activity (panel, hack), the whole team will be eliminated
6. All final decisions are decided by the organizers and coordinators (no objection)

**CLASH SQUAD RULES:**
1. Players are restricted to use grenades, smoke bombs (all other rules are allowed)
2. No gun skins, No character skill
3. No panel users, No emulator
4. If any player in a team is caught in suspicious activity (panel, hack), the whole team will be eliminated
5. The total number of rounds adjusted by the organizers and coordinators
6. Which team has won the match they are considered as winners

**Equipment:** Participants may use their own mobile devices with Free Fire installed.`,
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
              {event.isImage ? (
                <div className="mb-6">
                  <img
                    src={event.emoji || "/placeholder.svg"}
                    alt={
                      event.title === "IPL Auction"
                        ? "IPL Logo"
                        : event.title === "Free Fire"
                          ? "Garena Logo"
                          : "Event Logo"
                    }
                    className="w-24 h-24 mx-auto object-contain"
                  />
                </div>
              ) : (
                <div className="text-8xl mb-6" style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                  {event.emoji}
                </div>
              )}
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
              {event.isImage ? (
                <div className="mb-4">
                  <img
                    src={event.emoji || "/placeholder.svg"}
                    alt={
                      event.title === "IPL Auction"
                        ? "IPL Logo"
                        : event.title === "Free Fire"
                          ? "Garena Logo"
                          : "Event Logo"
                    }
                    className="w-16 h-16 mx-auto mb-4 object-contain"
                  />
                </div>
              ) : (
                <div className="text-6xl mb-4" style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                  {event.emoji}
                </div>
              )}
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

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="glass-border-enhanced rounded-2xl p-8 text-center">
          <div className="mb-6">
            <img
              src="/images/playstation-logo.jpeg"
              alt="PlayStation Logo"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">Consolex</h2>
          <p className="text-xl text-gray-300 mb-6">PS4 console gaming – jump in and play</p>
          <div className="text-lime-300 text-lg font-semibold">On the Spot Registration</div>
        </div>
      </div>
    </div>
  )
}
