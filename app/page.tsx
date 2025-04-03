"use client"

import { useState, useEffect } from "react"
import About from "@/components/about"
import { User, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [showAbout, setShowAbout] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  // Handle cursor position for subtle interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsMounted(true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: isMounted
          ? `radial-gradient(circle 200px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0,0,0,0.01) 0%, transparent 80%)`
          : "none",
      }}
    >
      <div className="w-full max-w-2xl text-center">
        <div className="space-y-6 w-full opacity-0 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">
            Hello, I'm <span className="text-neutral-800 font-normal">Zhe Wei</span>.
          </h1>

          <div className="flex items-center justify-center gap-6 w-full mt-8">
            {/* About button */}
            <button
              onClick={() => setShowAbout(!showAbout)}
              className={`relative p-2 rounded-full transition-colors ${
                showAbout ? "bg-neutral-100 text-neutral-800" : "text-neutral-400 hover:text-neutral-600"
              }`}
              aria-label="About me"
              title="About me"
            >
              <User className="h-5 w-5 stroke-[1.5px]" />
            </button>

            {/* Contact methods - directly in the main interface */}
            <div className="h-6 border-r border-neutral-200 mx-1"></div>

            <Link
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5 stroke-[1.5px]" />
            </Link>

            <Link
              href="mailto:zhewei@example.com"
              className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Email"
              title="Email"
            >
              <Mail className="h-5 w-5 stroke-[1.5px]" />
            </Link>

            <Link
              href="tel:+15551234567"
              className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Phone"
              title="Phone"
            >
              <Phone className="h-5 w-5 stroke-[1.5px]" />
            </Link>
          </div>
        </div>

        {showAbout && (
          <div className="w-full mt-8 text-left opacity-0 animate-fade-in">
            <About />
          </div>
        )}
      </div>
    </main>
  )
}
