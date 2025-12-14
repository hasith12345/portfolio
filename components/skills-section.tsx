"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const skills = [
  // Programming Languages
  { name: "C", image: "/C.png", color: "from-gray-400 to-gray-600" },
  { name: "Java", image: "/java.svg", color: "from-red-500 to-red-700" },
  { name: "Python", image: "/python.png", color: "from-yellow-400 to-blue-500" },
  { name: "TypeScript", image: "/typescript.png", color: "from-blue-400 to-blue-600" },

  // Backend
  { name: "Node.js", image: "/node.png", color: "from-green-400 to-green-600" },
  { name: "Express.js", image: "/express.png", color: "from-gray-700 to-black" },
  { name: "Django", image: "/django.png", color: "from-green-600 to-green-800" },

  // Frontend
  { name: "React.js", image: "/React.png", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", image: "/next.webp", color: "from-black to-gray-800" },
  { name: "JavaScript", image: "/javaScript.webp", color: "from-yellow-400 to-yellow-600" },
  { name: "HTML", image: "/html.png", color: "from-orange-500 to-red-500" },
  { name: "Tailwind CSS", image: "/tailwind.png", color: "from-cyan-400 to-cyan-600" },
  { name: "CSS", image: "/css.png", color: "from-blue-400 to-blue-600" },

  // Databases
  { name: "MongoDB", image: "/mongodb.svg", color: "from-green-500 to-green-700" },
  { name: "MySQL", image: "/mysql.png", color: "from-blue-500 to-indigo-600" },
  { name: "MSSQL", image: "/mssql.png", color: "from-red-600 to-red-800" },
  { name: "PostgreSQL", image: "/postgresql.svg", color: "from-blue-600 to-blue-800" },

  // Version Control
  { name: "Git", image: "/git.png", color: "from-orange-500 to-red-600" },
  { name: "GitHub", image: "/github.png", color: "from-gray-800 to-gray-900" },

  // Other Technical Skills
  { name: "Docker", image: "/docker.png", color: "from-blue-500 to-blue-700" },
  { name: "Figma", image: "/figma.png", color: "from-primary to-primary/70" },
  { name: "Canva", image: "/canva.svg", color: "from-cyan-400 to-blue-600" },
  { name: "Photoshop", image: "/photoshop.png", color: "from-blue-600 to-blue-800" },
  { name: "EasyEDA", image: "/easyeda.png", color: "from-purple-600 to-purple-800" },
  { name: "Miro", image: "/miro.png", color: "from-purple-600 to-purple-800" },
  { name: "Arduino", image: "/arduino.svg", color: "from-blue-400 to-teal-500" },
  { name: "ESP32", image: "/esp32.jpg", color: "from-gray-500 to-gray-700" },
]


export function SkillsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of skill cards
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/20 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Technologies & Frameworks I’m Currently Exploring
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className={`
                p-3 sm:p-4 text-center group cursor-pointer
                bg-card/80 backdrop-blur-sm border-border/50
                hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10
                transition-all duration-500 hover-lift
                ${visibleCards.includes(index) ? "animate-scale-in opacity-100" : "opacity-0"}
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>

                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 -z-10" />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-muted-foreground mb-6">
            Always learning and exploring new technologies to stay ahead of the curve
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Learning", "Exploring", "Building", "Growing"].map((tag, index) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium animate-bounce-in"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
