"use client"

import {
  Buildings,
  ClipboardText,
  CompassTool,
  HardHat,
  Storefront,
  Truck,
} from "@phosphor-icons/react"

import {
  MotionSection,
  Reveal,
  StaggerItem,
  StaggerList,
} from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { SectionIntro } from "@/components/marketing/section-intro"
import {
  sectionBackdropImages,
  services,
  servicesIntro,
} from "@/lib/site-content"

const icons = [
  HardHat,
  Buildings,
  CompassTool,
  ClipboardText,
  Truck,
  Storefront,
] as const

export function ServicesSection() {
  const [primaryService, ...secondaryServices] = services

  return (
    <MotionSection
      id="services"
      className="relative scroll-mt-24 overflow-hidden border-y border-ng-concrete/15 bg-[#f5f3ef] py-20 sm:py-28 dark:border-white/5 dark:bg-ng-black"
    >
      <SectionBackdrop
        src={sectionBackdropImages.services}
        tone="warm"
        imageClassName="object-cover object-center opacity-[0.22] saturate-[0.65] sm:opacity-[0.28]"
        overlayClassName="bg-gradient-to-b from-[#f5f3ef]/82 via-[#f5f3ef]/74 to-[#ebe6dd]/88 dark:from-ng-black/82 dark:via-ng-black/74 dark:to-ng-black/88"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal direction="right" className="lg:col-span-4">
            <SectionIntro
              eyebrow="What we do"
              title="Product & Services"
              description={servicesIntro.text}
            />
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal
              direction="left"
              className="border border-ng-concrete/25 bg-ng-white/85 dark:border-white/10 dark:bg-ng-charcoal/55"
            >
              <div className="h-1 bg-ng-gold" aria-hidden />
              <div className="grid gap-8 p-7 sm:grid-cols-[1fr_auto] sm:p-9">
                <div>
                  <p className="font-heading text-sm font-bold tracking-[0.14em] text-ng-black/55 dark:text-ng-gold">
                    01 / {servicesIntro.title}
                  </p>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-ng-black sm:text-3xl dark:text-ng-cream">
                    {primaryService.title}
                  </h3>
                  <p className="mt-4 max-w-prose text-base leading-7 text-ng-black/68 dark:text-ng-concrete">
                    {primaryService.description}
                  </p>
                </div>
                <div className="flex size-14 items-center justify-center border border-ng-gold/40 text-ng-gold">
                  <HardHat className="size-7" weight="duotone" aria-hidden />
                </div>
              </div>
            </Reveal>

            <StaggerList className="mt-6 divide-y divide-ng-concrete/20 border border-ng-concrete/25 bg-ng-white/70 dark:divide-white/10 dark:border-white/10 dark:bg-ng-black/20">
              {secondaryServices.map((service, i) => {
                const iconIndex = i + 1
                const Icon = icons[iconIndex] ?? HardHat
                const number = String(iconIndex + 1).padStart(2, "0")

                return (
                  <StaggerItem key={service.title}>
                    <article className="grid gap-4 px-5 py-6 transition-colors hover:bg-ng-white sm:grid-cols-[3.5rem_1fr] sm:items-start sm:gap-6 sm:px-7 dark:hover:bg-ng-black/30">
                      <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                        <span className="font-heading text-sm font-bold tracking-[0.14em] text-ng-black/45 dark:text-ng-gold">
                          {number}
                        </span>
                        <Icon
                          className="size-6 text-ng-gold sm:mt-1"
                          weight="duotone"
                          aria-hidden
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-ng-black dark:text-ng-cream">
                          {service.title}
                        </h3>
                        <p className="mt-2 max-w-prose text-sm leading-7 text-ng-black/62 dark:text-ng-concrete">
                          {service.description}
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                )
              })}
            </StaggerList>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
