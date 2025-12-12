"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowDown, Target } from "lucide-react"
// import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="/bg_vid.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/70 to-background/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-20 sm:pt-16 lg:pt-0">
        <div className="space-y-8 animate-fade-in-left">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight animate-fade-in-up">Hey there, I'm</h2>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight animate-fade-in-up">
                <span className="text-primary font-bold ">Hasith Gamlath</span>
              </h1>
            </div>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Passionate <span className="text-foreground font-medium">IT student</span> and <span className="text-foreground text-primary font-medium">Full-Stack Developer</span> exploring modern web technologies to create 
               innovative and user-friendly digital solutions.
            </p>
          </div>

          <div className="flex animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://drive.google.com/uc?export=view&id=1bXT230qMWCy34C9K44OkbVR5X413tOVN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 group hover-lift transition-all duration-300"
              title="Download Resume"
            >
              <Download className="h-6 w-6 sm:h-7 sm:w-7 group-hover:animate-bounce" />
              <span className="text-lg sm:text-xl font-medium text-foreground">Download Resume</span>
            </a>
          </div>

          <div className="flex gap-3 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Github,  label: "GitHub", href: "https://github.com/hasith12345" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hasith-gamlath-18b957274/" },
              { icon: Mail, label: "Email", href: "mailto:hasithgamlath327@gmail.com" },
            ].map(({ icon: Icon, label, href }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group hover-lift"
                asChild
              >
                <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative group">
            <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="absolute -inset-2 bg-primary/30 rounded-2xl blur-lg opacity-50" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary shadow-1xl shadow-primary/30">
              <img
                src="/cv profile.jpg"
                alt="Professional headshot"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
            </div>

            {mounted && (
              <>
                <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-card border border-border rounded-xl flex items-center justify-center shadow-lg animate-float">
                  <span className="text-base sm:text-lg">💻</span>
                </div>
                <div className="absolute top-6 sm:top-8 -right-6 sm:-right-8 w-8 h-8 sm:w-10 sm:h-10 bg-card border border-border rounded-lg flex items-center justify-center shadow-lg animate-float-delayed">
                  <span className="text-xs sm:text-sm">⁴⁰⁴</span>
                </div>
                <div className="absolute -bottom-2 left-6 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 bg-card border border-border rounded-lg flex items-center justify-center shadow-lg animate-float-slow">
                  <span className="text-xs">#</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  )
}
