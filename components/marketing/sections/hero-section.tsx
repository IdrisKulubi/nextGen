import Image from "next/image"
import Link from "next/link"

import {
  MotionSection,
  Reveal,
  StaggerGroup,
} from "@/components/marketing/motion-section"
import { ContactOptionsDialog } from "@/components/marketing/contact-options-dialog"
import { TypingHeadlinePhrase } from "@/components/marketing/typing-headline-phrase"
import { COMPANY_NAME, HERO_IMAGE_PATH, hero } from "@/lib/site-content"

export function HeroSection() {
  return (
    <MotionSection
      id="top"
      className="relative flex min-h-[min(85svh,920px)] scroll-mt-[5.5rem] items-end overflow-hidden bg-ng-charcoal pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE_PATH}
          alt="Construction site and modern infrastructure"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ng-black/72 via-ng-black/36 to-ng-black/12"
          aria-hidden
        />
        {/* Dark on the left so left-aligned copy stays readable (matches reference) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-ng-black/78 via-ng-black/28 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <StaggerGroup className="flex max-w-xl gap-4 sm:max-w-2xl lg:max-w-3xl lg:gap-5">
          <Reveal
            direction="down"
            delay={0.08}
            className="w-1 shrink-0 self-stretch bg-ng-gold"
            aria-hidden
          />

          <div className="min-w-0 flex-1 text-left">
            <Reveal direction="up" delay={0.08} className="mb-5">
              <span className="inline-block rounded-md bg-ng-gold px-3 py-2 text-[0.625rem] leading-tight font-bold tracking-wide text-ng-black uppercase sm:text-xs sm:tracking-wider">
                {COMPANY_NAME}
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.16}>
              <h1 className="text-4xl leading-[1.12] font-bold tracking-tight sm:text-5xl sm:leading-[1.12] lg:text-6xl lg:tracking-[-0.02em] xl:text-[4.5rem] xl:leading-[1.08] xl:tracking-[-0.04em]">
                <span className="block text-ng-cream">
                  {hero.headlineLineWhite}
                </span>
                <span className="block text-ng-cream">
                  {hero.headlineLinesRed[0]}
                </span>
                <span className="block">
                  <TypingHeadlinePhrase text={hero.headlineLinesRed[1]} />
                </span>
              </h1>
            </Reveal>

            <Reveal
              direction="up"
              delay={0.24}
              className="mt-6 max-w-2xl text-base leading-relaxed text-ng-cream sm:text-lg"
            >
              {hero.subtext}
            </Reveal>

            <Reveal direction="up" delay={0.32}>
              <nav
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-base font-medium text-ng-cream"
                aria-label="Hero actions"
              >
                <ContactOptionsDialog className="border-b-2 border-transparent pb-0.5 text-left transition-colors hover:border-ng-gold hover:text-ng-cream">
                  {hero.ctaPrimary}
                </ContactOptionsDialog>
                <Link
                  href="#services"
                  className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-ng-gold hover:text-ng-cream"
                >
                  {hero.ctaSecondary}
                </Link>
              </nav>
            </Reveal>
          </div>
        </StaggerGroup>
      </div>
    </MotionSection>
  )
}
