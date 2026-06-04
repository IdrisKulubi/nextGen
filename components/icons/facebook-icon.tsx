import { cn } from "@/lib/utils"

/** Server-safe Facebook mark (Phosphor `@phosphor-icons/react` requires a client boundary). */
export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-5 shrink-0", className)}
      aria-hidden
    >
      <path d="M256 128C256 57.308 198.692 0 128 0 57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8 14.034 0 28.675 2.5 28.675 2.5v31.546h-16.14c-15.93 0-20.86 9.89-20.86 20V128h35.437l-5.68 37H168.5v89.445C230.192 244.843 256 191.888 256 128Z" />
    </svg>
  )
}
