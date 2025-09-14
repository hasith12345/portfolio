"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export function ScrollNavigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mounted, setMounted] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section) => (
        <div 
          key={section.id} 
          className="group flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection(section.id)}
        >
          <div 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section.id 
                ? "bg-primary scale-125" 
                : "bg-primary/40 group-hover:bg-primary group-hover:scale-110"
            }`} 
          />
          <span 
            className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap group-hover:translate-x-1"
          >
            {section.label}
          </span>
        </div>
      ))}
    </div>
  )
}