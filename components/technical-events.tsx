"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock, MapPin } from "lucide-react"

interface TechnicalEvent {
  id: string
  title: string
  emoji: string
  shortDescription: string
  fullDescription: string
  rounds?: string[]
  skills: string[]
  time: string
  location: string
}

const technicalEvents: TechnicalEvent[] = [
  {
    id: "ai-war",
    title: "AI War: Man vs. AI",
    emoji: "🤖",
    shortDescription: "A 4-round showdown where YOU battle AI with creativity & logic!",
    fullDescription: `🤖 AI WAR – Official Rulebook

🌀 Round 1 – 🎨 Image Recreation
Prompt AI tools to recreate a given image as accurately as possible. 15 minutes, multiple attempts allowed.
Judging: Accuracy (70%), Prompt creativity (20%), Presentation (10%)

🌀 Round 2 – 💻 Web UI Sabotage  
Build the same webpage while your opponent sends sabotage prompts you must implement. 20 minutes each.
Allowed sabotage: Visual changes, layout shifts, content modifications, behavior tweaks
Judging: Functionality (35%), Resilience (25%), Design (20%), Code quality (10%), Creativity (10%)

🌀 Round 3 – 🧠 AI Hallucination
Trick AI into giving confident but incorrect answers. 10-15 minutes, max 5 prompts.
Judging: Success rate (40%), AI confidence (25%), Prompt creativity (20%), Clarity (15%)

🌀 Final Round – 🚪 AI Escape Room
Solve text-based escape room puzzles using AI guidance. 30 minutes time limit.
Judging: Completion (50%), Time (20%), Accuracy (20%), Strategy (10%)

Rules: No harmful prompts, no pre-built templates, no external aids during hallucination round.`,
    rounds: [
      "Round 1 – 🎨 Image Recreation: Prompt an AI to perfectly recreate a given image.",
      "Round 2 – 💻 Web UI Sabotage: Build a webpage ⚔ while your opponent disrupts you with AI prompts.",
      "Round 3 – 🌀 AI Hallucination: Trick an AI into giving a confident but wrong answer.",
      "Final Round – 🔐 AI Escape Room: Solve puzzles in a text-based escape room guided by AI.",
    ],
    skills: ["Prompt Engineering", "Critical Thinking", "Logic", "Web Skills"],
    time: "10:00",
    location: "AI&DS Block",
  },
  {
    id: "ctf-hide-seek",
    title: "Mindmaze: CTF", // Simplified from "Mindmaze: Capture The Flag (CTF): Hide & Seek" to just "Mindmaze: CTF"
    emoji: "🕵",
    shortDescription: "Cybersecurity treasure hunt inside a server's file system.",
    fullDescription: "🔎 Cybersecurity treasure hunt inside a server's file system.",
    rounds: [
      "🏁 Start with a clue → find the flag (hidden text).",
      "🧩 Each flag unlocks the next level.",
      "⚡ 7–10 levels with difficulty going from easy → hardcore.",
    ],
    skills: ["Cybersecurity Basics", "Command-Line Pro", "Forensics", "Problem Solving"],
    time: "11:15",
    location: "AI&DS Block",
  },
  {
    id: "startup-pitch",
    title: "The Startup Pitch",
    emoji: "💡",
    shortDescription: "Pitch your own idea to judges! (Paper Presentation)",
    fullDescription: `🚀 Pitch your own idea to judges! (Paper Presentation)

📋 Student Paper Presentation – Guidelines & Rules

✅ Eligibility
• Open to undergraduate and postgraduate students from AI & DS and related Computing disciplines.
• Individual or team participation (maximum four members) is allowed.

📄 Paper Submission
• Abstract must be submitted in IEEE format (maximum 250 words).
• Full paper, if shortlisted, should not exceed 6 pages including references.
• Submission deadline: [Insert Date]
• Send submissions to: [Insert Symposium Email]

🔍 Plagiarism & Originality
• Papers must be original and unpublished.
• Plagiarism above 10% will lead to disqualification.

🎤 Presentation Format
• Each team will be allotted 7 minutes for presentation and 3 minutes for Q&A.
• PowerPoint slides are mandatory.
• Presenters must bring their slides on a pen drive and have them on their Email and report 30 minutes before the session.

⚖️ Evaluation Criteria
• Innovation and relevance of the topic
• Technical depth and clarity
• Presentation skills
• Response to questions

🏆 Awards & Recognition
• Best Paper Award with certificate and prize.

📝 General Instructions
• All participants must carry valid college ID cards.
• Judges' decision will be final and binding.`,
    rounds: ["🎤 Present your problem + solution + impact.", "🧠 Impress with innovation, clarity, and confidence."],
    skills: ["Public Speaking", "Ideation", "Tech Communication", "Business Thinking"],
    time: "12:30",
    location: "AI&DS Block",
  },
  {
    id: "truth-or-trap",
    title: "Truth or Trap: 2T&1F",
    emoji: "🎯",
    shortDescription: "Two Truths and One Lie Contest - Identify the AI-related lie!",
    fullDescription:
      "🎯 Two Truths and One Lie Contest Rules: A set of three AI-related statements (two truths, one lie) will be displayed on the screen for each question set. Teams must identify the single lie as quickly as possible; only the first team to submit the correct answer will be awarded points for that set. The host will announce which team submitted first and confirm correctness before proceeding to the next set. At the end of each round, teams with the most accumulated points will advance to the next round; teams with the fewest points will be eliminated. Mobile devices, external aids, and discussion with members outside the team during each set are prohibited – fairness and quick thinking are key. The host's decisions regarding scoring, advancement, or tie-breaks are final and binding for all teams.",
    rounds: [
      "📱 Three AI-related statements displayed on screen (2 truths, 1 lie)",
      "⚡ First team to identify the lie correctly gets points",
      "🏆 Teams with most points advance, lowest eliminated each round",
      "🚫 No mobile devices, external aids, or outside discussion allowed",
    ],
    skills: ["AI Knowledge", "Quick Thinking", "Pattern Recognition", "Team Coordination"],
    time: "14:00",
    location: "AI&DS Block",
  },
]

