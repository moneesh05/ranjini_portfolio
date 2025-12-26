import { Card } from "@/components/ui/card"
import { Trophy, Award } from "lucide-react"

const achievements = [
  {
    title: "Smart India Hackathon 2023",
    description: "2nd Place - Cash Prize",
    icon: Trophy,
  },
  {
    title: "Paper Presentation",
    description: "GIST'23 Symposium",
    icon: Award,
  },
  {
    title: "Technical Symposium",
    description: "Paper Presentation & Debugging Competition",
    icon: Award,
  },
  {
    title: "Workshop Conductor",
    description: "HTML & CSS Workshop for Junior Students",
    icon: Award,
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-container">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-balance flex items-center gap-3">
        <span className="w-1.5 h-6 md:h-8 bg-gradient-to-b from-primary to-accent rounded-full flex-shrink-0"></span>
        Achievements & Participation
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          return (
            <Card
              key={achievement.title}
              className="card-base card-hover p-6 fade-up rounded-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex-shrink-0 glow-shadow-sm hover:glow-shadow-md hover:from-primary/30 hover:to-accent/30 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-lg mb-1 text-foreground">{achievement.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{achievement.description}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
