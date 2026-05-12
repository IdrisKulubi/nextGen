/** Central copy and assets for the marketing site. */

/**
 * Hero image from `public/images/`. Set `NEXT_PUBLIC_HERO_IMAGE` to override (path like `/images/hero.png` or a remote URL in `next.config.mjs` `images.remotePatterns`).
 */
export const HERO_IMAGE_PATH =
  process.env.NEXT_PUBLIC_HERO_IMAGE?.trim() || "/image3.webp"

/** Faint full-bleed backgrounds for sections; assets live under `public/images/`. */
export const sectionBackdropImages = {
  about: "/images/image2.png",
  services: "/images/image3.png",
  vision: "/images/image4.png",
  whyChooseUs: "/images/image5.png",
  future: "/images/image6.png",
  contact: "/images/image1.png",
} as const

export const COMPANY_NAME = "NextGen Apex Global Masters Ltd"
export const COMPANY_NAME_SHORT = "NextGen Apex"

export const hero = {
  headline: "Building the Future with Precision, Integrity & Innovation",
  headlineLineWhite: "Building the Future",
  headlineLinesRed: ["with Precision,", "Integrity & Innovation"] as const,
  subtext:
    "Nextgen Apex Global Masters Limited is a premier diversified enterprise dedicated to shaping the built environment through a seamless integration of construction, real estate, and logistics.",
  ctaPrimary: "Request a Quote",
  ctaSecondary: "Explore Services",
} as const

export const about = {
  title: "About Us",
  lead: "At Nextgen Apex Global Masters Limited, our operations are built on three primary pillars.",
  body: "Nextgen Apex Global Masters Limited is a premier diversified enterprise dedicated to shaping the built environment through a seamless integration of construction, real estate, and logistics. By bridging the gap between visionary architectural design and robust supply chain management, we provide a 360-degree solution for infrastructure and property development. Our commitment to innovation and integrity ensures every project delivers lasting value to our communities.",
  focusTitle: "Our Core Focus",
  focusIntro:
    "At Nextgen Apex Global Masters Limited, our operations are built on three primary pillars. We provide a vertically integrated approach, meaning we don't just design and build; we also control the supply chain and manage the final assets to ensure quality at every stage.",
  focus: [
    {
      title: "Building & Construction",
      description:
        "We transform blueprints into reality, executing residential, commercial, and institutional projects with technical precision.",
    },
    {
      title: "Real Estate Services",
      description:
        "Acting as professional realtors and developers, we bridge the gap between property and owners.",
    },
    {
      title: "Supply & Logistics",
      description:
        "We operate a robust distribution network and a dedicated hardware and electrical outlet, ensuring that high-quality construction materials and tools are delivered on time to keep projects moving forward.",
    },
  ],
} as const

export const servicesIntro = {
  title: "Integrated Ecosystems",
  text: "To maximize the value and functionality of our real estate developments, NEXTGEN integrates a wide array of specialized services that operate within and around our properties.",
} as const

export const services = [
  {
    title: "Building & Construction",
    description:
      "We specialize in the precision execution of residential, commercial, and institutional projects. Our construction philosophy centers on structural integrity and longevity. By utilizing modern techniques and superior materials, we ensure that every structure; from private homes to large-scale complexes, is built to meet the highest safety standards while reflecting the unique functional requirements of our diverse clientele.",
  },
  {
    title: "Real Estate (Realtors)",
    description:
      "As professional realtors and developers, we provide comprehensive property management, sales, and development services. We bridge the gap between visionary investments and tangible ownership. Our team offers expert market guidance and tailored solutions, ensuring that whether you are buying, selling, or leasing, your real estate assets are managed efficiently to maximize value and provide long-term financial security.",
  },
  {
    title: "Architectural Design",
    description:
      "We believe that great architecture is the perfect blend of creativity and practicality. Our design team creates functional and aesthetic blueprints inspired by modern concepts and diverse ideas. By focusing on spatial efficiency and visual appeal, we ensure that every project is not only beautiful but also highly usable, transforming your vision into a viable, sophisticated, and sustainable reality.",
  },
  {
    title: "Project Management",
    description:
      "Our project management services offer end-to-end oversight to guarantee that every phase of development remains on track. We meticulously manage budgets, timelines, and quality standards to eliminate inefficiencies. By maintaining strict compliance and clear communication, we provide clients with peace of mind, ensuring projects are delivered exactly as promised, without the usual stress or hidden costs of construction.",
  },
  {
    title: "Logistics & Next-Generation Mobility",
    description:
      "Efficiency is the heartbeat of our operations. We offer streamlined delivery of high-quality construction materials and hardware directly to your site. By integrating our logistics network with our technical teams, we eliminate procurement delays. This synchronized approach ensures projects have the necessary resources exactly when needed, maintaining momentum and keeping development cycles moving toward a timely, successful completion.",
  },
  {
    title: "Hardware & Electrical Store",
    description:
      "We operate a dedicated retail outlet providing professional-grade tools, hardware, and electrical equipment. This allows us to source and supply only the most reliable products for our clients and our own projects. By maintaining an extensive inventory of industry-standard components, we serve as a one-stop shop that guarantees quality, performance, and accessibility for all construction and maintenance needs.",
  },
] as const

