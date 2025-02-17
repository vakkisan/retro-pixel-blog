"use client"

import { PopupModal } from "react-calendly"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/vniredi"

export function CalendlyButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)} 
        className="font-pixel bg-green-500 hover:bg-green-600 mt-4"
      >
        Schedule a Call
      </Button>
      {isMounted && (
        <PopupModal
          url={CALENDLY_URL}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.body}
        />
      )}
    </>
  )
} 