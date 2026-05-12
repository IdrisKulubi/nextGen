"use client"

import * as React from "react"
import { ChatCircleText, EnvelopeSimple, X } from "@phosphor-icons/react"
import { Dialog } from "radix-ui"

import { Button } from "@/components/ui/button"
import { contact, contactLinks } from "@/lib/site-content"
import { cn } from "@/lib/utils"

interface ContactOptionsDialogProps {
  children: React.ReactNode
  className?: string
  triggerClassName?: string
}

export function ContactOptionsDialog({
  children,
  className,
  triggerClassName,
}: ContactOptionsDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            "font-inherit appearance-none border-0 bg-transparent p-0",
            className,
            triggerClassName
          )}
        >
          {children}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-[71] w-[min(calc(100%-2rem),30rem)] -translate-x-1/2 -translate-y-1/2 border border-ng-concrete/25 bg-ng-white p-6 shadow-2xl outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 dark:border-white/10 dark:bg-ng-charcoal">
          <div className="flex items-start justify-between gap-5">
            <div>
              <Dialog.Title className="text-xl font-bold text-ng-black dark:text-ng-cream">
                Contact NextGen
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm leading-6 text-ng-black/62 dark:text-ng-concrete">
                Choose how you would like to request a quote or start a
                conversation.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="text-ng-black/70 hover:bg-ng-black/5 dark:text-ng-cream dark:hover:bg-white/10"
                aria-label="Close contact options"
              >
                <X className="size-5" weight="bold" />
              </Button>
            </Dialog.Close>
          </div>

          <div className="mt-7 grid gap-3">
            <Dialog.Close asChild>
              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 border border-ng-concrete/25 bg-[#f8f6f1] p-4 text-left transition-colors hover:border-ng-gold/70 hover:bg-ng-gold/10 dark:border-white/10 dark:bg-ng-black/25 dark:hover:bg-ng-gold/10"
              >
                <span className="flex size-11 shrink-0 items-center justify-center border border-ng-gold/40 text-ng-gold">
                  <ChatCircleText className="size-6" weight="duotone" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ng-black dark:text-ng-cream">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm text-ng-black/60 dark:text-ng-concrete">
                    Open WhatsApp directly at {contact.whatsapp}
                  </span>
                </span>
              </a>
            </Dialog.Close>

            <Dialog.Close asChild>
              <a
                href={contactLinks.email}
                className="group flex items-center gap-4 border border-ng-concrete/25 bg-[#f8f6f1] p-4 text-left transition-colors hover:border-ng-gold/70 hover:bg-ng-gold/10 dark:border-white/10 dark:bg-ng-black/25 dark:hover:bg-ng-gold/10"
              >
                <span className="flex size-11 shrink-0 items-center justify-center border border-ng-gold/40 text-ng-gold">
                  <EnvelopeSimple className="size-6" weight="duotone" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ng-black dark:text-ng-cream">
                    Email
                  </span>
                  <span className="mt-1 block text-sm text-ng-black/60 dark:text-ng-concrete">
                    Send an email to {contact.email}
                  </span>
                </span>
              </a>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
