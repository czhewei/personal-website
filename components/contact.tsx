"use client"

import Link from "next/link"
import { Mail, Phone, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5 },
  }

  return (
    <div className="space-y-6">
      <section>
        <div className="flex items-center justify-center gap-10 py-2">
          <motion.div whileHover="hover" initial="initial">
            <Link
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <motion.div variants={iconVariants}>
                <Linkedin className="h-5 w-5 stroke-[1.5px]" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div whileHover="hover" initial="initial">
            <Link
              href="mailto:zhewei@example.com"
              className="text-neutral-400 hover:text-neutral-700 transition-colors"
              aria-label="Email"
            >
              <motion.div variants={iconVariants}>
                <Mail className="h-5 w-5 stroke-[1.5px]" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div whileHover="hover" initial="initial">
            <Link
              href="tel:+15551234567"
              className="text-neutral-400 hover:text-neutral-700 transition-colors"
              aria-label="Phone"
            >
              <motion.div variants={iconVariants}>
                <Phone className="h-5 w-5 stroke-[1.5px]" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

