export function AboutSection() {
  return (
    <section id="about" className="section-container bg-gradient-accent">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-balance flex items-center gap-3">
        <span className="w-1.5 h-6 md:h-8 bg-gradient-to-b from-primary to-accent rounded-full flex-shrink-0"></span>
        About
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-4 md:space-y-6 fade-up">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            I'm a Bachelor of Engineering student in Information Technology with a strong foundation in software
            testing, databases, and programming. My passion lies in quality assurance and ensuring that software
            products meet the highest standards of quality and reliability.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            With hands-on experience in manual testing, test documentation, and the complete STLC/SDLC, I'm committed to
            continuous learning and exploring new technologies. I'm particularly interested in automation testing and
            the intersection of technical excellence with creative problem-solving.
          </p>
          <div className="pt-2 md:pt-4 space-y-2 md:space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold mt-0.5 flex-shrink-0">→</span>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Smart India Hackathon 2023 - 2nd Place Winner
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold mt-0.5 flex-shrink-0">→</span>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Leadership roles in college clubs and events
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold mt-0.5 flex-shrink-0">→</span>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Diverse skills spanning testing, coding, and data science
              </p>
            </div>
          </div>
        </div>
        <div className="card-base card-hover p-6 md:p-8 fade-up rounded-xl" style={{ animationDelay: "0.2s" }}>
          <div className="space-y-6">
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Education</h3>
              <p className="font-semibold text-sm md:text-base text-foreground">B.Tech - Information Technology</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Agni College of Technology, Chennai (2021-2025)
              </p>
            </div>
            <div className="h-px bg-gradient-to-r from-primary/10 to-transparent"></div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Location</h3>
              <p className="font-semibold text-sm md:text-base text-foreground">Chennai, India</p>
            </div>
            <div className="h-px bg-gradient-to-r from-primary/10 to-transparent"></div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Contact</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">sriranjani2921@gmail.com</p>
              <p className="text-xs sm:text-sm text-muted-foreground">+91 9566271156</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
