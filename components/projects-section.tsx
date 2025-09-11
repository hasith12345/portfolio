import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Fiskil",
    description:
      "A comprehensive financial management platform that helps businesses track expenses, manage invoices, and analyze financial data with real-time insights and automated reporting features.",
    image: "/modern-fintech-dashboard-with-purple-gradient.jpg",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    demo: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with advanced product management, secure payment processing, inventory tracking, and comprehensive analytics dashboard for business insights.",
    image: "/modern-ecommerce-platform.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Redis", "Docker", "AWS"],
    demo: "#",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool featuring real-time updates, advanced task scheduling, team collaboration, file sharing, and comprehensive project analytics.",
    image: "/project-management-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "GraphQL", "Jest"],
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work, highlighting skills in web development, and creative problem-solving through real-world applications.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px] hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Project Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{project.description}</p>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/80 text-secondary-foreground text-sm rounded-full border border-border/50 hover:border-purple-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  <div className="flex items-center">
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors group"
                    >
                      <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span className="font-medium">View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
