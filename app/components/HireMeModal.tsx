"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAlert } from "@/components/ui/AlertContext"

export function HireMeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { showAlert } = useAlert()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server or a third-party service
    console.log("Form submitted:", formData)
    showAlert("Message Sent! Thank you for your interest. I'll get back to you soon!", "success")
    setIsOpen(false)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="font-pixel">
        Hire Me
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gray-800 border-none pixelated-border">
          <DialogHeader>
            <DialogTitle className="font-pixel text-xl text-green-400">Let's Work Together!</DialogTitle>
            <DialogDescription className="font-mono">
              Fill out this form and I'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="font-mono"
                required
              />
            </div>
            <div>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="font-mono"
                required
              />
            </div>
            <div>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="font-mono"
                required
              />
            </div>
            <Button type="submit" className="font-pixel w-full">
              Send Message
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

