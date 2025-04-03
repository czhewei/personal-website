import Link from "next/link"
import { cn } from "@/lib/utils"

interface CustomLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string // Allow specific props like `target`
  rel?: string
}

export function CustomLink({
  href,
  children,
  className = "",
  target,
  rel,
  ...props // Remove `[key: string]: any`
}: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={cn("text-muted-foreground hover:text-foreground transition-colors", className)}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Link>
  )
}
