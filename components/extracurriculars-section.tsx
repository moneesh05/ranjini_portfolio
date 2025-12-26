import { Card } from "@/components/ui/card"

const activities = [
    {
    title: "Secretary - Inter-College Cultural Fest",
    organization: "Agniverse 2024 & 2025",
    period: "2024-2025",
    description: "Organized and coordinated inter-college cultural events",
  },
  {
    title: "President - IRIS Club",
    organization: "Agni College of Technology",
    period: "2023-2024",
    description: "Led the club with focus on student development and technical initiatives",
  },

  {
    title: "Blood Donation Head",
    organization: "Rotaract Club",
    period: "2023-2024",
    description: "Coordinated blood donation drives and community service initiatives",
  },
 
  {
    title: "Symposium Event Coordinator",
    organization: "Code Debugging Competition",
    period: "2024",
    description: "Designed and organized the technical symposium event",
  },
  {
    title: "Event Host",
    organization: "College Cultural Events",
    period: "2022",
    description: "Hosted and managed college cultural events",
  },
]

export function ExtracurricularsSection() {
  return (
    <section id="extracurriculars" className="section-container bg-gradient-accent">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-balance flex items-center gap-3">
        <span className="w-1.5 h-6 md:h-8 bg-gradient-to-b from-primary to-accent rounded-full flex-shrink-0"></span>
        Leadership & Extra-Curricular Activities
      </h2>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {activities.map((activity, index) => (
          <Card
            key={activity.title}
            className="card-base card-hover p-4 md:p-6 fade-up cursor-default rounded-xl"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <h3 className="text-sm md:text-lg font-semibold mb-1 text-foreground">{activity.title}</h3>
            <p className="text-xs md:text-sm text-primary font-medium mb-2">{activity.organization}</p>
            <p className="text-xs text-muted-foreground mb-3 font-medium">{activity.period}</p>
            <p className="text-xs md:text-base text-muted-foreground">{activity.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
