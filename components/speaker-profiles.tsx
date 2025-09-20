import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Globe } from "lucide-react"
import Image from "next/image"

export function SpeakerProfiles() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Imperium <span className="text-lime-300">Speakers</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto text-pretty">
            Meet the exceptional leaders presenting at Imperium - featuring both technical (FN) and non-technical (AN)
            expertise
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {speakerData.map((speaker, index) => (
            <Card key={index} className="glass-border bg-black/40 hover:bg-black/60 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-lime-400 p-0.5">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <Image
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        width={88}
                        height={88}
                        className="w-22 h-22 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-lime-400 text-black hover:bg-lime-300">
                    {speaker.track}
                  </Badge>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                  <p className="text-lime-300 font-medium mb-2">{speaker.title}</p>
                  <p className="text-gray-400 text-sm">{speaker.company}</p>
                </div>

                <p className="text-gray-300 text-sm mb-4 text-center leading-relaxed">{speaker.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {speaker.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs border-white/20 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center gap-3">
                  {speaker.social.linkedin && (
                    <a
                      href={speaker.social.linkedin}
                      className="text-gray-400 hover:text-lime-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.twitter && (
                    <a
                      href={speaker.social.twitter}
                      className="text-gray-400 hover:text-lime-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.website && (
                    <a
                      href={speaker.social.website}
                      className="text-gray-400 hover:text-lime-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const speakerData = [
  {
    name: "Dr. Alexandra Chen",
    title: "Chief Innovation Officer",
    company: "TechVision Global",
    bio: "Visionary leader driving digital transformation across industries. Alexandra specializes in strategic innovation and emerging technology adoption.",
    expertise: ["Digital Strategy", "Innovation Leadership", "Tech Vision"],
    track: "FN Keynote",
    image: "/professional-woman-tech-leader.png",
    social: {
      linkedin: "https://linkedin.com/in/alexandrachen",
      twitter: "https://twitter.com/alexandrachen",
      website: "https://techvision.global",
    },
  },
  {
    name: "Marcus Thompson",
    title: "CEO & Digital Transformation Expert",
    company: "TechVision Corp",
    bio: "Leading organizations through digital transformation with over 20 years of experience in technology leadership and strategic planning.",
    expertise: ["Leadership", "Digital Transformation", "Strategy"],
    track: "AN Session",
    image: "/professional-man-doctor-tech.jpg",
    social: {
      linkedin: "https://linkedin.com/in/marcusthompson",
      twitter: "https://twitter.com/marcusthompson",
    },
  },
  {
    name: "Dr. Priya Sharma",
    title: "Senior ML Engineer",
    company: "AI Innovations Lab",
    bio: "Expert in advanced AI architecture patterns and machine learning systems. Leading cutting-edge research in scalable AI solutions.",
    expertise: ["Machine Learning", "AI Architecture", "System Design"],
    track: "FN Session",
    image: "/professional-asian-scientist.png",
    social: {
      linkedin: "https://linkedin.com/in/priyasharma",
      website: "https://aiinnovations.lab",
    },
  },
  {
    name: "Sarah Williams",
    title: "HR Director & Team Building Expert",
    company: "People First Solutions",
    bio: "Specialist in building high-performance teams and organizational development. Passionate about creating inclusive workplace cultures.",
    expertise: ["Team Building", "HR Strategy", "Leadership Development"],
    track: "AN Workshop",
    image: "/professional-woman-environmental-tech.jpg",
    social: {
      linkedin: "https://linkedin.com/in/sarahwilliams",
      twitter: "https://twitter.com/sarahwilliams",
      website: "https://peoplefirst.solutions",
    },
  },
  {
    name: "James Rodriguez",
    title: "DevOps Lead & Cloud Architect",
    company: "CloudNative Systems",
    bio: "Expert in cloud-native development and DevOps practices. Specializes in building scalable, resilient distributed systems.",
    expertise: ["DevOps", "Cloud Architecture", "Kubernetes", "CI/CD"],
    track: "FN Workshop",
    image: "/professional-man-blockchain-developer.jpg",
    social: {
      linkedin: "https://linkedin.com/in/jamesrodriguez",
      twitter: "https://twitter.com/jamesrodriguez",
    },
  },
  {
    name: "Emma Davis",
    title: "Organizational Psychologist",
    company: "Future Work Institute",
    bio: "Leading researcher in remote work psychology and organizational behavior. Expert in creating effective distributed teams.",
    expertise: ["Remote Work", "Psychology", "Team Dynamics"],
    track: "AN Session",
    image: "/professional-man-business-strategist.jpg",
    social: {
      linkedin: "https://linkedin.com/in/emmadavis",
      twitter: "https://twitter.com/emmadavis",
      website: "https://futurework.institute",
    },
  },
]
