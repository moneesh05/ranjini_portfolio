import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const certifications = [
  { name: "Prompt Engineering", issuer: "GUVI (Naan Mudhalvan)", year: "2024" },
  { name: "Data Science", issuer: "IBM (Naan Mudhalvan)", year: "2024" },
  { name: "Network Essentials", issuer: "CISCO (Naan Mudhalvan)", year: "2024" },
  { name: "Microsoft Office Fundamentals", issuer: "Microsoft", year: "2023" },
  { name: "HTML & CSS", issuer: "Great Learning", year: "2023" },
  { name: "Java", issuer: "EDUCBA", year: "2023" },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-container bg-gradient-accent">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-balance flex items-center gap-3">
        <span className="w-1.5 h-6 md:h-8 bg-gradient-to-b from-primary to-accent rounded-full flex-shrink-0"></span>
        Certifications
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <Card
            key={cert.name}
            className="card-base card-hover p-6 fade-up rounded-xl"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-sm md:text-lg mb-1 text-foreground">{cert.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <Badge
                variant="outline"
                className="whitespace-nowrap border-primary/20 text-primary bg-primary/5 text-xs hover:bg-primary/15 hover:border-primary/40 hover:scale-110 transition-all duration-200 cursor-default"
              >
                {cert.year}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
