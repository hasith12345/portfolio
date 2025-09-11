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
                Motivated IT enthusiast with a strong foundation in web development, programming, 
                and software solutions. Experienced in building responsive and interactive web 
                applications using modern technologies like React, Node.js, Express, and MongoDB.
              </p>
              <p>
                Passionate about exploring emerging technologies, solving real-world problems, 
                and turning innovative ideas into practical projects. Dedicated to creating 
                user-friendly digital experiences while maintaining clean, efficient, and scalable code.
              </p>
              <p>
                Skilled in problem-solving, creative thinking, attention to detail, and collaboration,
                with a strong drive to learn continuously and contribute effectively in team-oriented 
                environments.
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
