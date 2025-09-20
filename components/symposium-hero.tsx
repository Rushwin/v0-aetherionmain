import { Button } from "@/components/ui/button"
import LazyVideo from "./lazy-video"

export function SymposiumHero() {
  const registerButton = (
    <Button asChild className="rounded-full bg-lime-400 px-8 py-3 text-black hover:bg-lime-300 text-lg font-semibold">
      <a href="#registration" rel="noopener noreferrer">
        Register Now
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aalimec-logo-EwnWj6wYSdmNYRTeTOHvzPtFkvWNhE.png"
              alt="College Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="mb-5 flex items-center gap-2">
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">From the department of AI&DS</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-balance">
            <span className="block">AETHERION</span>
          </h1>
          <p className="mt-6 text-center text-lg text-gray-300 max-w-2xl text-pretty">
            Join us for Aetherion – featuring both Technical and Non-Technical sessions designed to explore innovation
            and the future of technology.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {registerButton}
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-3 text-lg font-semibold border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <a href="#schedule">View Schedule</a>
            </Button>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-balance text-white">
              AI Technologies Showcase
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto text-pretty">
              Explore the transformative power of Machine Learning, Natural Language Processing, and Computer Vision in
              modern industries
            </p>
          </div>

          {/* Event highlights grid */}
          <div className="mt-12 w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aiTechnologies.map((tech, index) => (
                <div key={index} className="relative group">
                  <div className="relative rounded-2xl glass-border bg-neutral-900/50 p-6 hover:bg-neutral-800/50 transition-all duration-300">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-extrabold tracking-tight text-white">{tech.title}</h3>
                    </div>

                    <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-xl">
                      <img
                        src={tech.image || "/placeholder.svg"}
                        alt={tech.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${tech.color}`} />
                        <h4 className="text-lg font-semibold text-white">{tech.title}</h4>
                      </div>

                      <p className="text-sm text-gray-300 leading-relaxed">{tech.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {tech.applications.map((app, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-white/10 text-white/80"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Future AI technology card */}
              <div className="relative group">
                <div className="relative rounded-2xl glass-border bg-neutral-900/50 p-6 hover:bg-neutral-800/50 transition-all duration-300">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-extrabold tracking-tight text-white">Future AI</h3>
                  </div>

                  <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-xl">
                    <img
                      src={futureAiTechnology.image || "/placeholder.svg"}
                      alt={futureAiTechnology.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${futureAiTechnology.color}`} />
                      <h4 className="text-lg font-semibold text-white">{futureAiTechnology.title}</h4>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed">{futureAiTechnology.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {futureAiTechnology.applications.map((app, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-white/10 text-white/80"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EventCard({
  title = "3 Days",
  sub = "Immersive learning experience",
  tone = "event",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-xs text-white/70">{sub}</p>
            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
              {tone === "event" ? "symposium" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const aiTechnologies = [
  {
    title: "Machine Learning",
    description:
      "Advanced neural networks and deep learning algorithms that enable systems to learn patterns, make predictions, and adapt autonomously. Revolutionizing industries through intelligent automation and data-driven insights.",
    image: "/images/machine-learning-3d-neural-network.jpg", // Updated to new 3D image
    color: "bg-blue-500",
    applications: ["Neural Networks", "Deep Learning", "Predictive Analytics", "Pattern Recognition"],
  },
  {
    title: "Natural Language Processing",
    description:
      "Sophisticated language understanding systems that bridge human communication and machine intelligence. Enabling seamless interaction through advanced text analysis, generation, and comprehension.",
    image: "/images/nlp-3d-language-brain.jpg", // Updated to new 3D image
    color: "bg-green-500",
    applications: ["Language Models", "Text Generation", "Sentiment Analysis", "Conversational AI"],
  },
  {
    title: "Computer Vision",
    description:
      "Revolutionary visual intelligence systems that interpret and understand visual information with superhuman accuracy. Transforming how machines perceive and interact with the physical world.",
    image: "/images/computer-vision-3d-eye.jpg", // Updated to new 3D image
    color: "bg-purple-500",
    applications: ["Object Detection", "Image Recognition", "Visual Analytics", "Autonomous Systems"],
  },
]

const futureAiTechnology = {
  title: "Future AI",
  description:
    "Next-generation artificial intelligence powered by quantum computing, neuromorphic architectures, and advanced AGI systems. Pioneering the frontier of human-machine collaboration and technological singularity.",
  image: "/images/ai-future-3d-quantum.jpg", // Updated to new 3D image
  color: "bg-violet-500",
  applications: ["Quantum AI", "AGI Systems", "Neural Interfaces", "Consciousness Simulation"],
}
