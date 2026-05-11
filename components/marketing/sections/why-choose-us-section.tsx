"use client"

import { CirclesThree, Sparkle, Stack } from "@phosphor-icons/react"

import {
  MotionSection,
  Reveal,
  StaggerItem,
  StaggerList,
} from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { sectionBackdropImages, whyChooseUs } from "@/lib/site-content"

const icons = [CirclesThree, Sparkle, Stack] as const

export function WhyChooseUsSection() {
  return (
    <MotionSection
      id="why-choose-us"
      className="relative scroll-mt-24 overflow-hidden border-y border-ng-concrete/15 bg-[#f4efe6] py-20 sm:py-28 dark:border-white/5 dark:bg-ng-charcoal"
    >
      <SectionBackdrop
        src={sectionBackdropImages.whyChooseUs}
        tone="charcoal"
        imageClassName="opacity-[0.24] saturate-[0.7] sm:opacity-[0.32]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal direction="right" className="lg:col-span-4">
            <div className="border-l-4 border-ng-gold pl-5">
              <p className="text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
                Why NextGen
              </p>
              <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-ng-black sm:text-4xl dark:text-ng-cream">
                Built for partners who expect more
              </h2>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-ng-black/65 sm:text-base dark:text-ng-concrete">
              {whyChooseUs.intro}
            </p>
            <div className="mt-8 grid grid-cols-2 border-y border-ng-concrete/20 py-5 dark:border-white/10">
              <div>
                <p className="font-heading text-3xl font-bold text-ng-black/40 dark:text-ng-gold">
                  360
                </p>
                <p className="mt-1 text-xs font-semibold tracking-[0.08em] text-ng-black/55 uppercase dark:text-ng-concrete">
                  Delivery view
                </p>
              </div>
              <div className="border-l border-ng-concrete/20 pl-5 dark:border-white/10">
                <p className="font-heading text-3xl font-bold text-ng-black/40 dark:text-ng-gold">
                  01
                </p>
                <p className="mt-1 text-xs font-semibold tracking-[0.08em] text-ng-black/55 uppercase dark:text-ng-concrete">
                  Accountable partner
                </p>
              </div>
            </div>
          </Reveal>

          <StaggerList className="lg:col-span-8">
            {whyChooseUs.items.map((item, i) => {
              const Icon = icons[i] ?? Stack
              const number = String(i + 1).padStart(2, "0")

              return (
                <StaggerItem key={item.title} className="group">
                  <article className="relative grid gap-5 border-t border-ng-concrete/25 bg-ng-white/72 px-0 py-7 transition-colors first:border-t-0 hover:bg-ng-white/90 sm:grid-cols-[5rem_1fr_auto] sm:items-start sm:px-6 dark:border-white/10 dark:bg-ng-black/24 dark:hover:bg-ng-black/36">
                    <div className="flex items-center gap-4 sm:block">
                      <span className="font-heading text-sm font-bold tracking-[0.18em] text-ng-black/45 dark:text-ng-gold">
                        {number}
                      </span>
                      <div className="flex size-11 items-center justify-center border border-ng-gold/35 text-ng-gold transition-colors group-hover:border-ng-gold/70 group-hover:text-ng-gold sm:mt-5">
                        <Icon className="size-6" weight="duotone" aria-hidden />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-ng-black dark:text-ng-cream">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-ng-black/62 sm:text-base dark:text-ng-concrete">
                        {item.description}
                      </p>
                    </div>

                    <div
                      className="hidden h-full w-px bg-linear-to-b from-ng-gold via-ng-gold/55 to-transparent opacity-0 transition-opacity group-hover:opacity-100 sm:block"
                      aria-hidden
                    />
                  </article>
                </StaggerItem>
              )
            })}
          </StaggerList>
        </div>
      </div>
    </MotionSection>
  )
}
