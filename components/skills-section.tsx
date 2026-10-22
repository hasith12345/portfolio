"use client"

import { useEffect, useRef, useState, type MouseEvent } from "react"
import Image from "next/image"

const categories = ["All", "Languages", "Frontend", "Backend", "Databases", "AWS", "Cloud & DevOps", "Voice & Integrations", "Tools"] as const
type Category = (typeof categories)[number]

const skills: { name: string; image: string; category: Exclude<Category, "All"> }[] = [
  // Programming Languages
  { name: "C", image: "/C.png", category: "Languages" },
  { name: "Java", image: "/java.svg", category: "Languages" },
  { name: "Python", image: "/python.png", category: "Languages" },
  { name: "TypeScript", image: "/typescript.png", category: "Languages" },
  { name: "JavaScript", image: "/javaScript.webp", category: "Languages" },

  // Frontend
  { name: "React.js", image: "/React.png", category: "Frontend" },
  { name: "Next.js", image: "/next.webp", category: "Frontend" },
  { name: "HTML", image: "/html.png", category: "Frontend" },
  { name: "CSS", image: "/css.png", category: "Frontend" },
  { name: "Tailwind CSS", image: "/tailwind.png", category: "Frontend" },
  { name: "React Native", image: "/React.png", category: "Frontend" },
  { name: "Angular", image: "/skills/angular.svg", category: "Frontend" },
  { name: "Vite", image: "/skills/vite.svg", category: "Frontend" },

  // Backend
  { name: "Node.js", image: "/node.png", category: "Backend" },
  { name: "Express.js", image: "/express.png", category: "Backend" },
  { name: "NestJS", image: "/skills/nestjs.svg", category: "Backend" },
  { name: "Django", image: "/django.png", category: "Backend" },
  { name: "WebSockets", image: "/skills/websockets.svg", category: "Backend" },

  // Databases
  { name: "PostgreSQL", image: "/postgresql.svg", category: "Databases" },
  { name: "MySQL", image: "/mysql.png", category: "Databases" },
  { name: "MariaDB", image: "/skills/mariadb.svg", category: "Databases" },
  { name: "MongoDB", image: "/mongodb.svg", category: "Databases" },
  { name: "MSSQL", image: "/mssql.png", category: "Databases" },

  // AWS
  { name: "AWS", image: "/skills/aws.svg", category: "AWS" },
  { name: "AWS Lambda", image: "/skills/aws-lambda.svg", category: "AWS" },
  { name: "AWS SAM", image: "/skills/aws-sam.svg", category: "AWS" },
  { name: "Amazon API Gateway", image: "/skills/aws-api-gateway.svg", category: "AWS" },
  { name: "Amazon CloudFront", image: "/skills/aws-cloudfront.svg", category: "AWS" },
  { name: "Amazon Route 53", image: "/skills/aws-route53.svg", category: "AWS" },
  { name: "Amazon S3", image: "/skills/aws-s3.svg", category: "AWS" },
  { name: "Amazon S3 Vectors", image: "/skills/aws-s3.svg", category: "AWS" },
  { name: "Amazon DynamoDB", image: "/skills/dynamodb.svg", category: "AWS" },
  { name: "Amazon OpenSearch", image: "/skills/aws-opensearch.svg", category: "AWS" },
  { name: "Amazon Bedrock", image: "/skills/bedrock.svg", category: "AWS" },
  { name: "Amazon Bedrock Knowledge Bases", image: "/skills/bedrock.svg", category: "AWS" },
  { name: "Amazon Bedrock Guardrails", image: "/skills/bedrock.svg", category: "AWS" },
  { name: "Amazon Transcribe", image: "/skills/aws-transcribe.svg", category: "AWS" },
  { name: "Amazon Cognito", image: "/skills/aws-cognito.svg", category: "AWS" },
  { name: "AWS Amplify", image: "/skills/aws-amplify.svg", category: "AWS" },
  { name: "AWS IAM", image: "/skills/aws-iam.svg", category: "AWS" },
  { name: "Amazon EventBridge", image: "/skills/aws-eventbridge.svg", category: "AWS" },
  { name: "Amazon CloudWatch", image: "/skills/aws-cloudwatch.svg", category: "AWS" },
  { name: "AWS CLI", image: "/skills/aws-cli.svg", category: "AWS" },
  { name: "Amazon ECS", image: "/skills/aws-ecs.svg", category: "AWS" },

  // Cloud & DevOps
  { name: "GCP", image: "/skills/gcp.svg", category: "Cloud & DevOps" },
  { name: "Docker", image: "/docker.png", category: "Cloud & DevOps" },
  { name: "Azure DevOps", image: "/skills/azure-devops.svg", category: "Cloud & DevOps" },
  { name: "GitHub Actions", image: "/skills/github-actions.svg", category: "Cloud & DevOps" },
  { name: "Vercel", image: "/vercel.png", category: "Cloud & DevOps" },
  { name: "Cloudinary", image: "/skills/cloudinary.svg", category: "Cloud & DevOps" },

  // Voice & Integrations
  { name: "LiveKit", image: "/skills/livekit.svg", category: "Voice & Integrations" },
  { name: "Twilio", image: "/skills/twilio.svg", category: "Voice & Integrations" },
  { name: "Stripe", image: "/skills/stripe.svg", category: "Voice & Integrations" },

  // Tools, Testing & Hardware
  { name: "Git", image: "/git.png", category: "Tools" },
  { name: "GitHub", image: "/github.png", category: "Tools" },
  { name: "Jest", image: "/skills/jest.svg", category: "Tools" },
  { name: "Playwright", image: "/skills/playwright.svg", category: "Tools" },
  { name: "Postman", image: "/skills/postman.svg", category: "Tools" },
  { name: "Figma", image: "/figma.png", category: "Tools" },
  { name: "EasyEDA", image: "/easyeda.png", category: "Tools" },
  { name: "Miro", image: "/miro.png", category: "Tools" },
  { name: "Arduino", image: "/arduino.svg", category: "Tools" },
  { name: "ESP32", image: "/esp32.jpg", category: "Tools" },
]

