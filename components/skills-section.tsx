import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Testing & QA",
    skills: [
      "Manual Testing",
      "Test Case Design",
      "SDLC/STLC",
      "Functional Testing",
      "Regression Testing",
      "Defect Lifecycle",
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      "SQL Queries & Joins",
      "Java (OOP Concepts)",
      "Automation Testing (Basics)",
      "Test Documentation",
      "JIRA",
      "Excel",
    ],
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Communication", "Decision Making", "Teamwork", "Quick Learner"],
  },
  
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-balance flex items-center gap-3">
        <span className="w-1.5 h-6 md:h-8 bg-gradient-to-b from-primary to-accent rounded-full flex-shrink-0"></span>
        Skills & Expertise
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card
            key={category.title}
            className="card-base card-hover p-6 fade-up rounded-xl"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-gradient-accent border border-primary/10 text-foreground rounded-full text-xs sm:text-sm font-medium hover:border-primary/40 hover:bg-primary/8 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
