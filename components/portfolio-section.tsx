"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const baseProjects = [
  {
    key: "floycica",
    image: "/floycica.png",
    url: "https://floycica.com/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SQL"],
    type: "website" as const,
  },
  {
    key: "vvabogados",
    image: "/vvabogados.png",
    url: "https://vvabogados-modern.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SQL"],
    type: "website" as const,
  },
  {
    key: "rpboosts",
    image: "/rpboosts.png",
    url: "https://rpboosts.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SQL"],
    type: "website" as const,
  },
  {
    key: "uruguayrp",
    image: "/uruguayrp.png",
    url: "https://uruguayrp.com/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SQL"],
    type: "website" as const,
  },
  {
    key: "productLaunch",
    image: "/uruguayrpmarketing.png",
    url: "https://www.instagram.com/uruguay__rp/",
    tags: ["Landing Pages", "Email", "Paid Ads"],
    type: "marketing" as const,
  },
  {
    key: "brandSprint",
    image: "/bekkomarketing.png",
    url: "https://www.tiktok.com/@bekkomusic",
    tags: ["Social", "Content", "Analytics"],
    type: "marketing" as const,
  },
  {
    key: "leadGen",
    image: "/tateimarketing.png",
    url: "https://www.youtube.com/@tatomachadoo",
    tags: ["PPC", "Retargeting", "CRO"],
    type: "marketing" as const,
  },
  {
    key: "nurture",
    image: "/gangahomemarketing.png",
    url: "https://www.mercadolibre.com.uy/pagina/gangahomeuy#from=share_eshop",
    tags: ["Email", "Automation", "A/B Testing"],
    type: "marketing" as const,
  },
]

type LocalizedProject = (typeof baseProjects)[number] & {
  title: string
  category: string
  description: string
}

function ProjectGrid({ items, emptyText, viewProjectLabel }: { items: LocalizedProject[]; emptyText: string; viewProjectLabel: string }) {
  if (!items.length) {
    return (
      <div className="text-muted-foreground text-sm bg-muted/40 border border-border/50 rounded-lg p-6">
        {emptyText}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((project, index) => (
        <Card
          key={index}
          className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 p-0 gap-0"
        >
          <div className="relative overflow-hidden aspect-video">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <Button
                size="sm"
                variant="secondary"
                className="gap-2 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-primary/10 hover:text-foreground"
                onClick={() => window.open(project.url, "_blank")}
              >
                {viewProjectLabel} <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:bg-primary/10 hover:text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function WebsiteShowcase({ items, comingSoonText, viewProjectLabel, label }: { items: LocalizedProject[]; comingSoonText: string; viewProjectLabel: string; label: string }) {
  const [index, setIndex] = useState(0)
  const hasItems = items.length > 0
  const current = hasItems ? items[index % items.length] : null

  const next = () => {
    if (!hasItems) return
    setIndex((prev) => (prev + 1) % items.length)
  }

  const prev = () => {
    if (!hasItems) return
    setIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background via-background to-primary/5 shadow-lg">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_30%)]" />

      <div className="flex items-start px-4 sm:px-6 pt-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80">{label}</p>
          <h3 className="text-lg font-semibold text-foreground">{current?.title ?? comingSoonText}</h3>
          {current && <p className="text-sm text-muted-foreground">{current.category}</p>}
        </div>
      </div>

      <div className="relative mt-4 px-4 sm:px-6 pb-6 flex flex-col items-center">
        <div className="relative w-full max-w-5xl lg:max-w-6xl">
          <img
            src="/restaurant-website-design.png"
            alt="Laptop mockup"
            className="w-full h-auto rounded-xl shadow-xl"
          />

          {hasItems && (
            <>
              <div className="absolute inset-y-0 -left-3 sm:-left-5 flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  aria-label="Previous project"
                  className="rounded-full bg-background/80 backdrop-blur hover:bg-primary/10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute inset-y-0 -right-3 sm:-right-5 flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  aria-label="Next project"
                  className="rounded-full bg-background/80 backdrop-blur hover:bg-primary/10"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}

          {/* Screen area overlay */}
          <div
            className="group/screen absolute overflow-hidden rounded-[12px] shadow-inner bg-background/90 border border-border/60 cursor-pointer"
            style={{ left: "12%", right: "12%", top: "10%", bottom: "calc(25% + 2px)" }}
            onClick={() => current?.url && window.open(current.url, "_blank")}
            role="button"
            aria-label={current ? `${viewProjectLabel} ${current.title}` : comingSoonText}
          >
            {current ? (
              <img
                src={current.image || "/placeholder.svg"}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/screen:scale-[1.02] group-hover/screen:brightness-105"
              />
            ) : (
              <div className="w-full h-full grid place-items-center text-muted-foreground text-sm">{comingSoonText}</div>
            )}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/30 via-background/10 to-transparent" />
          </div>
        </div>

        {current && (
          <div className="mt-4 text-center max-w-2xl">
            <p className="text-muted-foreground text-sm leading-relaxed">{current.description}</p>
            <div className="flex justify-center flex-wrap gap-2 mt-3">
              {current.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:bg-primary/10 hover:text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <Button
                size="sm"
                variant="secondary"
                className="gap-2 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-primary/10 hover:text-foreground"
                onClick={() => window.open(current.url, "_blank")}
              >
                {viewProjectLabel} <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function PortfolioSection() {
  const { messages } = useLanguage()
  const copy = messages.portfolio

  const localizedProjects = baseProjects.map((project) => {
    const localized = copy.projects[project.key as keyof typeof copy.projects]
    return {
      ...project,
      title: localized.title,
      category: localized.category,
      description: localized.description,
    }
  })

  const websiteProjects = localizedProjects.filter((project) => project.type === "website")
  const marketingProjects = localizedProjects.filter((project) => project.type === "marketing")

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">{copy.heading}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">{copy.description}</p>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
                {copy.categories.websites}
              </span>
            </div>
              <WebsiteShowcase
                items={websiteProjects}
                comingSoonText={copy.comingSoon}
                viewProjectLabel={copy.buttons.viewProject}
                label={copy.categories.websites}
              />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
                {copy.categories.marketing}
              </span>
            </div>
              <ProjectGrid
                items={marketingProjects}
                emptyText={copy.marketingEmpty}
                viewProjectLabel={copy.buttons.viewProject}
              />
          </div>
        </div>
      </div>
    </section>
  )
}