// Tilt the card toward the cursor and move the spotlight with it
function handleTilt(e: MouseEvent<HTMLDivElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height
  card.style.setProperty("--rx", `${(0.5 - y) * 22}deg`)
  card.style.setProperty("--ry", `${(x - 0.5) * 22}deg`)
  card.style.setProperty("--mx", `${x * 100}%`)
  card.style.setProperty("--my", `${y * 100}%`)
}

function resetTilt(e: MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.setProperty("--rx", "0deg")
  e.currentTarget.style.setProperty("--ry", "0deg")
}

export function SkillsSection() {
  const [inView, setInView] = useState(false)
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const sectionRef = useRef<HTMLElement>(null)

  const filteredSkills =
    activeCategory === "All"
      ? // In "All", collapse the AWS services into the single "AWS" card
        skills.filter((skill) => skill.category !== "AWS" || skill.name === "AWS")
      : skills.filter((skill) => skill.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/20 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Technologies & Frameworks I’m Currently Exploring
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {categories.map((category) => {
            const isActive = category === activeCategory
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                    : "bg-card/60 text-muted-foreground border-border/50 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Re-keyed on filter change so the cards animate back in */}
        <div key={activeCategory} className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`flex ${inView ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.04}s`, perspective: "600px" }}
            >
              <div
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className="group relative w-[76px] sm:w-[88px] py-3 px-1.5 text-center cursor-pointer rounded-xl overflow-hidden
                  bg-card/80 backdrop-blur-sm border border-border/50
                  hover:border-primary/50 hover:shadow-xl hover:shadow-primary/15
                  transition-[transform,box-shadow,border-color] duration-200 ease-out"
                style={{
                  transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Cursor-following spotlight */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(120px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklch, var(--primary) 22%, transparent), transparent 70%)",
                  }}
                />

                <div className="relative w-8 h-8 sm:w-9 sm:h-9 mx-auto mb-2 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-125">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={36}
                    height={36}
                    className="w-full h-full object-contain rounded-md drop-shadow-sm group-hover:drop-shadow-lg transition-[filter] duration-300"
                  />
                </div>

                <h3 className="relative font-semibold text-[11px] sm:text-xs leading-tight group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-muted-foreground mb-6">
            Always learning and exploring new technologies to stay ahead of the curve
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Learning", "Exploring", "Building", "Growing"].map((tag, index) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium animate-bounce-in"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
