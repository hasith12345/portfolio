import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "SalonMe | Salon Management Platform",
    description:
      "A full-stack salon management system designed to streamline salon operations and enhance customer experience. The platform includes features such as salon profile management and appointment scheduling for seamless service handling.",
    image: "/project1.png",
    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Tailwindcss",
      "Cloudinary",
      "Git",
      "Figma",

    ],
    demo: "https://drive.google.com/file/d/1TcRFVhyDxz5zeVGt_bgVvV-vWr9l1l0v/view?usp=sharing",
    code: "https://github.com/hasith12345/salon-management-system",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Developed a real-time chat app with one-on-one messaging, typing indicators, and online status, featuring secure authentication and a responsive UI.",
    image: "/project2.png",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    demo: "#",
    code: "#"
  },
  {
    title: "Real-Time Household Water Management System",
    description:
      "Developed a smart Water Management System in the first year to promote household water conservation through real-time monitoring. Integrated ESP32 with a web dashboard to track water levels, usage, and quality, while sending alerts to prevent overflows and support sustainable living.",
    image: "/project3.png",
    technologies: ["ESP32", "C++", "IoT Sensors", "React", "Firebase"],
    demo: "#",
    code: "#"
  },
  {
    title: "Line Following Car",
    description:
      "Engineered an autonomous line-following robot with precise control systems and sensor-based navigation, tested for reliability in a competitive environment.",
    image: "/project4.png",
    technologies: ["C++", "ESP32", "IR sensors", "Motor driver"],
    demo: "https://drive.google.com/file/d/1ywqkLB3eHIwsQ-eAV4pXE7gK39KH9WfR/view?usp=drive_link",
    code: "https://github.com/hasith12345/line-following-car"
  },
  {
    title: "Portfolio Website",
    description:
      "Developed a personal portfolio website to showcase projects and skills, featuring a modern design and responsive layout.",
    image: "/project5.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript","EmailJS"],
    demo: "#",
    code: "#"
  },
  {
    title: "Medical Appointment Booking System",
    description:
      "A secure medical appointment system enabling patients to book online and administrators to manage doctors and schedules effectively, with features like user authentication, doctor management, and a responsive admin dashboard.",
    image: "/project6.png",
    technologies: ["Laravel 11","PHP", "MySQL", "Blade", "HTML", "CSS", "JavaScript"],
    demo: "#",
    code: "#"
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
                  <div className="flex items-center gap-6">
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors group"
                    >
                      <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span className="font-medium">View Project</span>
                    </a>
                    <a
                      href={project.code}
                      className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors group"
                    >
                      <Github className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span className="font-medium">View Code</span>
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
