import Image from "next/image"
import Link from "next/link"

import { MotionSection, Reveal } from "@/components/marketing/motion-section"
import { TypingHeadlinePhrase } from "@/components/marketing/typing-headline-phrase"
import { COMPANY_NAME, HERO_IMAGE_PATH, contactLinks, hero } from "@/lib/site-content"

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
        <div
          className="absolute inset-0 bg-gradient-to-r from-ng-black/78 via-ng-black/28 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl border-t-2 border-ng-gold pt-8 lg:max-w-3xl">
          <Reveal direction="up" className="mb-5">
            <span className="inline-block bg-ng-gold px-3 py-2 text-[0.625rem] leading-tight font-bold tracking-wide text-ng-black uppercase sm:text-xs sm:tracking-wider">
              {COMPANY_NAME}
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.06}>
            <h1 className="max-w-none text-ng-cream">
              <span className="block">{hero.headlineLineWhite}</span>
              <span className="block">{hero.headlineLinesRed[0]}</span>
              <span className="block">
                <TypingHeadlinePhrase text={hero.headlineLinesRed[1]} />
              </span>
            </h1>
          </Reveal>

          <Reveal
            direction="up"
            delay={0.12}
            className="mt-6 max-w-xl text-base leading-relaxed text-ng-cream/90 sm:text-lg"
          >
            <p className="max-w-xl">{hero.subtext}</p>
          </Reveal>

          <Reveal direction="up" delay={0.18}>
            <nav
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
              aria-label="Hero actions"
            >
              <Link
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center bg-ng-red px-6 text-sm font-semibold text-ng-white transition-colors hover:bg-ng-red-deep"
              >
                {hero.ctaPrimary}
              </Link>
              <Link
                href="#services"
                className="text-sm font-semibold text-ng-cream underline-offset-4 transition-colors hover:text-ng-gold hover:underline"
              >
                {hero.ctaSecondary}
              </Link>
            </nav>
          </Reveal>
        </div>
      </div>
    </MotionSection>
  )
}
