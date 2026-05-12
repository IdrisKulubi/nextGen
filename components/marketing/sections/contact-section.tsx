import { MotionSection, Reveal } from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { ContactForm } from "@/components/marketing/contact-form"
import { ContactOptionsDialog } from "@/components/marketing/contact-options-dialog"
import {
  contact,
  contactLinks,
  sectionBackdropImages,
} from "@/lib/site-content"

export function ContactSection() {
  return (
    <MotionSection
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#f7f4ee] py-20 sm:py-28 dark:bg-ng-black"
    >
      <SectionBackdrop src={sectionBackdropImages.contact} tone="dark" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.1em] text-ng-gold uppercase">
            Contact Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ng-black sm:text-4xl lg:tracking-[-0.02em] dark:text-ng-cream">
            {contact.companyLegal}
          </h2>
          <p className="mt-4 text-base text-ng-black/65 dark:text-ng-concrete">
            {contact.email} / {contact.phone}
          </p>
          <ContactOptionsDialog className="mt-7 inline-flex h-11 items-center justify-center rounded-lg border border-transparent bg-ng-red px-5 text-sm font-semibold text-ng-white transition-all hover:bg-ng-red-deep focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
            Contact Us
          </ContactOptionsDialog>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="border border-t-2 border-ng-concrete/25 border-t-ng-gold bg-ng-white/85 p-8 shadow-sm dark:bg-ng-charcoal/80 dark:shadow-none">
              <h3 className="text-lg font-bold text-ng-black dark:text-ng-cream">
                {contact.companyLegal}
              </h3>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-bold tracking-[0.1em] text-ng-gold uppercase">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-ng-black/80 hover:text-ng-gold dark:text-ng-cream"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold tracking-[0.1em] text-ng-gold uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="text-ng-black/80 hover:text-ng-gold dark:text-ng-cream"
                    >
                      {contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold tracking-[0.1em] text-ng-gold uppercase">
                    Address
                  </dt>
                  <dd className="mt-1 text-ng-black/75 dark:text-ng-cream/90">
                    {contact.address}
                  </dd>
                </div>
              </dl>
              <div className="mt-7 grid gap-3 border-t border-ng-concrete/20 pt-6 dark:border-white/10">
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-ng-concrete/25 px-4 py-3 text-sm font-semibold text-ng-black transition-colors hover:border-ng-gold/60 hover:bg-ng-gold/10 dark:border-white/10 dark:text-ng-cream"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={contactLinks.email}
                  className="border border-ng-concrete/25 px-4 py-3 text-sm font-semibold text-ng-black transition-colors hover:border-ng-gold/60 hover:bg-ng-gold/10 dark:border-white/10 dark:text-ng-cream"
                >
                  Send an Email
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.12} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </MotionSection>
  )
}
