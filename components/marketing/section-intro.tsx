import { cn } from "@/lib/utils"

type SectionIntroProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
  titleClassName?: string
}

/** Shared section header: eyebrow + rule + title (no side-tab accents). */
export function SectionIntro({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
}: SectionIntroProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <p className="text-xs font-bold tracking-[0.12em] text-ng-gold uppercase">
        {eyebrow}
      </p>
      <div className="h-px w-12 bg-ng-gold/70" aria-hidden />
      <h2
        className={cn(
          "text-3xl leading-tight font-bold tracking-tight text-ng-black sm:text-4xl dark:text-ng-cream",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-md text-sm leading-7 text-ng-black/65 sm:text-base dark:text-ng-concrete">
          {description}
        </p>
      ) : null}
    </div>
  )
}
