import { Card } from "@/components/ui/card"
import { ro } from "date-fns/locale"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

// Technology icon mapping
const techIcons: { [key: string]: string } = {
  "React": "/React.png",
  "Express.js": "/express.png",
  "Node.js": "/node.png",
  "TypeScript": "/typescript.png",
  "MongoDB": "/mongodb.svg",
  "Tailwindcss": "/tailwind.png",
  "Tailwind CSS": "/tailwind.png",
  "Git": "/git.png",
  "Figma": "/figma.png",
  "Django": "/Django.png",
  "PostgreSQL": "/postgresql.svg",
  "Docker": "/docker.png",
  "Next.js": "/next.webp",
  "ESP32": "/esp32.jpg",
  "C++": "/C.png",
  "C": "/C.png",
  "HTML": "/html.png",
  "CSS": "/css.png",
  "JavaScript": "/javaScript.webp",
  "MySQL": "/mysql.png",
  "MSSQL": "/mssql.png",
  "GitHub": "/github.png",
  "Python": "/python.png",
  "Arduino": "/arduino.svg",
  "Canva": "/canva.svg",
  "Java": "/java.svg",
  "Vercel": "/vercel.png",
  "Shadcn": "/shadcn.png",
  "Resend(Email Service)": "/resend.png",
  "JWT Auth": "/jwt.svg",
}

const projects = [
  {
    title: "SalonMe | Salon Management Platform",
    role: "Full-Stack Developer – 2nd Year Group Project",
    description:
      "A full-stack salon management system designed to streamline salon operations and enhance customer experience. The platform includes features such as salon profile management and appointment scheduling for seamless service handling.",
    image: "/project1.png",
    technologies: [
      "React",
      "Express.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Tailwindcss",
      "Cloudinary",
      "Git",
      "Figma",

    ],
    demo: "https://www.linkedin.com/posts/hasith-gamlath-18b957274_salonmanagementsystem-softwareproject-uom-activity-7371268400288854016-zIXH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMPcTsB0hg1MQqGPMTxTASEJyhA7fWbEzQ",
    code: "https://github.com/hasith12345/salon-management-system",
  },
  {
    title: "Real-Time Chat Application",
    role: "Full-Stack Developer – Personal Project",
    description:
      "Developed a real-time chat app with one-on-one messaging, typing indicators, and online status, featuring secure authentication and a responsive UI.",
    image: "/project2.png",
    technologies: ["React", "Express.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    demo: "https://chat-app-one-ivory.vercel.app/",
    code: "https://github.com/hasith12345/ChatApp"
  },
  {
    title: "ServeEase – Enterprise Automobile Service System",
    role: "Full-Stack Developer – 3rd Year Enterprise Project(Group)",
    description:
      "Built an enterprise-level automobile service platform powered by microservices, enabling online service bookings, real-time vehicle tracking, and secure customer–service center communication. Integrated containerized deployment, live notifications, and an AI-powered chatbot for improved customer support.",
    image: "/project8.png",
    technologies: [
      "React",
      "Django",
      "PostgreSQL",
      "Docker",
      "Microservices Architecture",
      "Tailwind CSS",
      "JWT Auth",
      "REST API"
    ],
    demo: "#",
    code: "https://github.com/hasith12345/servease-backend"
  },
  {
    title: "PastPapersPortal - Past Papers Website",
    role: "Frontend Developer – Personal Project",
    description:
      "Developed a user-friendly web platform for students to browse, filter and access exam past papers efficiently. Focused on responsive Ul, smooth navigation and clean component structuring to improve usability.",
    image: "/project9.png",
    technologies: ["React", "Next.js", "Shadcn", "Resend(Email Service)", "Vercel", "Tailwind CSS"],
    demo: "https://pastpapersportal.vercel.app/",
    code: "#"
  },
  {
    title: "Real-Time Household Water Management System",
    role: "Full-Stack Developer – 1st Year Project",
    description:
      "Developed a smart Water Management System in the first year to promote household water conservation through real-time monitoring. Integrated ESP32 with a web dashboard to track water levels, usage, and quality, while sending alerts to prevent overflows and support sustainable living.",
    image: "/project3.png",
    technologies: ["ESP32", "C++", "IoT Sensors", "React", "Firebase"],
    demo: "https://www.linkedin.com/posts/hasith-gamlath-18b957274_watermanagement-smarthome-iot-activity-7241093263808479234-Kfc4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMPcTsB0hg1MQqGPMTxTASEJyhA7fWbEzQ",
    code: "https://github.com/hasith12345/Household-Water-Management-System"
  },
  {
    title: "Line Following Car",
    role: "Hardware Developer – Competition Project",
    description:
      "Engineered an autonomous line-following robot with precise control systems and sensor-based navigation, tested for reliability in a competitive environment.",
    image: "/project4.png",
    technologies: ["C++", "ESP32", "IR sensors", "Motor driver"],
    demo: "https://www.linkedin.com/in/hasith-gamlath-18b957274/details/projects/#:~:text=4-,Line%20Following%20Car%20(NDT%20Dextron%202024%20%2D%20Line%20Following%20Car%20Competition),-Line%20Following%20Car",
    code: "#"
  },
  {
    title: "Medical Appointment Booking System",
    role: "Full-Stack Developer – Personal Project",
    description:
      "A secure medical appointment system enabling patients to book online and administrators to manage doctors and schedules effectively, with features like user authentication, doctor management, and a responsive admin dashboard.",
    image: "/project6.png",
    technologies: ["Laravel 11","PHP", "MySQL", "Blade", "HTML", "CSS", "JavaScript"],
    demo: "#",
    code: "https://github.com/hasith12345/medical-appointment-booking-system"
  },
  {
    title: "GitHub Repository Dashboard",
    role: "Full-Stack Developer – Personal Project",
    description:
      "A GitHub Statistics Dashboard displaying real-time data like stars, forks, and contributors via the GitHub API. Built with a Ballerina backend, providing an interactive interface for exploring repository insights.",
    image: "/project7.png",
    technologies: ["Ballerina", "GitHub API", "HTML", "CSS", "JavaScript"],
    demo: "#",
    code: "https://github.com/hasith12345/github-statistic-dashboard"
  },
  
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work, highlighting skills in web development, and creative problem-solving through real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-[250px] object-contain bg-muted"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
                {project.role && (
                  <p className="text-primary/80 text-sm font-medium mb-3">{project.role}</p>
                )}
                <p className="text-muted-foreground mb-4 leading-relaxed text-base flex-grow">{project.description}</p>

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech) => {
                    const iconPath = techIcons[tech]
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-2 px-3 py-1.5 bg-secondary/80 text-secondary-foreground text-sm rounded-full border border-border/50 hover:border-primary/30 transition-colors"
                        title={tech}
                      >
                        {iconPath ? (
                          <Image
                            src={iconPath}
                            alt={tech}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        ) : null}
                        <span>{tech}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Project Link */}
                <div className="flex items-center gap-6">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                    >
                      <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span className="font-medium">View Project</span>
                    </a>
                  )}
                  {project.code !== "#" && (
                    <a
                      href={project.code}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                    >
                      <Github className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span className="font-medium">View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
