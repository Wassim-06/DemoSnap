// app/page.tsx

import HeroSection from "@/components/landing/hero-section"
import ProblemSolutionSection from "@/components/landing/problem-solution-section"
import HowItWorksSection from "@/components/landing/how-it-works-section"
import FeaturesSection from "@/components/landing/features-section"
import PricingSection from "@/components/landing/pricing-section"
import CtaSection from "@/components/landing/cta-section"
import Footer from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-800">
      <main className="flex-grow">
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
