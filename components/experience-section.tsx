import { Card } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-balance flex items-center gap-3">
        <span className="w-1.5 h-6 md:h-8 bg-gradient-to-b from-primary to-accent rounded-full flex-shrink-0"></span>
        Experience
      </h2>
      <Card className="card-base card-hover p-6 md:p-8 fade-up rounded-xl">
        <div className="space-y-3 mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Web Development Intern</h3>
          <p className="text-base sm:text-lg text-primary font-semibold">Systemtron</p>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">2024</p>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Gained hands-on experience in web development, learning industry best practices and contributing to real-world
          projects. Developed a strong foundation in frontend and backend technologies through mentorship and practical
          application.
        </p>
      </Card>
    </section>
  )
}
