import Image from "next/image"
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react"
import { techIcons } from "@/components/projects-section"

const experience = [
  {
    role: "Software Engineering Intern",
    company: "Panaceata (Pvt) Ltd",
    website: "https://www.panaceata.com/",
    period: "Feb 2026 - Sep 2026",
    location: "Remote",
    summary:
      "Contributed to seven client projects across AI, healthcare, agriculture, education, and enterprise domains, building web, mobile, cloud-native, and AI applications in an Agile team.",
    description:
      "Worked remotely in an Agile team with daily stand-ups, Git, and Azure DevOps and GitHub Actions CI/CD pipelines. Delivered features across the full stack, from Angular and React frontends and a React Native mobile app to AWS serverless backends and production AI systems using LLMs, RAG, and real-time voice agents.",
    technologies: [
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "React Native",
      "Angular",
      "NestJS",
      "AWS",
      "Amazon Bedrock",
      "RAG",
      "LiveKit",
      "Twilio",
      "Stripe",
      "DynamoDB",
      "MySQL",
      "Jest",
      "Playwright",
      "Azure DevOps",
      "GitHub Actions",
    ],
    projects: [
      {
        title: "AI Debate Practice Platform",
        points: [
          "Independently designed and built the platform end to end on AWS serverless.",
          "AI speech generation and real-time WebSocket speech evaluation with personalized feedback.",
          "Chunked OpenAI text-to-speech to reduce cost and latency.",
          "Stripe subscriptions with webhooks (trial, plan change, unsubscribe, resubscribe).",
        ],
        technologies: ["React", "AWS Lambda", "API Gateway", "Amazon Bedrock", "Cognito", "S3", "DynamoDB (single-table design)", "Stripe"],
      },
      {
        title: "AI Healthcare Virtual Assistant",
        points: [
          "Web chat and phone assistant in English and Spanish.",
          "Tool-calling chat orchestrator, Bedrock Guardrails, and appointment booking.",
          "Built the real-time voice agent using LiveKit and Twilio.",
        ],
        technologies: ["Amazon Bedrock", "RAG", "LiveKit", "Twilio", "AWS Lambda", "DynamoDB"],
      },
      {
        title: "Knowledge Base Automation Pipelines",
        points: [
          "Event-driven pipelines to crawl, process, and sync website content into AI knowledge bases.",
          "Hash-based change detection to avoid reprocessing unchanged content.",
          "Migrated vector storage from OpenSearch to Amazon S3 Vectors.",
        ],
        technologies: ["Apify", "EventBridge", "AWS Lambda", "S3", "Bedrock Knowledge Bases", "S3 Vectors"],
      },
      {
        title: "AgriBot - Sinhala/English Agriculture Chatbot",
        points: [
          "RAG chatbot delivered on WhatsApp for Sri Lankan agricultural information.",
          "Evaluated LLMs from four providers to select the best model.",
          "OCR and YouTube transcript ingestion pipelines.",
        ],
        technologies: ["Python", "React", "Twilio (WhatsApp)", "Amazon Bedrock", "Gemini", "AWS Lambda"],
      },
      {
        title: "Teacher Mobile App - Childcare Management",
        points: [
          "Primary developer, from UI design to backend integration.",
          "Cognito/Amplify authentication with automatic user provisioning.",
          "NestJS multi-tenant REST APIs for student and activity modules.",
        ],
        technologies: ["React Native (Expo)", "NestJS", "TypeScript", "AWS Cognito", "AWS Amplify"],
      },
      {
        title: "Enterprise Childcare Platform Migration",
        points: [
          "Migrated 18 modules and reports from Angular 14 to Angular 21 (Nx, standalone components, signals).",
          "Added Jest unit tests and Stagehand end-to-end tests.",
          "Built the product's public website with Next.js.",
        ],
        technologies: ["Angular", "Nx", "TypeScript", "Tailwind CSS", "MySQL", "Jest", "Stagehand", "Next.js"],
      },
      {
        title: "ERP Systems",
        points: [
          "Delivered incentive calculation and stock tracking modules.",
          "Fixed failing Playwright end-to-end tests.",
        ],
        technologies: ["Angular", "NestJS", "Playwright"],
      },
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work{" "}
            <span className="text-primary">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional roles where I have built and shipped software alongside real teams and clients.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-2 sm:left-8 top-0 bottom-0 w-0.5 bg-primary"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => {
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                  {/* Content */}
                  <div className="ml-8 sm:ml-16">
                    <div className="bg-card border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                      {/* Role and company */}
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary font-medium hover:text-primary/80 transition-colors"
                          >
                            {exp.company}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Location and Period */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-xs font-medium text-primary">{exp.period}</span>
                        </div>
                      </div>

                      {/* Summary and description */}
                      <p className="text-foreground/90 font-medium mb-3 leading-relaxed">{exp.summary}</p>
                      <p className="text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>

                      {/* Technology Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech) => {
                          const iconPath = techIcons[tech]
                          return (
                            <div
                              key={tech}
                              className="flex items-center gap-2 px-3 py-1 bg-secondary/80 text-secondary-foreground text-sm rounded-full border border-border/50 hover:border-primary/30 transition-colors"
                              title={tech}
                            >
                              {iconPath ? (
                                <Image src={iconPath} alt={tech} width={16} height={16} className="object-contain" />
                              ) : null}
                              <span>{tech}</span>
                            </div>
                          )
                        })}
                      </div>

                      {/* Key Projects */}
                      <h4 className="text-primary font-medium mb-4">Key Projects</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                          {exp.projects.map((project) => (
                            <div
                              key={project.title}
                              className="bg-muted/30 border border-border/50 rounded-lg p-5 hover:border-primary/30 transition-colors flex flex-col"
                            >
                              <h4 className="text-lg font-semibold text-foreground mb-3">{project.title}</h4>
                              <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground mb-4 flex-grow">
                                {project.points.map((point) => (
                                  <li key={point} className="leading-relaxed">{point}</li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-1.5">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-0.5 bg-secondary/80 text-secondary-foreground text-xs rounded-full border border-border/50"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
