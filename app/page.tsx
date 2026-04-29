import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"
import { AboutSection } from "@/components/marketing/sections/about-section"
import { ContactSection } from "@/components/marketing/sections/contact-section"
import { HeroSection } from "@/components/marketing/sections/hero-section"
import { ServicesSection } from "@/components/marketing/sections/services-section"
import { VisionMissionValuesSection } from "@/components/marketing/sections/vision-mission-values-section"
import { WhyChooseUsSection } from "@/components/marketing/sections/why-choose-us-section"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <VisionMissionValuesSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
