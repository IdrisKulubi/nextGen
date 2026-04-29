"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { cn } from "@/lib/utils"

export type SectionBackdropTone = "dark" | "warm" | "charcoal"

const toneOverlay: Record<SectionBackdropTone, string> = {
  dark: "bg-[#f7f4ee]/90 dark:bg-ng-black/86",
  warm: "bg-[#f5f3ef]/88",
  charcoal: "bg-[#f4efe6]/88 dark:bg-ng-charcoal/85",
}

/**
 * Low-contrast photographic layer behind section content. Keeps copy readable via a solid tint.
 */
export function SectionBackdrop({
  src,
  tone,
  imageClassName,
  overlayClassName,
}: {
  src: string
  tone: SectionBackdropTone
  imageClassName?: string
  /** When set, replaces the default tone overlay (use for section-specific balance). */
  overlayClassName?: string
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
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
      </motion.div>
      <div
        className={cn(
          "absolute inset-0",
          overlayClassName ?? toneOverlay[tone]
        )}
      />
    </div>
  )
}
