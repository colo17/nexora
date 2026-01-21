"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { lang, toggleLang, messages } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-9 px-3 hover:bg-primary/10 hover:text-foreground transition-colors text-xs font-semibold"
      aria-label={messages.navbar.toggleLabel}
      onClick={toggleLang}
    >
      {lang.toUpperCase()}
    </Button>
  )
}
