import "./globals.css"
import { Press_Start_2P, VT323 } from "next/font/google"
import Link from "next/link"
import SoundEffect from "./components/SoundEffect"
import PixelatedBackground from "./components/PixelatedBackground"
import type React from "react"
import NavMenu from "./components/NavMenu"
import { ClientAlertProvider } from "./components/ClientAlertProvider"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
})

export const metadata = {
  title: "Vinay - Full Stack Developer",
  description: "Portfolio of Vinay, a Full Stack Developer based in California",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${pressStart2P.variable} ${vt323.variable} bg-gray-900 text-white`}>
        <ClientAlertProvider>
          <PixelatedBackground />
          <header className="py-6 px-4 sticky top-0 z-10 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
            <nav className="max-w-4xl mx-auto flex justify-between items-center">
              <Link href="/" className="font-mono text-sm text-green-400 hover:text-green-300">
                vniredi@gmail.com
              </Link>
              <NavMenu />
            </nav>
          </header>
          <main className="min-h-screen">{children}</main>
          <footer className="py-8 text-center font-mono text-muted-foreground">
            © 2024 Vinay. All rights pixelated.
          </footer>
          <SoundEffect />
        </ClientAlertProvider>
      </body>
    </html>
  )
}



import './globals.css'