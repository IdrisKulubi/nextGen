"use client"

import * as React from "react"

const TYPE_INTERVAL_MS = 58
const REPLAY_INTERVAL_MS = 60_000

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

export function TypingHeadlinePhrase({ text }: { text: string }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [visibleText, setVisibleText] = React.useState(text)

  React.useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleText(text)
      return
    }

    const timeouts: number[] = []

    function typePhrase() {
      setVisibleText("")

      for (let i = 1; i <= text.length; i += 1) {
        const timeout = window.setTimeout(() => {
          setVisibleText(text.slice(0, i))
        }, i * TYPE_INTERVAL_MS)

        timeouts.push(timeout)
      }
    }

    typePhrase()
    const replayInterval = window.setInterval(typePhrase, REPLAY_INTERVAL_MS)

    return () => {
      window.clearInterval(replayInterval)
      timeouts.forEach((timeout) => window.clearTimeout(timeout))
    }
  }, [prefersReducedMotion, text])

  return (
    <span
      className="relative inline-grid min-h-[1em] align-baseline text-ng-gold"
      aria-label={text}
    >
      <span className="col-start-1 row-start-1 opacity-0">{text}</span>
      <span className="col-start-1 row-start-1" aria-hidden>
        {visibleText}
        <span className="ml-1 inline-block h-[0.82em] w-[0.08em] translate-y-[0.08em] animate-pulse bg-ng-gold" />
      </span>
    </span>
  )
}
