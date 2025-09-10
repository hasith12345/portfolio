"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="/placeholder.mp4?height=1080&width=1920&query=futuristic tech coding matrix digital rain programming abstract neon"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        {["Hero", "About", "Skills", "Education", "Projects", "Contact"].map((section, index) => (
          <div key={section} className="group flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors cursor-pointer" />
            <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              {section}
            </span>
          </div>
        ))}
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fade-in-left">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/80 border border-primary text-sm font-medium text-white animate-slide-in-bottom">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Available for opportunities
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight animate-fade-in-up">
                Hey there, <span className="text-primary font-bold ">Hasith Gamlath</span>
              </h1>
            </div>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Passionate <span className="text-foreground font-medium">IT student</span> crafting innovative digital
              experiences through <span className="text-primary font-medium">modern web technologies</span> and creative
              problem-solving.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="gap-3 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium group hover-lift"
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-3 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium group border-2 bg-transparent hover-lift"
            >
              View My Work
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className="flex gap-3 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group hover-lift"
                asChild
              >
                <a href={href} aria-label={label}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-50" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
              <img
                src="/professional-headshot-of-young-it-student-develope.jpg"
                alt="Professional headshot"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg border-4 border-background group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl">💻</span>
              </div>
            </div>

            {mounted && (
              <>
                <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-card border border-border rounded-xl flex items-center justify-center shadow-lg animate-float">
                  <span className="text-base sm:text-lg">⚡</span>
                </div>
                <div className="absolute top-6 sm:top-8 -right-6 sm:-right-8 w-8 h-8 sm:w-10 sm:h-10 bg-card border border-border rounded-lg flex items-center justify-center shadow-lg animate-float-delayed">
                  <span className="text-xs sm:text-sm">🚀</span>
                </div>
                <div className="absolute -bottom-2 left-6 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 bg-card border border-border rounded-lg flex items-center justify-center shadow-lg animate-float-slow">
                  <span className="text-xs">✨</span>
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
