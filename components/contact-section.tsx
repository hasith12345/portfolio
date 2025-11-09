"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, ArrowRight } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ 
    type: null, 
    message: '' 
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '✅ Message sent successfully! I\'ll get back to you soon.' 
        })
        setFormData({ name: "", email: "", message: "" })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: null, message: '' })
        }, 5000)
      } else {
        setStatus({ 
          type: 'error', 
          message: '❌ Failed to send message. Please try again or email me directly.' 
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus({ 
        type: 'error', 
        message: '❌ Something went wrong. Please try again later.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-4">Let's start a conversation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. Drop me a message and
                let's create something extraordinary! 🚀
              </p>
            </div>

            <div className="space-y-2">
              {/* Email */}
              <div className="group flex items-center gap-6 p-2 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <a
                    href="mailto:hasithgamlath327@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    hasithgamlath327@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-6 p-2 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Phone</p>
                  <a
                    href="tel:+94715123349"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    +94 71 512 3349
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-center gap-6 p-2 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Location</p>
                  <p className="text-muted-foreground">Katubedda, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              {status.type && (
                <div
                  className={`p-4 rounded-lg border ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border-green-500/50 text-green-600 dark:text-green-400'
                      : 'bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400'
                  } animate-fade-in`}
                >
                  {status.message}
                </div>
              )}

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-300 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex text-black items-center gap-2">
                    <Send className="h-4 w-4 text-black group-hover:translate-x-1 transition-transform" />
                    Send Message
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
