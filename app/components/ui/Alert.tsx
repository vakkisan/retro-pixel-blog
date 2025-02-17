"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

export interface AlertProps {
  message: string
  type: "success" | "error" | "info"
  duration?: number
}

const Alert: React.FC<AlertProps> = ({ message, type, duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  const bgColor = type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-md ${bgColor} text-white font-pixel pixelated-border`}>
      <div className="flex items-center justify-between">
        <p>{message}</p>
        <button onClick={() => setIsVisible(false)} className="ml-4 focus:outline-none">
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

export default Alert

