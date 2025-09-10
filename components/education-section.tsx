import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "BSc in Information Technology",
    school: "University of Moratuwa",
    period: "2023 - Present",
    location: "Katubedda, Sri Lanka",
    description:
      "3rd Year Undergraduate pursuing Information Technology degree with focus on software development, database management, and emerging technologies.",
    gpa: "3.54/4.00",
    icon: "🎓",
  },
  {
    degree: "Advanced Level (A/L)",
    school: "Science College",
    period: "2020 - 2022",
    location: "Colombo, Sri Lanka",
    description:
      "Completed Advanced Level in Physical Science stream with Mathematics, Physics, and Chemistry. Achieved excellent results in all subjects.",
    gpa: "3A passes",
    icon: "📚",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My Educational{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A roadmap of my academic achievements and learning milestones that shaped my career in technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-background shadow-lg"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <div className="bg-card border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/30">
                    {/* University icon */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
                        <GraduationCap className="h-6 w-6 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                        <div className="flex items-center text-purple-500 font-medium">
                          <span className="mr-2">🏛️</span>
                          {edu.school}
                        </div>
                      </div>
                    </div>

                    {/* Location and Period */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>

                    {/* Academic Performance */}
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2 text-purple-500" />
                      <span className="text-sm text-muted-foreground mr-2">Academic Performance:</span>
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {edu.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
