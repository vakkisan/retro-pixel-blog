"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ProjectGraphicProps {
  seed: string
  primaryColor: string
  secondaryColor: string
  size?: number
}

const ProjectGraphic: React.FC<ProjectGraphicProps> = ({ seed, primaryColor, secondaryColor, size = 200 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear the canvas
    ctx.clearRect(0, 0, size, size)

    // Set the background
    ctx.fillStyle = secondaryColor
    ctx.fillRect(0, 0, size, size)

    // Generate a pseudo-random pattern based on the seed
    const random = (i: number) => {
      const x = Math.sin(i + seed.charCodeAt(i % seed.length)) * 10000
      return x - Math.floor(x)
    }

    // Draw the pattern
    const cellSize = size / 10
    for (let i = 0; i < 100; i++) {
      const x = Math.floor(i / 10)
      const y = i % 10
      if (random(i) > 0.5) {
        ctx.fillStyle = primaryColor
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
      }
    }

    // Add some pixelated details
    ctx.fillStyle = primaryColor
    for (let i = 0; i < 20; i++) {
      const x = Math.floor(random(i * 2) * size)
      const y = Math.floor(random(i * 2 + 1) * size)
      const s = Math.floor((random(i * 2 + 2) * cellSize) / 2) + cellSize / 4
      ctx.fillRect(x, y, s, s)
    }
  }, [seed, primaryColor, secondaryColor, size])

  return <canvas ref={canvasRef} width={size} height={size} className="pixelated-border" />
}

export default ProjectGraphic

