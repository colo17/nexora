"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/components/language-provider"

interface QuoteFormDialogProps {
  packageName?: string
  variant?: "default" | "outline"
  className?: string
  children?: React.ReactNode
}

export function QuoteFormDialog({ packageName, variant = "default", className, children }: QuoteFormDialogProps) {
  const { messages } = useLanguage()
  const copy = messages.quote
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    package: packageName || "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Quote form submitted:", formData)
    // Here you would typically send the form data to your backend
    setOpen(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      package: packageName || "",
      message: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {children || copy.trigger}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{copy.title}</DialogTitle>
          <DialogDescription>{copy.description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">{copy.fields.name}</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={copy.placeholders.name}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{copy.fields.email}</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={copy.placeholders.email}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{copy.fields.phone}</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={copy.placeholders.phone}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">{copy.fields.company}</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder={copy.placeholders.company}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="package">{copy.fields.package}</Label>
            <Select
              value={formData.package}
              onValueChange={(value) => setFormData({ ...formData, package: value })}
              required
            >
              <SelectTrigger id="package">
                <SelectValue placeholder={copy.placeholders.package} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={messages.pricing.tiers.starter.name}>{copy.options.starter}</SelectItem>
                <SelectItem value={messages.pricing.tiers.pro.name}>{copy.options.pro}</SelectItem>
                <SelectItem value={messages.pricing.tiers.custom.name}>{copy.options.custom}</SelectItem>
                <SelectItem value={copy.options.unsure}>{copy.options.unsure}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{copy.fields.message}</Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={copy.placeholders.message}
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              {copy.buttons.cancel}
            </Button>
            <Button type="submit" className="flex-1">
              {copy.buttons.submit}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
