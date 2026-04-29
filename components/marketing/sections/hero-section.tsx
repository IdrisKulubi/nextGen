import Image from "next/image"
import Link from "next/link"

import { MotionSection } from "@/components/marketing/motion-section"
import { Button } from "@/components/ui/button"
import { HERO_IMAGE_PATH, hero } from "@/lib/site-content"

export function HeroSection() {
  return (
    <MotionSection
      id="top"
      className="relative flex min-h-[min(85svh,920px)] scroll-mt-20 items-end overflow-hidden bg-ng-charcoal pb-16 pt-28 sm:pb-24 sm:pt-32"
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
          className="absolute inset-0 bg-gradient-to-t from-ng-black via-ng-black/80 to-ng-black/45"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ng-black/90 via-transparent to-ng-black/50"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">
          <span className="h-3 w-1 shrink-0 bg-ng-red" aria-hidden />
          NextGen Apex Global Masters
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-ng-cream sm:text-5xl sm:leading-[1.1] lg:text-6xl lg:tracking-[-0.02em] xl:text-[4.5rem] xl:tracking-[-0.04em]">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ng-cream/85 sm:text-lg">
          {hero.subtext}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            asChild
            variant="heroPrimary"
            size="lg"
            className="h-12 min-w-[12rem] px-8 text-base font-semibold"
          >
            <Link href="#contact">{hero.ctaPrimary}</Link>
          </Button>
          <Button
            asChild
            variant="heroSecondary"
            size="lg"
            className="h-12 min-w-[12rem] px-8 text-base uppercase tracking-wide"
          >
            <Link href="#services">{hero.ctaSecondary}</Link>
          </Button>
        </div>
      </div>
    </MotionSection>
  )
}
