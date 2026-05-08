import Link from "next/link"

import {
  COMPANY_NAME,
  contact,
  footer,
  navLinks,
  services,
} from "@/lib/site-content"

export function SiteFooter() {
  return (
    <footer className="border-t border-ng-concrete/20 bg-[#f5f3ef] py-16 text-ng-black/80 dark:border-white/10 dark:bg-ng-black dark:text-ng-cream/90">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <p className="font-heading text-lg font-bold tracking-tight text-ng-black dark:text-ng-cream">
            {COMPANY_NAME}
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-ng-black/65 dark:text-ng-concrete">
            {footer.blurb}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-wider text-ng-gold uppercase">
            Quick links
          </p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-ng-black/70 transition-colors hover:text-ng-gold dark:text-ng-cream/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-wider text-ng-gold uppercase">
            Services
          </p>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.title}>
                <Link
                  href="#services"
                  className="text-ng-black/70 transition-colors hover:text-ng-gold dark:text-ng-cream/80"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-wider text-ng-gold uppercase">
            Contact
          </p>
          <address className="text-sm leading-relaxed text-ng-black/70 not-italic dark:text-ng-cream/80">
            <p className="font-medium text-ng-black dark:text-ng-cream">
              {contact.companyLegal}
            </p>
            <p className="mt-2">
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-ng-gold"
              >
                {contact.email}
              </a>
            </p>
            <p className="mt-1">
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="hover:text-ng-gold"
              >
                {contact.phone}
              </a>
            </p>
            <p className="mt-1 text-ng-black/60 dark:text-ng-concrete">
              {contact.address}
            </p>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-ng-concrete/20 px-4 pt-8 text-center text-xs text-ng-black/55 lg:px-8 dark:border-white/10 dark:text-ng-concrete">
        © {footer.copyrightYear} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  )
}
