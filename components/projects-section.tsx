import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Neurological Brain Disorder Classification",
    description:
      "Developed a deep learning-based system to classify neurological brain disorders from medical imaging data such as MRI and CT scans.",
    technologies: ["Deep Learning", "CNN", "RNN", "LSTM", "Medical Imaging"],
    highlights: [
      "Classified Alzheimer's, Parkinson's, brain tumors, and stroke",
      "Goal to assist healthcare professionals with faster diagnosis",
      "Implemented advanced neural network architectures",
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section-container bg-gradient-accent">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-balance flex items-center gap-3">
        <span className="w-1.5 h-6 md:h-8 bg-gradient-to-b from-primary to-accent rounded-full flex-shrink-0"></span>
        Featured Project
      </h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="card-base card-hover p-6 md:p-8 fade-up rounded-xl"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-primary flex-shrink-0 mt-1 opacity-60 hover:opacity-100 hover:scale-125 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer" />
              </div>

              <div className="pt-4 border-t border-border/50">
                <h4 className="text-xs sm:text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold flex-shrink-0">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-primary/20 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary/40 hover:scale-105 transition-all duration-200 text-xs sm:text-sm cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
