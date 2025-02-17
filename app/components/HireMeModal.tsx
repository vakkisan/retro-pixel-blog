"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAlert } from "@/components/ui/AlertContext"
import emailjs from '@emailjs/browser'

export function HireMeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { showAlert } = useAlert()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formElements = new FormData(form)

    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      subject: "Hire Me Inquiry",
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        emailData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      setStatus('success')
      setFormData({ name: "", email: "", message: "" })
      showAlert("Message Sent! Thank you for your interest. I'll get back to you soon!", "success")
      setTimeout(() => {
        setIsOpen(false)
      }, 2000)
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      showAlert("Failed to send message. Please try again.", "error")
    }
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
            <Button type="submit" className="font-pixel w-full" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </Button>
            
            {status === 'error' && (
              <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

