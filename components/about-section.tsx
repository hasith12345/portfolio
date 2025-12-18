import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-balance">Curious about me? Here you have it:</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m a motivated and self-driven individual who is continuously learning new 
                technologies and improving my technical skills. I’m currently a third-year 
                undergraduate at the University of Moratuwa, pursuing a BSc in Information 
                Technology and Management, with a strong focus on full-stack web development.
              </p>
              <p>
                I’m particularly interested in building complete, responsive web applications 
                and enjoy working across both frontend and backend development. I have hands-on 
                experience through academic and personal projects using modern technologies such 
                as React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Git, and Postman.
              </p>
              <p>
                I’m passionate about turning ideas into practical software solutions, writing 
                clean and maintainable code, and continuously improving as a developer while 
                contributing effectively to team-based projects.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="p-6 max-w-sm">
              <img
                src="/coding-image.png"
                alt="About me"
                className="w-full h-74 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-muted-foreground text-center">Always learning, always growing 🚀</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
