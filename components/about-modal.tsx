"use client"

import type React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Clock, MapPin, Users, Trophy, Gamepad2 } from "lucide-react"

interface AboutModalProps {
  children: React.ReactNode
}

export function AboutModal({ children }: AboutModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
            About Aetherion 2024
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-8">
            {/* Event Overview */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-lime-400">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">27th September 2024</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Clock className="h-4 w-4" />
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>AI & DS Block</span>
              </div>
            </div>

            {/* Technical Events Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lime-400">
                <Trophy className="h-5 w-5" />
                <h3 className="text-xl font-bold">Technical Events</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The Department of Artificial Intelligence & Data Science is proud to host an exciting day of Technical
                Events designed to spark creativity, challenge intellect, and celebrate innovation. With four engaging
                events lined up, participants can immerse themselves in hands-on challenges, critical thinking, and
                knowledge sharing while competing for top honors.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-lime-400 mb-2">1. AI WAR</h4>
                  <p className="text-sm text-gray-300">
                    A thrilling coding and strategy contest where participants develop and deploy AI models or
                    algorithms to outsmart their opponents. Perfect for budding AI enthusiasts to test their programming
                    skills and innovation.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-lime-400 mb-2">2. Paper Presentation</h4>
                  <p className="text-sm text-gray-300">
                    A professional platform for students to present original research, innovative ideas, or case
                    studies. Enhances communication, analytical, and public speaking skills.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-lime-400 mb-2">3. MindMaze – Capture the Flag</h4>
                  <p className="text-sm text-gray-300">
                    A hybrid of quiz, puzzle, and problem-solving challenge that tests mental agility and teamwork.
                    Navigate through clues and logic riddles to unlock hidden "flags".
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-lime-400 mb-2">4. Truth or Trap</h4>
                  <p className="text-sm text-gray-300">
                    A fun twist based on two truths and one lie. Participants must convincingly state three "facts"
                    while others guess which statement is false.
                  </p>
                </div>
              </div>
            </div>

            {/* Non-Technical Events Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lime-400">
                <Gamepad2 className="h-5 w-5" />
                <h3 className="text-xl font-bold">Non-Technical Events</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To complement the technical competitions and create a fun, inclusive atmosphere, we're hosting a vibrant
                line-up of Non-Technical Events. These activities bring out creativity, spontaneity, and team spirit
                while giving everyone a refreshing break from academic rigour.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-lime-400 mb-2">1. Bomb Squad</h4>
                  <p className="text-sm text-gray-300">
                    An adrenaline-charged challenge testing quick thinking and coordination. Navigate clues and
                    obstacles to "defuse" a symbolic bomb before time runs out.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-lime-400 mb-2">2. IPL Auction</h4>
                  <p className="text-sm text-gray-300">
                    Cricket lovers can enjoy IPL-themed activities including quizzes, prediction rounds, and fantasy
                    team building in a competitive environment.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-lime-400 mb-2">3. Noise Vs Voice</h4>
                  <p className="text-sm text-gray-300">
                    A creative communication challenge where participants convey words or phrases under constraints,
                    leading to hilarious and memorable moments.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-lime-400 mb-2">4. guess the sketch</h4>
                  <p className="text-sm text-gray-300">
                    A lively Pictionary-style contest where participants identify objects based on drawings. Encourages
                    creativity, observation, and teamwork.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-lime-400 mb-2">5. Free Fire</h4>
                  <p className="text-sm text-gray-300">
                    Mobile-based e-sports tournament on the popular battle-royale game. Test reflexes, tactics, and
                    adaptability in fast-paced matches.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-4 pt-6 border-t border-gray-700">
              <div className="flex items-center justify-center gap-2 text-lime-400">
                <Users className="h-5 w-5" />
                <span className="font-semibold">Join Us for an Unforgettable Experience!</span>
              </div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Whether you're participating or cheering for your friends, Aetherion 2024 promises to be a highlight of
                the academic year. Mark your calendars and be part of this celebration of innovation, excitement, and
                community spirit!
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
