"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Experience from "./components/education"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import BlinkingCursor from "./components/BlinkingCursor"
import FloatingPixels from "./components/FloatingPixels"
import TechStack from "./components/TechStack"
import { HireMeModal } from "./components/HireMeModal"
import { useState } from "react"
import { useAlert } from "@/components/ui/AlertContext"
import { initEmailJS } from './utils/emailjs-config'

// Initialize EmailJS
if (typeof window !== 'undefined') {
  initEmailJS()
}

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false)
  const { showAlert } = useAlert()

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch("/resume/Vinay_Resume.pdf")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Vinay_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      showAlert("Your resume has been downloaded.", "success")
    } catch (error) {
      console.error("Download failed:", error)
      showAlert("There was an error downloading the resume. Please try again.", "error")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <FloatingPixels />
      <section id="about" className="text-center py-16 min-h-screen flex flex-col justify-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <Image
            src="/placeholder.svg?height=96&width=96"
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full pixelated-border"
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-black" />
        </div>
        <h1 className="text-2xl font-pixel mb-2 flex items-center justify-center gap-2">
          Hi! I'm Vinay <span className="animate-wave">👋</span>
        </h1>
        <h2 className="text-3xl font-pixel mb-4 leading-relaxed">
          Full Stack Developer based
          <br />
          in California, USA <BlinkingCursor />
        </h2>
        <p className="font-mono text-lg text-muted-foreground max-w-lg mx-auto mb-8">
          I build scalable web applications with robust backend services and user-friendly frontends, focusing on
          seamless API integrations, performance, and intuitive user experiences.
        </p>
        <div className="flex items-center justify-center gap-4">
          <HireMeModal />
          <Button variant="outline" className="font-pixel" onClick={handleDownload} disabled={isDownloading}>
            {isDownloading ? "Downloading..." : "Download CV"}
            <Download className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      <section id="tech-stack">
        <TechStack />
      </section>

      <Experience />

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

