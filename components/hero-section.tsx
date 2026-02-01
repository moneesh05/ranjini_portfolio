import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Linkedin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="section-container min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6 md:space-y-8 order-2 md:order-1 fade-up">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
            Information technology & software test engineer & young entrepreneur
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-balance">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sri Ranjani K
              </span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Passionate about quality assurance, problem-solving, and continuous learning. Building robust software
              through meticulous testing and innovative approaches.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
            <a href="#projects">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 active:scale-95 text-sm sm:text-base transition-all duration-300 text-primary-foreground border-0 font-semibold rounded-lg"
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="/Sri_Ranjani_K_Resume.pdf" download="Sri_Ranjani_K_Resume.pdf">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-sm sm:text-base bg-background hover:border-primary/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-border rounded-lg"
              >
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-2 md:pt-4">
            <a
              href="https://www.linkedin.com/in/sri-ranjani-84796a249"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 p-2 rounded-lg hover:bg-gradient-accent/50 cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sriranjani2921@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 p-2 rounded-lg hover:bg-gradient-accent/50 cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground pt-2 md:pt-4">📍 Chennai, India | 📞 +91 9566271156</p>
        </div>

        <div
          className="flex justify-center md:justify-end order-1 md:order-2 fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 group">
            {/* Subtle background glow - reduced opacity and size */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

            {/* Profile image with blue ring border - no excessive offsets */}
            <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 rounded-full border-2 border-primary/20 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary/40 hover:scale-105 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <Image src="/profile.jpeg" alt="Sri Ranjani K" fill className="object-cover" priority />
            </div>
            <p className="text-center text-muted-foreground mt-2 font-bold">Tempest CTO</p>
          </div>
        </div>
      </div>
    </section>
  )
}
