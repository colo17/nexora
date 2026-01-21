"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { messages } = useLanguage()
  const footer = messages.footer
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{footer.brand}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{footer.copyright}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{footer.navigation}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#over-ons" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {footer.links.about}
                </Link>
              </li>
              <li>
                <Link href="#diensten" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {footer.links.services}
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {footer.links.portfolio}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{footer.follow}</h4>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
