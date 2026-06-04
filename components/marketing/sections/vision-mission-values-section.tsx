import {
  MotionSection,
  Reveal,
  StaggerItem,
  StaggerList,
} from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { SectionIntro } from "@/components/marketing/section-intro"
import { sectionBackdropImages, visionMission } from "@/lib/site-content"

export function VisionMissionValuesSection() {
  return (
    <MotionSection
      id="vision"
      className="relative scroll-mt-24 overflow-hidden border-y border-ng-concrete/15 bg-[#f7f4ee] py-20 sm:py-28 dark:border-white/5 dark:bg-ng-black"
    >
      <SectionBackdrop
        src={sectionBackdropImages.vision}
        tone="dark"
        imageClassName="opacity-[0.18] saturate-[0.62] sm:opacity-[0.24]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal direction="right" className="lg:col-span-4">
            <SectionIntro
              eyebrow="Purpose"
              title="Vision, mission & values"
              description="How we approach construction, real estate, and supply for every client."
            />
          </Reveal>

          <div className="lg:col-span-8">
            <div className="grid overflow-hidden border border-ng-concrete/25 bg-ng-white/80 dark:border-white/10 dark:bg-ng-charcoal/55">
              <Reveal
                direction="left"
                className="grid gap-6 border-b border-ng-concrete/20 p-7 sm:grid-cols-[5rem_1fr] sm:p-9 dark:border-white/10"
              >
                <div>
                  <p className="font-heading text-3xl font-bold text-ng-black/35 dark:text-ng-gold">
                    01
                  </p>
                  <h3 className="mt-2 text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
                    {visionMission.vision.title}
                  </h3>
                </div>
                <p className="max-w-prose text-base leading-7 text-ng-black/76 sm:text-lg dark:text-ng-cream/90">
                  {visionMission.vision.text}
                </p>
              </Reveal>

              <Reveal
                direction="left"
                delay={0.08}
                className="grid gap-6 p-7 sm:grid-cols-[5rem_1fr] sm:p-9"
              >
                <div>
                  <p className="font-heading text-3xl font-bold text-ng-black/35 dark:text-ng-gold">
                    02
                  </p>
                  <h3 className="mt-2 text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
                    {visionMission.mission.title}
                  </h3>
                </div>
                <p className="max-w-prose text-base leading-7 text-ng-black/76 sm:text-lg dark:text-ng-cream/90">
                  {visionMission.mission.text}
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal direction="up" delay={0.08} className="mt-14">
          <div className="border-t border-ng-concrete/25 pt-8 dark:border-white/10">
            <p className="text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
              {visionMission.valuesTitle}
            </p>
            <h3 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-ng-black dark:text-ng-cream">
              Standards on every engagement
            </h3>
          </div>

          <StaggerList className="mt-8 grid gap-px border border-ng-concrete/25 bg-ng-concrete/25 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10 dark:bg-white/10">
            {visionMission.values.map((value) => (
              <StaggerItem
                key={value.title}
                className="min-h-48 bg-ng-white/90 p-6 dark:bg-ng-charcoal/90"
              >
                <p className="text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
                  {value.title}
                </p>
                <p className="mt-4 max-w-prose text-sm leading-6 text-ng-black/62 dark:text-ng-concrete">
                  {value.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerList>
        </Reveal>
      </div>
    </MotionSection>
  )
}
