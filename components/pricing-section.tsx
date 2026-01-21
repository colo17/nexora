"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { QuoteFormDialog } from "@/components/quote-form-dialog"
import { useLanguage } from "@/components/language-provider"

const tierOrder: Array<{ key: "starter" | "pro" | "custom"; highlighted: boolean }> = [
  { key: "starter", highlighted: false },
  { key: "pro", highlighted: true },
  { key: "custom", highlighted: false },
]

type PricingTier = {
  name: string
  price: string
  features: string[]
  cta: string
  highlighted: boolean
}

function PricingCard({
  tier,
  fromLabel,
  mostChosen,
  customPrice,
  className = "",
}: {
  tier: PricingTier
  fromLabel: string
  mostChosen: string
  customPrice: string
  className?: string
}) {
  return (
    <Card
      className={`relative group mt-8 ${
        tier.highlighted
          ? "border-2 border-primary shadow-xl scale-105 bg-gradient-to-b from-background to-primary/5 before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-primary before:rounded-t-xl before:pointer-events-none"
          : "hover:border-primary/50 hover:shadow-lg"
      } transition-all duration-300 ${className}`}
    >
      {tier.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
          {mostChosen}
        </div>
      )}
      <CardHeader className="text-center pb-6 px-4">
        <CardTitle className="text-xl sm:text-2xl mb-1">{tier.name}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl sm:text-4xl font-bold">
            {tier.price === customPrice ? (
              <span className="text-2xl sm:text-3xl">{tier.price}</span>
            ) : (
              <>
                <span className="text-base sm:text-lg font-normal text-muted-foreground">{fromLabel}</span>
                {tier.price}
              </>
            )}
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-6 pt-0">
        <ul className="space-y-2 mb-6">
          {tier.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-3 group/item">
              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        <QuoteFormDialog
          packageName={tier.name}
          variant={tier.highlighted ? "default" : "outline"}
          className={`w-full text-sm ${tier.highlighted ? "shadow-lg shadow-primary/20" : ""}`}
        >
          {tier.cta}
        </QuoteFormDialog>
      </CardContent>
    </Card>
  )
}

function PricingCarousel({
  tiers,
  fromLabel,
  mostChosen,
  customPrice,
}: {
  tiers: PricingTier[]
  fromLabel: string
  mostChosen: string
  customPrice: string
}) {
  return (
    <div className="sm:hidden">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-6" style={{ scrollBehavior: "smooth" }}>
        {tiers.map((tier, index) => (
          <PricingCard
            key={index}
            tier={tier}
            fromLabel={fromLabel}
            mostChosen={mostChosen}
            customPrice={customPrice}
            className="w-[85vw] max-w-sm flex-shrink-0 snap-center"
          />
        ))}
      </div>
    </div>
  )
}

export function PricingSection() {
  const { messages } = useLanguage()
  const pricing = messages.pricing
  const pricingTiers = tierOrder.map((tier) => ({ ...pricing.tiers[tier.key], highlighted: tier.highlighted })) as PricingTier[]
  const customPrice = pricing.tiers.custom.price

  return (
    <section id="pakketten" className="pt-0 pb-20 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {pricing.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            {pricing.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {pricing.subtitle}
          </p>
        </div>

        <PricingCarousel
          tiers={pricingTiers}
          fromLabel={pricing.fromLabel}
          mostChosen={pricing.mostChosen}
          customPrice={customPrice}
        />

        <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier}
              fromLabel={pricing.fromLabel}
              mostChosen={pricing.mostChosen}
              customPrice={customPrice}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {pricing.footerNote}
          </p>
        </div>
      </div>
    </section>
  )
}
