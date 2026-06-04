"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

type RevealDirection = "up" | "down" | "left" | "right" | "none"

const easeOut = [0.16, 1, 0.3, 1] as const

const motionProps = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8% 0px" },
  transition: { duration: 0.45, ease: easeOut },
} satisfies Pick<
  HTMLMotionProps<"section">,
  "initial" | "whileInView" | "viewport" | "transition"
>

const directionOffset: Record<RevealDirection, { x?: number; y?: number }> = {
  up: { y: 14 },
  down: { y: -12 },
  left: { x: 18 },
  right: { x: -18 },
  none: {},
}

const revealVariants = {
  hidden: ({ direction }: { direction: RevealDirection }) => ({
    opacity: 0,
    ...directionOffset[direction],
  }),
  visible: ({ delay = 0 }: { delay?: number }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.42, delay, ease: easeOut },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: easeOut },
  },
}

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

export function Reveal({
  className,
  children,
  direction = "up",
  delay = 0,
  ...rest
}: HTMLMotionProps<"div"> & {
  direction?: RevealDirection
  delay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-6% 0px" }}
      variants={revealVariants}
      custom={{ direction, delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({
  className,
  children,
  ...rest
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "-6% 0px" }}
      variants={staggerContainer}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function StaggerList({
  className,
  children,
  ...rest
}: HTMLMotionProps<"ul">) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "-6% 0px" }}
      variants={staggerContainer}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.ul>
  )
}

export function StaggerItem({
  className,
  children,
  ...rest
}: HTMLMotionProps<"li">) {
  return (
    <motion.li variants={staggerItem} className={cn(className)} {...rest}>
      {children}
    </motion.li>
  )
}

export function StaggerBlock({
  className,
  children,
  ...rest
}: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={staggerItem} className={cn(className)} {...rest}>
      {children}
    </motion.div>
  )
}
