"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

const motionProps = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12% 0px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
} satisfies Pick<
  HTMLMotionProps<"section">,
  "initial" | "whileInView" | "viewport" | "transition"
>

export function MotionSection({
  className,
  children,
  ...rest
}: HTMLMotionProps<"section">) {
  return (
    <motion.section {...motionProps} {...rest} className={cn(className)}>
      {children}
    </motion.section>
  )
}