export const visionMission = {
  vision: {
    title: "Our Vision",
    text: "To be a leading force in construction and real estate development, recognized for creativity, accountability, and excellence in service delivery.",
  },
  mission: {
    title: "Our Mission",
    text: "To provide innovative, reliable, and sustainable infrastructure solutions that enhance communities and empower clients through quality construction, real estate services, and efficient supply chain management.",
  },
  valuesTitle: "Core Values",
  values: [
    {
      title: "Integrity",
      description:
        "We prioritize radical transparency and accountability in all operations. In an industry built on trust, our honest communication and project reporting ensure we always do the right thing for every client involved.",
    },
    {
      title: "Innovation",
      description:
        "We reject stagnation by embracing modern architectural concepts and diverse ideas. By integrating the latest technologies in construction and logistics, we deliver creative projects that push boundaries and keep our clients ahead.",
    },
    {
      title: "Quality",
      description:
        "Excellence is our baseline standard. From our high-grade electrical supplies to the structural integrity of our commercial builds, we ensure lasting durability by aiming to set new industry benchmarks with every project.",
    },
    {
      title: "Reliability",
      description:
        "Because time is money, we have built a reputation on consistent performance and timely delivery. When we commit to a schedule, we mobilize all resources to ensure that every promise is kept.",
    },
  ],
} as const

export const future = {
  eyebrow: "Looking to the Future",
  title: "Looking to the Future",
  text: "Nextgen Apex Global Masters Limited is more than a contractor; we are a forward-thinking partner in progress. With a focus on quality, innovation, and community impact, we continue to redefine the landscape of infrastructure and property development with unwavering excellence.",
} as const

export const whyChooseUs = {
  intro:
    "Choosing NEXTGEN means partnering with a team that understands the full lifecycle of a project. We don't just build structures; we architect solutions. By combining high-level technical expertise with a robust, internal supply chain, we eliminate the friction typically found in construction and real estate; delivering a seamless, stress-free experience from the first sketch to the final brick.",
  items: [
    {
      title: 'The "Full-Circle" Advantage',
      description:
        "NEXTGEN eliminates the communication gaps and budget leaks common when multiple firms are involved. We are vertically integrated, managing architectural design, material supply, and construction under one roof. This offers a level of coordination and cost-efficiency that traditional models simply cannot match.",
    },
    {
      title: "Innovation-Driven Design",
      description:
        "We believe functionality should never come at the expense of aesthetics. Our technical team uses modern architectural concepts to push creative boundaries. Whether designing a residential development or commercial hub, we ensure your investment remains future-proof, relevant, and valuable for decades.",
    },
    {
      title: "Unmatched Resource Reliability",
      description:
        "We solve common project delays caused by supply chain failures. By operating our own Hardware & Electrical outlets and a dedicated logistics arm, we have a fortified supply chain. This means tools, materials, and manpower are always ready, guaranteeing timely delivery without compromising quality.",
    },
  ],
} as const

export const contact = {
  companyLegal: "NEXTGEN APEX GLOBAL MASTERS",
  email: "INFO.NEXTGENAPEX254@GMAIL.COM",
  phone: "+254720856826",
  whatsapp: "+254720856826",
  address: "P.O BOX 304, 10205 - MARAGUA",
  formCta: "Talk to NextGen Today",
} as const

export const contactLinks = {
  email: `mailto:${contact.email}?subject=${encodeURIComponent("Quote request - NextGen Apex Global Masters")}`,
  whatsapp: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello NextGen Apex Global Masters, I would like to request a quote.")}`,
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
  { href: "#future", label: "Future" },
  { href: "#contact", label: "Contact" },
] as const

export const footer = {
  blurb:
    "Nextgen Apex Global Masters Limited is more than a contractor; we are a forward-thinking partner in progress.",
  copyrightYear: 2026,
} as const
