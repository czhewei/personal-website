import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Zhe Wei | Personal Website",
  description: "Personal website of Zhe Wei, DevOps Engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-neutral-600`}>{children}</body>
    </html>
  )
}

import './globals.css'
