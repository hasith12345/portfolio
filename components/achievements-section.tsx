import { Award, Trophy, Users, Mountain, ExternalLink } from "lucide-react"

const achievements = [
  {
    title: "InnovateX - University Edition Hackathon",
    organization: "Zebra Technologies",
    type: "2nd Runners-Up",
    date: "2025",
    description:
      "Achieved 2nd Runners-Up among top university teams across Sri Lanka for developing an innovative tech solution that addressed real-world challenges through creativity and collaboration. Contributed to the Zebra Bit-Busters team that built an end-to-end real-time retail event detection system and interactive React analytics dashboard for the InnovateX challenge, implementing streaming ingestion, event detection, and data-processing pipelines to produce reproducible demo artifacts.",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    image: "/InnovateX.JPG",
    linkedinUrl:"https://www.linkedin.com/posts/hasith-gamlath-18b957274_innovatex-zebratechnologies-hackathon-activity-7381571746371579904--VHZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMPcTsB0hg1MQqGPMTxTASEJyhA7fWbEzQ", // Add your LinkedIn post URL here
  },
  
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Achievements &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Activities
            </span>
          </h2>
          
        </div>

        <div className="grid grid-cols-1 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border/50 rounded-xl p-18 hover:shadow-xl transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      {/* Header Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-purple-500 transition-colors">
                            {achievement.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm text-muted-foreground">{achievement.organization}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{achievement.date}</span>
                        </div>

                        <div className="mb-3">
                          <span
                            className={`inline-block bg-gradient-to-r ${achievement.color} text-white px-3 py-1 rounded-full text-xs font-medium`}
                          >
                            {achievement.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{achievement.description}</p>
                    
                    {/* LinkedIn Link */}
                    {achievement.linkedinUrl && (
                      <a
                        href={achievement.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 transition-colors group/link"
                      >
                        <ExternalLink className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
                        View LinkedIn Post
                      </a>
                    )}
                  </div>

                  {/* Right Image */}
                  {achievement.image && (
                    <div className="w-full sm:w-48 md:w-64 lg:w-72 h-48 sm:h-32 md:h-48 lg:h-72 flex-shrink-0">
                      <img
                        src={achievement.image}
                        alt={`${achievement.title} achievement`}
                        className="w-full h-full object-cover rounded-lg border border-border/50 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
