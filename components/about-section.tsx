import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-balance">Curious about me? Here you have it:</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate IT student with a strong foundation in computer science and software development. My
                journey began with curiosity about how technology shapes our world, and it has evolved into a deep
                commitment to creating meaningful digital experiences.
              </p>
              <p>
                Currently pursuing my degree in Information Technology, I specialize in full-stack web development, with
                expertise in modern frameworks like React, Next.js, and Node.js. I'm particularly interested in the
                intersection of user experience and technical innovation.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                mentoring fellow students. I believe in continuous learning and staying updated with the latest industry
                trends.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="p-6 max-w-sm">
              <img
                src="/casual-photo-it-student-with-laptop.jpg"
                alt="About me"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-muted-foreground text-center">Always learning, always growing 🚀</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
