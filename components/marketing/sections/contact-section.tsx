import { MotionSection } from "@/components/marketing/motion-section"
import { SectionBackdrop } from "@/components/marketing/section-backdrop"
import { ContactForm } from "@/components/marketing/contact-form"
import { contact, sectionBackdropImages } from "@/lib/site-content"

export function ContactSection() {
  return (
    <MotionSection
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#f7f4ee] py-20 dark:bg-ng-black sm:py-28"
    >
      <SectionBackdrop src={sectionBackdropImages.contact} tone="dark" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ng-black dark:text-ng-cream sm:text-4xl lg:tracking-[-0.02em]">
            Start a conversation
          </h2>
          <p className="mt-4 text-base text-ng-black/65 dark:text-ng-concrete">
            Share your project scope and our team will follow up with next steps.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="border border-ng-concrete/25 border-t-2 border-t-ng-gold bg-ng-white/85 p-8 shadow-sm dark:bg-ng-charcoal/80 dark:shadow-none">
              <h3 className="text-lg font-bold text-ng-black dark:text-ng-cream">{contact.companyLegal}</h3>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${contact.email}`} className="text-ng-black/80 hover:text-ng-red dark:text-ng-cream">
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-ng-black/80 hover:text-ng-red dark:text-ng-cream">
                      {contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.1em] text-ng-gold">Address</dt>
                  <dd className="mt-1 text-ng-black/75 dark:text-ng-cream/90">{contact.address}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
