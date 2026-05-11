import { MotionSection, Reveal } from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
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
        imageClassName="opacity-[0.24] saturate-[0.68] sm:opacity-[0.3]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal
          direction="up"
          className="border border-ng-concrete/25 bg-ng-white/72 p-7 shadow-[0_18px_40px_-30px_rgba(15,15,15,0.45)] sm:p-10 dark:border-white/10 dark:bg-ng-black/28 dark:shadow-none"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="border-l-4 border-ng-gold pl-5 lg:col-span-4">
              <p className="text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
                {future.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-ng-black sm:text-4xl dark:text-ng-cream">
                {future.title}
              </h2>
            </div>
            <p className="text-base leading-8 text-ng-black/72 sm:text-lg lg:col-span-8 dark:text-ng-cream/90">
              {future.text}
            </p>
          </div>
        </Reveal>
      </div>
    </MotionSection>
  )
}
