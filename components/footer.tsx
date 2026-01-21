"use client"

import Link from "next/link"
import { Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Logo } from "@/components/logo"

export function Footer() {
  const { messages } = useLanguage()
  const footer = messages.footer
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo sizeClass="h-14 md:h-16" />
            </div>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
