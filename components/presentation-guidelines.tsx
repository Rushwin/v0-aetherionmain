"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, FileText, Trophy, CheckCircle } from "lucide-react"

export function PresentationGuidelines() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Student Paper Presentation</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Guidelines & Rules for AI & DS Students</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Eligibility */}
          <Card className="glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-lime-400" />
                Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>• Open to AI & DS students</p>
              <p>• Individual or team (max 4 members)</p>
              <Badge variant="secondary" className="bg-lime-400/20 text-lime-400">
                All Computing Disciplines
              </Badge>
            </CardContent>
          </Card>

          {/* Submission */}
          <Card className="glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <FileText className="h-5 w-5 text-blue-400" />
                Submission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>• Abstract: IEEE format (250 words max)</p>
              <p>• Full paper: 6 pages max</p>
              <p>• Original work only</p>
              <Badge variant="destructive" className="bg-red-500/20 text-red-400">
                Max 10% Plagiarism
              </Badge>
            </CardContent>
          </Card>

          {/* Presentation */}
          <Card className="glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Clock className="h-5 w-5 text-purple-400" />
                Presentation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>• 7 minutes presentation</p>
              <p>• 3 minutes Q&A</p>
              <p>• PowerPoint mandatory</p>
              <Badge variant="secondary" className="bg-purple-400/20 text-purple-400">
                Bring Pen Drive
              </Badge>
            </CardContent>
          </Card>

          {/* Evaluation */}
          <Card className="glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <CheckCircle className="h-5 w-5 text-green-400" />
                Evaluation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>• Innovation & relevance</p>
              <p>• Technical depth</p>
              <p>• Presentation skills</p>
              <p>• Q&A response</p>
            </CardContent>
          </Card>

          {/* Awards */}
          <Card className="glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Trophy className="h-5 w-5 text-yellow-400" />
                Awards
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>• Best Paper Award</p>
              <p>• Certificate & Prize</p>
              <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                Recognition
              </Badge>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>• Valid college ID required</p>
              <p>• Report 30 mins early</p>
              <p>• Judges' decision final</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
