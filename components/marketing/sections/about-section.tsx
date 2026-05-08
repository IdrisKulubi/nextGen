import {
  MotionSection,
  Reveal,
  StaggerItem,
  StaggerList,
} from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
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
          {/* Left: label + headline unified with vertical rule */}
          <Reveal
            direction="right"
            className="flex gap-5 sm:gap-6 lg:col-span-5 lg:flex-col lg:justify-center"
          >
            <div
              className="w-1 shrink-0 self-stretch bg-linear-to-b from-ng-gold via-ng-gold to-ng-gold/25 sm:w-1.5"
              aria-hidden
            />
            <div className="min-w-0 flex-1 space-y-5">
              <div className="space-y-3">
                <p className="text-xs font-bold tracking-[0.14em] text-ng-gold uppercase">
                  About us
                </p>
                <div
                  className="h-px w-14 bg-linear-to-r from-ng-gold/70 to-transparent"
                  aria-hidden
                />
              </div>
              <h2 className="text-3xl leading-[1.12] font-bold tracking-tight text-balance text-ng-black sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1] xl:text-5xl xl:tracking-[-0.02em] dark:text-ng-cream">
                {about.title}
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-ng-black/60 dark:text-ng-cream/55">
                {about.lead}
              </p>
            </div>
          </Reveal>

          {/* Right: framed panel */}
          <Reveal
            direction="left"
            delay={0.12}
            className={cn(
              "group relative lg:col-span-7",
              "border border-l-4 border-ng-concrete/25 border-l-ng-gold bg-ng-white/82 backdrop-blur-sm dark:border-white/10 dark:bg-ng-charcoal/75",
              "shadow-[0_24px_48px_-24px_rgba(15,15,15,0.22)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.65)]",
              "transition-all duration-300 ease-out",
              "hover:border-ng-concrete/35 hover:shadow-[0_28px_56px_-20px_rgba(15,15,15,0.26)] dark:hover:border-white/15 dark:hover:shadow-[0_28px_56px_-20px_rgba(0,0,0,0.75)]",
              "hover:-translate-y-0.5"
            )}
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-ng-gold from-0% via-ng-gold/90 to-transparent to-55%"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute top-0 right-0 h-16 w-16 border-t border-r border-ng-gold/15 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />

            <div className="relative space-y-8 p-8 sm:p-9 lg:p-10">
              <p className="text-base leading-[1.75] text-ng-black/78 sm:text-lg sm:leading-relaxed dark:text-ng-cream/88">
                {about.body}
              </p>

              <div className="space-y-4 border-t border-ng-concrete/20 pt-8 dark:border-white/10">
                <p className="text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
                  {about.focusTitle}
                </p>
                <StaggerList className="grid gap-2.5 sm:gap-3" role="list">
                  {about.focus.map((item) => (
                    <StaggerItem key={item}>
                      <div
                        className={cn(
                          "flex items-center gap-3 border border-ng-concrete/18 bg-[#f5f3ef]/65 px-4 py-3.5 dark:border-white/6 dark:bg-ng-black/35",
                          "transition-colors duration-200",
                          "hover:border-ng-gold/40 hover:bg-ng-gold/8"
                        )}
                      >
                        <span
                          className="size-2 shrink-0 bg-ng-gold shadow-[0_0_0_1px_rgba(184,176,138,0.35)]"
                          aria-hidden
                        />
                        <span className="text-sm font-medium text-ng-black/85 sm:text-base dark:text-ng-cream/95">
                          {item}
                        </span>
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
