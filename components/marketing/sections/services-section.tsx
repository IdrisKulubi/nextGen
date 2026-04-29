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
import { sectionBackdropImages, services } from "@/lib/site-content"

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
        imageClassName="object-cover object-center opacity-[0.18] saturate-[0.65] sm:opacity-[0.22]"
        overlayClassName="bg-gradient-to-b from-[#f5f3ef]/86 via-[#f5f3ef]/78 to-[#ebe6dd]/90 dark:from-ng-black/88 dark:via-ng-black/82 dark:to-ng-black/92"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal direction="right" className="lg:col-span-4">
            <div className="border-l-4 border-ng-red pl-5">
              <p className="text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
                What we do
              </p>
              <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-ng-black sm:text-4xl dark:text-ng-cream">
                Services built for scale
              </h2>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-ng-black/65 sm:text-base dark:text-ng-concrete">
              End-to-end capability across construction, property, design,
              delivery, and supply, organized around the realities of live
              project sites.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal
              direction="left"
              className="group relative overflow-hidden border border-ng-concrete/25 bg-ng-white/78 shadow-[0_22px_48px_-30px_rgba(15,15,15,0.45)] dark:border-white/10 dark:bg-ng-charcoal/55 dark:shadow-none"
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-ng-red" />
              <div className="grid gap-8 p-7 sm:grid-cols-[1fr_auto] sm:p-9">
                <div>
                  <p className="font-heading text-sm font-bold tracking-[0.18em] text-ng-red">
                    01 / Core delivery
                  </p>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-ng-black sm:text-3xl dark:text-ng-cream">
                    {primaryService.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-ng-black/68 dark:text-ng-concrete">
                    {primaryService.description}
                  </p>
                </div>
                <div className="flex size-16 items-center justify-center border border-ng-gold/35 text-ng-gold transition-colors group-hover:border-ng-red group-hover:text-ng-red">
                  <HardHat className="size-8" weight="duotone" aria-hidden />
                </div>
              </div>
            </Reveal>

            <StaggerList className="mt-6 divide-y divide-ng-concrete/20 border-y border-ng-concrete/25 dark:divide-white/10 dark:border-white/10">
              {secondaryServices.map((service, i) => {
                const iconIndex = i + 1
                const Icon = icons[iconIndex] ?? HardHat
                const number = String(iconIndex + 1).padStart(2, "0")

                return (
                  <StaggerItem key={service.title}>
                    <article className="group grid gap-5 bg-[#f8f6f1]/70 px-0 py-6 transition-colors hover:bg-ng-white/86 sm:grid-cols-[4.5rem_1fr_auto] sm:items-start sm:px-6 dark:bg-ng-black/20 dark:hover:bg-ng-black/34">
                      <div className="flex items-center gap-4 sm:block">
                        <span className="font-heading text-sm font-bold tracking-[0.18em] text-ng-red">
                          {number}
                        </span>
                        <div className="flex size-10 items-center justify-center border border-ng-gold/35 text-ng-gold transition-colors group-hover:border-ng-red group-hover:text-ng-red sm:mt-4">
                          <Icon
                            className="size-5"
                            weight="duotone"
                            aria-hidden
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-ng-black dark:text-ng-cream">
                          {service.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-7 text-ng-black/62 dark:text-ng-concrete">
                          {service.description}
                        </p>
                      </div>

                      <div
                        className="hidden h-full w-px bg-linear-to-b from-ng-red via-ng-red/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 sm:block"
                        aria-hidden
                      />
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
