"use client"

import * as React from "react"
import Link from "next/link"
import { List, X } from "@phosphor-icons/react"
import { Dialog } from "radix-ui"

import { Button } from "@/components/ui/button"
import { COMPANY_NAME_SHORT, navLinks } from "@/lib/site-content"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 bg-ng-surface/90 backdrop-blur-md supports-backdrop-filter:bg-ng-surface/80"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="font-heading text-sm font-bold tracking-tight text-ng-cream sm:text-base"
        >
          {COMPANY_NAME_SHORT}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ng-cream/85 transition-colors hover:text-ng-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-ng-cream hover:bg-white/10"
                aria-label="Open menu"
              >
                <List className="size-6" weight="bold" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <Dialog.Content
                className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l border-white/10 bg-ng-charcoal p-6 shadow-2xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-200"
              >
                <Dialog.Description className="sr-only">
                  Main site sections and contact.
                </Dialog.Description>
                <div className="mb-8 flex items-center justify-between">
                  <Dialog.Title className="text-lg font-bold text-ng-cream">Menu</Dialog.Title>
                  <Dialog.Close asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      className="text-ng-cream hover:bg-white/10"
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
                        className="px-3 py-3 text-base font-medium text-ng-cream/90 transition-colors hover:bg-ng-red/10 hover:text-ng-red"
                      >
                        {link.label}
                      </Link>
                    </Dialog.Close>
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        <div className="hidden md:block">
          <Button asChild variant="heroPrimary" size="sm" className="h-9 px-4 font-semibold">
            <Link href="#contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
