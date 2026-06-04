import {
  MotionSection,
  Reveal,
  StaggerItem,
  StaggerList,
} from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { SectionIntro } from "@/components/marketing/section-intro"
import { about, sectionBackdropImages } from "@/lib/site-content"
import { cn } from "@/lib/utils"

export function AboutSection() {
  return (
    <MotionSection
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-t border-ng-concrete/15 bg-[#f7f4ee] py-20 sm:py-28 dark:border-white/5 dark:bg-ng-black"
    >
      <SectionBackdrop src={sectionBackdropImages.about} tone="dark" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 lg:gap-y-14 xl:gap-x-14">
          <Reveal direction="right" className="lg:col-span-5 lg:justify-center">
            <SectionIntro
              eyebrow="About us"
              title={about.title}
              description={about.lead}
            />
          </Reveal>

          <Reveal
            direction="left"
            delay={0.1}
            className={cn(
              "group relative lg:col-span-7",
              "border border-ng-concrete/25 bg-ng-white/90 dark:border-white/10 dark:bg-ng-charcoal/80",
              "shadow-[0_20px_40px_-24px_rgba(15,15,15,0.2)] dark:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.55)]"
            )}
          >
            <div
              className="h-1 w-full bg-ng-gold"
              aria-hidden
            />

            <div className="relative space-y-8 p-8 sm:p-9 lg:p-10">
              <p className="max-w-prose text-base leading-relaxed text-ng-black/78 sm:text-lg dark:text-ng-cream/88">
                {about.body}
              </p>

              <div className="space-y-4 border-t border-ng-concrete/20 pt-8 dark:border-white/10">
                <p className="text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
                  {about.focusTitle}
                </p>
                <p className="max-w-prose text-sm leading-7 text-ng-black/64 dark:text-ng-concrete">
                  {about.focusIntro}
                </p>
                <StaggerList className="grid gap-3" role="list">
                  {about.focus.map((item) => (
                    <StaggerItem key={item.title}>
                      <div
                        className={cn(
                          "border border-ng-concrete/18 bg-[#f5f3ef]/80 px-4 py-4 dark:border-white/6 dark:bg-ng-black/35",
                          "transition-colors duration-200 hover:border-ng-gold/35 hover:bg-ng-gold/6"
                        )}
                      >
                        <h3 className="text-sm font-bold text-ng-black sm:text-base dark:text-ng-cream/95">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-prose text-sm leading-6 text-ng-black/62 dark:text-ng-concrete">
                          {item.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerList>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </MotionSection>
  )
}
