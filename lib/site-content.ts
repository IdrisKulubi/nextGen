/** Central copy and assets for the marketing site. */

/**
 * Hero image. Prefer your asset at `public/images/hero.webp`, or set `NEXT_PUBLIC_HERO_IMAGE`
 * to any absolute URL allowed in `next.config.mjs` `images.remotePatterns`.
 */
export const HERO_IMAGE_PATH =
  process.env.NEXT_PUBLIC_HERO_IMAGE?.trim() ||
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80"

export const COMPANY_NAME = "NextGen Apex Global Masters Ltd"
export const COMPANY_NAME_SHORT = "NextGen Apex"

export const hero = {
  headline: "Building the Future with Precision, Integrity & Innovation",
  subtext:
    "NextGen Apex Global Masters Ltd delivers integrated construction, real estate, logistics, and supply solutions for modern infrastructure and property development.",
  ctaPrimary: "Request a Quote",
  ctaSecondary: "Explore Services",
} as const

export const about = {
  title: "360° Construction & Real Estate Partner",
  body: `NextGen Apex Global Masters Limited is a premier diversified enterprise dedicated to shaping the built environment through a seamless integration of construction, real estate, and logistics. By bridging the gap between visionary architectural design and robust supply chain management, we provide a 360-degree solution for infrastructure and property development.`,
  focusTitle: "Core focus",
  focus: ["Building & Construction", "Real Estate Services", "Supply & Logistics"] as const,
} as const

export const services = [
  {
    title: "Building & Construction",
    description:
      "Residential, commercial, and institutional projects delivered with technical precision and structural integrity.",
  },
  {
    title: "Real Estate Services",
    description: "Property management, sales, leasing, and development services.",
  },
  {
    title: "Architectural Design",
    description:
      "Functional and aesthetic designs inspired by modern concepts and practical client needs.",
  },
  {
    title: "Project Management",
    description:
      "End-to-end project oversight covering budgets, timelines, compliance, and quality standards.",
  },
  {
    title: "Logistics & Next-Generation Mobility",
    description: "Reliable delivery of construction materials and hardware directly to project sites.",
  },
  {
    title: "Hardware & Electrical Store",
    description:
      "Professional-grade tools, hardware, and electrical equipment for construction and maintenance needs.",
  },
] as const

export const visionMission = {
  vision: {
    title: "Vision",
    text: "To be a leading force in construction and real estate development, recognized for creativity, accountability, and excellence in service delivery.",
  },
  mission: {
    title: "Mission",
    text: "To provide innovative, reliable, and sustainable infrastructure solutions that enhance communities and empower clients through quality construction, real estate services, and efficient supply chain management.",
  },
  valuesTitle: "Core values",
  values: ["Integrity", "Innovation", "Quality", "Reliability"] as const,
} as const

export const whyChooseUs = [
  {
    title: "The Full-Circle Advantage",
    description:
      "NextGen manages architectural design, material supply, logistics, and construction under one roof.",
  },
  {
    title: "Innovation-Driven Design",
    description:
      "Modern architectural concepts that balance functionality, aesthetics, and long-term value.",
  },
  {
    title: "Unmatched Resource Reliability",
    description:
      "A strong internal supply chain supported by hardware, electrical, and logistics operations.",
  },
] as const

export const contact = {
  companyLegal: "NEXTGEN APEX GLOBAL MASTERS LTD",
  email: "info.nextgenapex254@gmail.com",
  phone: "+254720856826",
  address: "P.O BOX 304, 10205 - Maragua",
  formCta: "Talk to NextGen Today",
} as const

export const serviceInterestOptions = [
  "General inquiry",
  ...services.map((s) => s.title),
] as const

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#vision", label: "Vision" },
  { href: "#why-choose-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
] as const

export const footer = {
  blurb:
    "Integrated construction, real estate, logistics, and supply for infrastructure and property development across Kenya and beyond.",
  copyrightYear: 2026,
} as const
