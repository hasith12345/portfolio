import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "BSc (Hons) in Information Technology & Management",
    school: "University of Moratuwa",
    period: "2023 - Present",
    location: "Katubedda, Sri Lanka",
    description:
      "3rd Year Undergraduate specializing in Information Technology & Management with a strong interest in software engineering, web development, and data-driven solutions.",
    gpa: "3.4/4.0 Upto 2nd Year",
    icon: "🎓",
  },
  {
    degree: "Advanced Level (A/L) & Ordinary Level (O/L)",
    school: "Dharmaraja College",
    period: "2008 - 2021",
    location: "Kandy, Sri Lanka",
    description:
      "Completed schooling from Grade 1 through Advanced Level, including both Ordinary Level and Advanced Level examinations. Successfully pursued the Commerce stream (Accounting, Economics, Business Studies) for A/L.",
    gpa: "3A passes",
    icon: "📚",
  },
  {
    degree: "AAT - Level I, Level II",
    school: "Association of Accounting Technicians",
    location: "Sri Lanka",
    description:
      "Level I – 2019: Gained foundational knowledge in accounting principles and business practices.\nLevel II – 2021: Advanced into financial accounting, auditing, and management-related subjects.",
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
            <span className="text-primary">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            An overview of my academic milestones and accomplishments that reflect my dedication to continuous learning.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <div className="bg-card border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                    {/* University icon */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                        <div className="flex items-center text-primary font-medium">
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
                      {edu.period && (
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-xs font-medium text-primary">
                            {edu.period}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>

                    {/* Academic Performance */}
                    {edu.gpa && (
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm text-muted-foreground mr-2">Academic Performance:</span>
                        <span className="text-sm font-medium text-primary">
                          {edu.gpa}
                        </span>
                      </div>
                    )}
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
