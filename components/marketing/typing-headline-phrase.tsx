"use client"

import * as React from "react"

const TYPE_INTERVAL_MS = 42

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    function onChange() {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    onChange()
    mediaQuery.addEventListener("change", onChange)

    return () => {
      mediaQuery.removeEventListener("change", onChange)
    }
  }, [])

  return prefersReducedMotion
}

/** Types once on first paint; no replay loop. */
export function TypingHeadlinePhrase({ text }: { text: string }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [visibleText, setVisibleText] = React.useState(text)

  React.useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleText(text)
      return
    }

    const timeouts: number[] = []

    setVisibleText("")
    for (let i = 1; i <= text.length; i += 1) {
      const timeout = window.setTimeout(() => {
        setVisibleText(text.slice(0, i))
      }, i * TYPE_INTERVAL_MS)
      timeouts.push(timeout)
    }

    return () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout))
    }
  }, [prefersReducedMotion, text])

  return (
    <span
      className="text-ng-gold"
      aria-label={text}
    >
      {visibleText || text}
    </span>
  )
}
