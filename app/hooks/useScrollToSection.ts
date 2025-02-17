"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export const useScrollToSection = () => {
  const router = useRouter()

  useEffect(() => {
    const handleScrollToSection = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const section = document.querySelector(target.hash)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleScrollToSection)
    return () => document.removeEventListener("click", handleScrollToSection)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return { scrollToSection, scrollToTop }
}

