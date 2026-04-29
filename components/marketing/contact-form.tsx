"use client"

import { useActionState } from "react"

import { submitContactAction, type ContactFormState } from "@/app/actions/contact"
import { Button } from "@/components/ui/button"
import { contact, serviceInterestOptions } from "@/lib/site-content"
import { cn } from "@/lib/utils"

const initialState: ContactFormState = { ok: false }

const fieldClass =
  "w-full rounded-none border border-ng-concrete/35 bg-ng-black/50 px-4 py-3 text-sm text-ng-cream placeholder:text-ng-concrete/70 outline-none transition-colors focus-visible:border-ng-red focus-visible:ring-2 focus-visible:ring-ng-red/35"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactAction, initialState)

  if (state.ok) {
    return (
      <div
        className="border border-ng-concrete/25 border-t-2 border-t-ng-gold bg-ng-charcoal/80 p-8 text-center"
        role="status"
      >
        <p className="text-lg font-semibold text-ng-cream">{state.message}</p>
        <p className="mt-2 text-sm text-ng-concrete">We appreciate your interest in NextGen Apex.</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.message ? (
        <p className="border border-ng-red/50 bg-ng-red/10 px-4 py-3 text-sm text-ng-cream">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="fullName" className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className={cn(fieldClass, state.errors?.fullName && "border-ng-red")}
            aria-invalid={Boolean(state.errors?.fullName)}
            aria-describedby={state.errors?.fullName ? "fullName-error" : undefined}
          />
          {state.errors?.fullName ? (
            <p id="fullName-error" className="mt-1.5 text-xs text-ng-red">
              {state.errors.fullName}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={cn(fieldClass, state.errors?.phone && "border-ng-red")}
            aria-invalid={Boolean(state.errors?.phone)}
            aria-describedby={state.errors?.phone ? "phone-error" : undefined}
          />
          {state.errors?.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs text-ng-red">
              {state.errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={cn(fieldClass, state.errors?.email && "border-ng-red")}
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "email-error" : undefined}
        />
        {state.errors?.email ? (
          <p id="email-error" className="mt-1.5 text-xs text-ng-red">
            {state.errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="serviceInterest"
          className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-ng-gold"
        >
          Service interested in
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          required
          defaultValue=""
          className={cn(fieldClass, state.errors?.serviceInterest && "border-ng-red")}
          aria-invalid={Boolean(state.errors?.serviceInterest)}
          aria-describedby={state.errors?.serviceInterest ? "serviceInterest-error" : undefined}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceInterestOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-ng-charcoal text-ng-cream">
              {opt}
            </option>
          ))}
        </select>
        {state.errors?.serviceInterest ? (
          <p id="serviceInterest-error" className="mt-1.5 text-xs text-ng-red">
            {state.errors.serviceInterest}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={cn(fieldClass, "min-h-32 resize-y", state.errors?.message && "border-ng-red")}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
        />
        {state.errors?.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-ng-red">
            {state.errors.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        variant="heroPrimary"
        disabled={isPending}
        className="h-12 w-full max-w-xs font-semibold sm:w-auto"
      >
        {isPending ? "Sending…" : contact.formCta}
      </Button>
    </form>
  )
}
