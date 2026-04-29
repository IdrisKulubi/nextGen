"use server"

import { z } from "zod"

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().min(5, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  serviceInterest: z.string().trim().min(1, "Please select a service."),
  message: z.string().trim().min(10, "Please enter a message (at least 10 characters)."),
})

export type ContactFormState =
  | { ok: true; message: string }
  | { ok: false; errors?: Record<string, string>; message?: string }

export async function submitContactAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    fullName: String(formData.get("fullName") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    serviceInterest: String(formData.get("serviceInterest") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  })

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors
    const errors: Record<string, string> = {}
    for (const [key, msgs] of Object.entries(fieldErrors)) {
      if (msgs?.[0]) {
        errors[key] = msgs[0]
      }
    }
    return { ok: false, errors, message: "Please fix the highlighted fields." }
  }

  // TODO: wire Resend, Formspree, or a CRM webhook to deliver leads.
  console.info("[contact] submission", parsed.data)

  return {
    ok: true,
    message: "Thank you. Our team will respond shortly.",
  }
}
