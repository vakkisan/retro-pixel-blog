"use client"

import { Server, Layout, Database, Network, Cloud, Cog } from "lucide-react"
import { useEffect, useState } from "react"

const skills = [
  {
    name: "Backend",
    icon: Server,
    technologies: ["Java Spring Boot", "Microservices", "Python"],
  },
  {
    name: "Frontend",
    icon: Layout,
    technologies: ["AngularJS", "React", "Next.js"],
  },
  {
    name: "Database",
    icon: Database,
    technologies: ["Oracle", "MongoDB", "Neo4j"],
  },
  {
    name: "Middleware",
    icon: Network,
    technologies: ["Kafka", "IBM MQ", "JMS Brokers"],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    name: "Other",
    icon: Cog,
    technologies: ["Eureka", "API Gateway", "Circuit Breaker", "ELK Stack"],
  },
]

export default function TechStack() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-16">
      <h2 className="text-2xl font-pixel mb-8 text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`bg-gray-800 p-4 rounded-lg pixelated-border transform transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-lg ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center mb-4">
              <skill.icon className="w-6 h-6 mr-2 text-green-400" />
              <h3 className="font-pixel text-sm">{skill.name}</h3>
            </div>
            <ul className="space-y-2">
              {skill.technologies.map((tech) => (
                <li key={tech} className="font-mono text-sm text-muted-foreground">
                  <span className="inline-block w-2 h-2 bg-green-400 mr-2"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-16 mt-12">
        <div className="text-center">
          <div className="text-3xl font-pixel mb-2 text-green-400">15+</div>
          <div className="font-mono text-muted-foreground">Projects completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-pixel mb-2 text-green-400">10+</div>
          <div className="font-mono text-muted-foreground">Years of experience</div>
        </div>
      </div>
    </section>
  )
}

