"use client"

import type React from "react"

import Link from "next/link"
import { useScrollToSection } from "../hooks/useScrollToSection"
import { usePathname, useRouter } from "next/navigation"

const NavMenu = () => {
  const { scrollToSection, scrollToTop } = useScrollToSection()
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#tech-stack" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Contact", href: "/#contact" },
  ]

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (pathname !== "/") {
      await router.push("/")
      setTimeout(() => {
        if (href === "/#about") {
          scrollToTop()
        } else {
          const sectionId = href.split("#")[1]
          if (sectionId) {
            scrollToSection(sectionId)
          }
        }
      }, 100)
    } else {
      if (href === "/#about") {
        scrollToTop()
      } else {
        const sectionId = href.split("#")[1]
        if (sectionId) {
          scrollToSection(sectionId)
        }
      }
    }
  }

  return (
    <div className="flex gap-8">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="font-pixel text-xs text-muted-foreground hover:text-green-400 transition-colors"
          onClick={(e) => handleClick(e, item.href)}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default NavMenu

