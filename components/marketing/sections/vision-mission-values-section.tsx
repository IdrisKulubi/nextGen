import {
  MotionSection,
  Reveal,
  StaggerItem,
  StaggerList,
} from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { sectionBackdropImages, visionMission } from "@/lib/site-content"

const valueDescriptions: Record<(typeof visionMission.values)[number], string> =
  {
    Integrity:
      "Clear commitments, honest reporting, and decisions clients can trust.",
    Innovation: "Modern methods shaped around practical project outcomes.",
    Quality:
      "Durable workmanship, careful coordination, and disciplined standards.",
    Reliability:
      "Consistent delivery through dependable teams and supply systems.",
  }

export function VisionMissionValuesSection() {
  return (
    <MotionSection
      id="vision"
      className="relative scroll-mt-24 overflow-hidden border-y border-ng-concrete/15 bg-[#f7f4ee] py-20 sm:py-28 dark:border-white/5 dark:bg-ng-black"
    >
      <SectionBackdrop
        src={sectionBackdropImages.vision}
        tone="dark"
        imageClassName="opacity-[0.11] saturate-[0.55] sm:opacity-[0.15]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal direction="right" className="lg:col-span-4">
            <div className="border-l-4 border-ng-gold pl-5">
              <p className="text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
                Purpose
              </p>
              <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-ng-black sm:text-4xl dark:text-ng-cream">
                Vision, mission & values
              </h2>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-ng-black/65 sm:text-base dark:text-ng-concrete">
              A practical operating framework for how NextGen plans, builds,
              supplies, and stays accountable from first conversation to final
              handover.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="grid overflow-hidden border border-ng-concrete/25 bg-ng-white/72 shadow-[0_18px_40px_-28px_rgba(15,15,15,0.35)] dark:border-white/10 dark:bg-ng-charcoal/55 dark:shadow-none">
              <Reveal
                direction="left"
                className="grid gap-6 border-b border-ng-concrete/20 p-7 sm:grid-cols-[7rem_1fr] sm:p-9 dark:border-white/10"
              >
                <div>
                  <p className="font-heading text-4xl font-bold text-ng-black/35 dark:text-ng-gold">
                    01
                  </p>
                  <h3 className="mt-3 text-xs font-bold tracking-[0.14em] text-ng-gold uppercase">
                    {visionMission.vision.title}
                  </h3>
                </div>
                <p className="text-base leading-8 text-ng-black/76 sm:text-lg dark:text-ng-cream/90">
                  {visionMission.vision.text}
                </p>
              </Reveal>

              <Reveal
                direction="left"
                delay={0.1}
                className="grid gap-6 p-7 sm:grid-cols-[7rem_1fr] sm:p-9"
              >
                <div>
                  <p className="font-heading text-4xl font-bold text-ng-black/35 dark:text-ng-gold">
                    02
                  </p>
                  <h3 className="mt-3 text-xs font-bold tracking-[0.14em] text-ng-gold uppercase">
                    {visionMission.mission.title}
                  </h3>
                </div>
                <p className="text-base leading-8 text-ng-black/76 sm:text-lg dark:text-ng-cream/90">
                  {visionMission.mission.text}
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal direction="up" delay={0.1} className="mt-14">
          <div className="flex flex-col justify-between gap-4 border-t border-ng-concrete/25 pt-7 sm:flex-row sm:items-end dark:border-white/10">
            <div>
              <p className="text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
                {visionMission.valuesTitle}
              </p>
              <h3 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-ng-black dark:text-ng-cream">
                The standards that guide every engagement
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-ng-black/55 dark:text-ng-concrete">
              Simple principles, applied consistently across design, sourcing,
              construction, and client communication.
            </p>
          </div>

          <StaggerList className="mt-8 grid border border-ng-concrete/25 bg-ng-white/60 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10 dark:bg-ng-charcoal/40">
            {visionMission.values.map((value) => (
              <StaggerItem
                key={value}
                className="min-h-40 border-b border-ng-concrete/20 p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0 dark:border-white/10"
              >
                <p className="text-xs font-bold tracking-[0.14em] text-ng-gold uppercase">
                  {value}
                </p>
                <p className="mt-5 text-sm leading-6 text-ng-black/62 dark:text-ng-concrete">
                  {valueDescriptions[value]}
                </p>
              </StaggerItem>
            ))}
          </StaggerList>
        </Reveal>
      </div>
    </MotionSection>
  )
}
