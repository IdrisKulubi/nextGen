import { MotionSection } from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { about, sectionBackdropImages } from "@/lib/site-content"

export function AboutSection() {
  return (
    <MotionSection
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-ng-black py-20 sm:py-28"
    >
      <SectionBackdrop src={sectionBackdropImages.about} tone="dark" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">About us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ng-cream sm:text-4xl lg:text-5xl lg:tracking-[-0.02em]">
              {about.title}
            </h2>
            <div className="mt-5 h-14 w-1 bg-ng-red" aria-hidden />
          </div>
          <div className="space-y-6 border border-ng-concrete/25 border-t-2 border-t-ng-gold bg-ng-charcoal/80 p-8 lg:p-10">
            <p className="text-base leading-relaxed text-ng-cream/85 sm:text-lg">{about.body}</p>
            <div>
              <p className="text-sm font-semibold text-ng-gold">{about.focusTitle}</p>
              <ul className="mt-3 space-y-2 text-ng-cream/90">
                {about.focus.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm sm:text-base">
                    <span className="size-1.5 shrink-0 bg-ng-red" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