export function TechnicalEvents() {
  const [selectedEvent, setSelectedEvent] = useState<TechnicalEvent | null>(null)

  const handleEventClick = (event: TechnicalEvent) => {
    setSelectedEvent(event)
  }

  const handleBackClick = () => {
    setSelectedEvent(null)
  }

  if (selectedEvent) {
    return (
      <section className="py-12 bg-black/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 text-lime-300 hover:text-lime-200 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Technical Events
            </button>

            <Card className="bg-black/80 border-white/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{selectedEvent.emoji}</div>
                  <h2 className="text-3xl font-bold mb-4 text-balance">{selectedEvent.title}</h2>
                  <p className="text-gray-300 text-lg text-pretty">{selectedEvent.fullDescription}</p>
                </div>

                {selectedEvent.rounds && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-lime-300">How it Works:</h3>
                    <div className="space-y-3">
                      {selectedEvent.rounds.map((round, index) => (
                        <div key={index} className="bg-white/10 p-4 rounded-lg border border-white/20">
                          <p className="text-gray-200">{round}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-lime-300">Skills Required:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-lime-300 text-black rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-black/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-balance">
            Technical <span className="text-lime-300">Events</span>
          </h3>
          <div className="text-lime-300 text-xl font-semibold mb-4">Win Big! 🏆 Winner ₹2000 | Runner ₹1000</div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto text-pretty">
            Interactive challenges designed to test your technical prowess
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {technicalEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-black/80 border-white/20 hover:border-lime-300/50 transition-all cursor-pointer group"
              onClick={() => handleEventClick(event)}
            >
              <CardContent className="p-6 text-center">
                <div
                  className="text-4xl mb-4"
                  style={{
                    color: "#ffffff",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  {event.emoji}
                </div>
                <h4 className="text-xl font-bold mb-3 text-balance group-hover:text-lime-300 transition-colors text-white">
                  {event.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4 text-pretty">{event.shortDescription}</p>

                <div className="flex items-center justify-between text-sm">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "#a3e635",
                      color: "#000000",
                      fontWeight: "600",
                    }}
                  >
                    FN Event
                  </span>
                  <span className="text-gray-400">{event.time}</span>
                </div>

                <div className="mt-4 text-white text-sm group-hover:text-gray-200 transition-colors">
                  Click to view details →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
