"use client"

import * as React from "react"
import Link from "next/link"
import { List, X } from "@phosphor-icons/react"
import { Dialog } from "radix-ui"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { navLinks } from "@/lib/site-content"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-ng-concrete/20 bg-ng-white/92 backdrop-blur-md supports-backdrop-filter:bg-ng-white/82 dark:border-white/10 dark:bg-ng-surface/90 dark:supports-backdrop-filter:bg-ng-surface/80"
      )}
    >
      <div className="flex h-[4.25rem] w-full items-center justify-between gap-3 px-3 sm:h-[4.75rem] sm:gap-4 sm:px-5 lg:px-8">
        <Link
          href="#top"
          className="shrink-0 py-1 outline-offset-4 transition-opacity hover:opacity-90"
          aria-label="NextGen Apex Global Masters — home"
        >
          <Image
            src="/71e4016e-6432-4813-b462-8b203497055d.png"
            alt=""
            width={320}
            height={120}
            className="h-12 w-auto sm:h-14 md:h-[4.25rem] md:max-h-[4.25rem]"
            priority
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-4 md:flex lg:gap-6"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-ng-black/75 transition-colors hover:text-ng-gold lg:text-sm dark:text-ng-cream/85"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <ModeToggle className="text-ng-black hover:bg-ng-black/5 hover:text-ng-gold focus-visible:ring-ng-gold/40 dark:text-ng-cream dark:hover:bg-white/10 dark:hover:text-ng-cream" />
          <div className="flex items-center gap-2 md:hidden">
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-ng-black hover:bg-ng-black/5 dark:text-ng-cream dark:hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <List className="size-6" weight="bold" />
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l border-ng-concrete/25 bg-ng-white p-6 shadow-2xl duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right dark:border-white/10 dark:bg-ng-charcoal">
                  <Dialog.Description className="sr-only">
                    Main site sections and contact.
                  </Dialog.Description>
                  <div className="mb-8 flex items-center justify-between">
                    <Dialog.Title className="text-lg font-bold text-ng-black dark:text-ng-cream">
                      Menu
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        className="text-ng-black hover:bg-ng-black/5 dark:text-ng-cream dark:hover:bg-white/10"
                        aria-label="Close menu"
                      >
                        <X className="size-5" weight="bold" />
                      </Button>
                    </Dialog.Close>
                  </div>
                  <nav className="flex flex-col gap-1" aria-label="Mobile">
                    {navLinks.map((link) => (
                      <Dialog.Close asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="px-3 py-3 text-base font-medium text-ng-black/85 transition-colors hover:bg-ng-gold/10 hover:text-ng-gold dark:text-ng-cream/90"
                        >
                          {link.label}
                        </Link>
                      </Dialog.Close>
                    ))}
                  </nav>
                  <div className="mt-6 border-t border-ng-concrete/25 pt-6 dark:border-white/10">
                    <Dialog.Close asChild>
                      <Button
                        asChild
                        variant="heroPrimary"
                        className="w-full font-semibold"
                      >
                        <Link href="#contact">Request a Quote</Link>
                      </Button>
                    </Dialog.Close>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <Button
              asChild
              variant="heroPrimary"
              size="sm"
              className="h-9 shrink-0 px-2.5 text-xs font-semibold sm:px-4 sm:text-sm"
            >
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>

          <Button
            asChild
            variant="heroPrimary"
            size="sm"
            className="hidden h-9 px-4 font-semibold md:inline-flex"
          >
            <Link href="#contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
