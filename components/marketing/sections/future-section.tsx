import { MotionSection, Reveal } from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { SectionIntro } from "@/components/marketing/section-intro"
import { future, sectionBackdropImages } from "@/lib/site-content"

export function FutureSection() {
  return (
    <MotionSection
      id="future"
      className="relative scroll-mt-24 overflow-hidden border-y border-ng-concrete/15 bg-[#f4efe6] py-20 sm:py-28 dark:border-white/5 dark:bg-ng-charcoal"
    >
      <SectionBackdrop
        src={sectionBackdropImages.future}
        tone="charcoal"
        imageClassName="opacity-[0.18] saturate-[0.65] sm:opacity-[0.24]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal
          direction="up"
          className="border border-ng-concrete/25 bg-ng-white/80 p-7 sm:p-10 dark:border-white/10 dark:bg-ng-black/28"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
            <SectionIntro
              eyebrow={future.eyebrow}
              title={future.title}
              className="lg:col-span-4"
            />
            <p className="max-w-prose text-base leading-7 text-ng-black/72 sm:text-lg lg:col-span-8 dark:text-ng-cream/90">
              {future.text}
            </p>
          </div>
        </Reveal>
      </div>
    </MotionSection>
  )
}
