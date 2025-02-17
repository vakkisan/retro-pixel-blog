"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const experience = [
  {
    company: "Royal Bank of Canada",
    period: "Mar 2021 – Present",
    title: "Lead Software Developer",
    description:
      "Integrated TransUnion for credit checks, optimized transaction limits, and modernized features like void cheques and money transfers",
    side: "left",
  },
  {
    company: "John Deere",
    period: "Mar 2016 – Jan 2020",
    title: "Senior Java Developer",
    description:
      "Led the John Deere Customer Performance (JDCP) initiative, enhancing digital tools and integrating JDLink into the Operations Center.",
    side: "right",
  },
  {
    company: "University of NewOrleans",
    period: "Aug 2014 – Dec 2015",
    title: "Student",
    description:
      "Masters in Computer Science",
    side: "left",
  },
  {
    company: "Bank of America",
    period: "Jan 2013 – Jul 2014",
    title: "Software Engineer",
    description: "Worked on a project ensuring regulatory compliance in wire transfers.",
    side: "right",
  },
  {
    company: "Walmart",
    period: "Feb 2012 – Dec 2012",
    title: "Software Engineer",
    description: "Contributed to Walmart's Dynamic Pricing System",
    side: "left",
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16">
      <h2 className="text-2xl font-pixel mb-8">Experience</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-green-400/30 transform -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex ${item.side === "left" ? "justify-start" : "justify-end"} items-center`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 w-4 h-4 bg-green-400 rounded-full transform -translate-x-1/2 pixelated-border-sm" />

              {/* Content Card */}
              <Card
                className={`w-[calc(50%-2rem)] bg-gray-800 border-none pixelated-border ${
                  item.side === "left" ? "mr-auto" : "ml-auto"
                }`}
              >
                <div className="p-4">
                  <div className="font-mono text-sm text-red-400 mb-1">{item.period}</div>
                  <h3 className="font-pixel text-sm mb-2">{item.company}</h3>
                  <h4 className="font-mono text-green-400 mb-2">{item.title}</h4>
                  <p className="font-mono text-muted-foreground text-sm">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

