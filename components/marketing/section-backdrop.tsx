"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

export type SectionBackdropTone = "dark" | "warm" | "charcoal"

const toneOverlay: Record<SectionBackdropTone, string> = {
  dark: "bg-ng-black/86",
  warm: "bg-[#f5f3ef]/88",
  charcoal: "bg-ng-charcoal/85",
}

/**
 * Low-contrast photographic layer behind section content. Keeps copy readable via a solid tint.
 */
export function SectionBackdrop({
  src,
  tone,
  imageClassName,
}: {
  src: string
  tone: SectionBackdropTone
  imageClassName?: string
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className={cn(
          "object-cover opacity-[0.2] saturate-[0.75] sm:opacity-[0.24]",
          imageClassName
        )}
      />
      <div className={cn("absolute inset-0", toneOverlay[tone])} />
    </div>
  )
}
