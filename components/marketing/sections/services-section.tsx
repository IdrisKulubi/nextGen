"use client"

import {
  Buildings,
  ClipboardText,
  CompassTool,
  HardHat,
  Storefront,
  Truck,
} from "@phosphor-icons/react"

import { MotionSection } from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { sectionBackdropImages, services } from "@/lib/site-content"

const icons = [HardHat, Buildings, CompassTool, ClipboardText, Truck, Storefront] as const

export function ServicesSection() {
  return (
    <MotionSection
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-[#f5f3ef]/40 py-20 sm:py-28"
    >
      <SectionBackdrop
        src={sectionBackdropImages.services}
        tone="warm"
        imageClassName="object-cover object-center opacity-[0.42] saturate-[0.7] sm:opacity-[0.5]"
        overlayClassName="bg-gradient-to-b from-[#f5f3ef]/58 via-[#f5f3ef]/48 to-[#ebe6dd]/62"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">What we do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ng-black sm:text-4xl lg:tracking-[-0.02em]">
            Services built for scale
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ng-black/80">
            End-to-end capability across construction, property, design, delivery, and supply.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i] ?? HardHat
            return (
              <li key={service.title}>
                <article className="group flex h-full flex-col border border-ng-concrete/25 border-l-4 border-l-ng-red bg-ng-white/88 p-6 text-ng-black shadow-sm transition-colors hover:border-ng-gold/50 dark:border-ng-concrete/30 dark:bg-ng-charcoal dark:text-ng-cream dark:shadow-none">
                  <div className="mb-5 inline-flex size-12 items-center justify-center border border-ng-concrete/25 bg-ng-red/8 text-ng-red transition-colors group-hover:border-ng-red group-hover:bg-ng-red group-hover:text-ng-white dark:bg-ng-cream/5">
                    <Icon className="size-6" weight="duotone" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ng-black/65 group-hover:text-ng-black/85 dark:text-ng-concrete dark:group-hover:text-ng-cream/90">
                    {service.description}
                  </p>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </MotionSection>
  )
}
