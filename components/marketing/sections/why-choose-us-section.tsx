"use client"

import { CirclesThree, Sparkle, Stack } from "@phosphor-icons/react"

import {
  MotionSection,
  Reveal,
  StaggerItem,
  StaggerList,
} from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { SectionIntro } from "@/components/marketing/section-intro"
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
        imageClassName="opacity-[0.18] saturate-[0.65] sm:opacity-[0.24]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal direction="right" className="lg:col-span-4">
            <SectionIntro
              eyebrow="Why NextGen"
              title="Built for partners who expect more"
              description={whyChooseUs.intro}
            />
          </Reveal>

          <StaggerList className="lg:col-span-8">
            {whyChooseUs.items.map((item, i) => {
              const Icon = icons[i] ?? Stack
              const number = String(i + 1).padStart(2, "0")

              return (
                <StaggerItem key={item.title}>
                  <article className="border-t border-ng-concrete/25 bg-ng-white/80 px-5 py-7 first:border-t-0 sm:px-7 dark:border-white/10 dark:bg-ng-black/24">
                    <div className="flex gap-5">
                      <div className="shrink-0 pt-1">
                        <span className="block font-heading text-sm font-bold tracking-[0.14em] text-ng-black/45 dark:text-ng-gold">
                          {number}
                        </span>
                        <Icon
                          className="mt-3 size-6 text-ng-gold"
                          weight="duotone"
                          aria-hidden
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-ng-black dark:text-ng-cream">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-prose text-sm leading-7 text-ng-black/62 sm:text-base dark:text-ng-concrete">
                          {item.description}
                        </p>
                      </div>
                    </div>
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
