import { MotionSection } from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { sectionBackdropImages, visionMission } from "@/lib/site-content"

export function VisionMissionValuesSection() {
  return (
    <MotionSection
      id="vision"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-ng-black py-20 sm:py-28"
    >
      <SectionBackdrop src={sectionBackdropImages.vision} tone="dark" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">Purpose</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ng-cream sm:text-4xl lg:tracking-[-0.02em]">
            Vision, mission & values
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="border border-ng-concrete/25 border-l-4 border-l-ng-red bg-ng-charcoal p-8 lg:p-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-ng-red">
              {visionMission.vision.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ng-cream/90 sm:text-lg">
              {visionMission.vision.text}
            </p>
          </article>
          <article className="border border-ng-concrete/25 border-l-4 border-l-ng-red bg-ng-charcoal p-8 lg:p-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-ng-red">
              {visionMission.mission.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ng-cream/90 sm:text-lg">
              {visionMission.mission.text}
            </p>
          </article>
        </div>

        <div className="mt-10">
          <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">
            {visionMission.valuesTitle}
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visionMission.values.map((value) => (
              <li
                key={value}
                className="border border-ng-concrete/25 bg-ng-charcoal/90 px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.08em] text-ng-cream"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionSection>
  )
}
