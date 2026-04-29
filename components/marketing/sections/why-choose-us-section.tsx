"use client"

import { CirclesThree, Sparkle, Stack } from "@phosphor-icons/react"

import { MotionSection } from "@/components/marketing/motion-section"
import { whyChooseUs } from "@/lib/site-content"

const icons = [CirclesThree, Sparkle, Stack] as const

export function WhyChooseUsSection() {
  return (
    <MotionSection
      id="why-choose-us"
      className="scroll-mt-24 border-t border-white/5 bg-ng-charcoal py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">Why NextGen</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ng-cream sm:text-4xl lg:tracking-[-0.02em]">
            Built for partners who expect more
          </h2>
        </div>

        <ul className="mt-14 grid gap-8 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i] ?? Stack
            return (
              <li key={item.title}>
                <article className="flex h-full flex-col border border-ng-concrete/25 border-l-4 border-l-ng-red bg-ng-black/40 p-8 transition-colors hover:border-ng-gold/50">
                  <div className="inline-flex size-12 items-center justify-center border border-ng-gold/40 text-ng-gold">
                    <Icon className="size-7" weight="duotone" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-ng-cream">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ng-concrete sm:text-base">
                    {item.description}
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
