import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesSection } from '@/components/sections/services-section'
import { FacilitiesSection } from '@/components/sections/FacilitiesSection' // السكشن الجديد بالصور
import { GlobalPresenceSection } from '@/components/sections/global-presence-section'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section'
import { StatisticsSection } from '@/components/sections/statistics-section'
import { ProcessSection } from '@/components/sections/process-section'
import { IndustriesSection } from '@/components/sections/industries-section'
import { FAQSection } from '@/components/sections/faq-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FacilitiesSection />
      <GlobalPresenceSection />
      <WhyChooseUsSection />
      <StatisticsSection />
      <ProcessSection />
      <IndustriesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}