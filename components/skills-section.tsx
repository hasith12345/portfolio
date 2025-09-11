"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-500" },
  { name: "TypeScript", icon: "🔷", color: "from-blue-400 to-blue-600" },
  { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
  { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
  { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-500" },
  { name: "Git", icon: "📝", color: "from-orange-400 to-red-500" },
  { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-500" },
  { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-600" },
  { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500" },
  { name: "Figma", icon: "🎨", color: "from-purple-400 to-pink-500" },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className={`
                p-4 sm:p-6 text-center group cursor-pointer
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
                  className={`
                  w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-2xl
                  bg-gradient-to-br ${skill.color} p-0.5
                  group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
                `}
                >
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                  </div>
                </div>

                <h3 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors duration-300">
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
