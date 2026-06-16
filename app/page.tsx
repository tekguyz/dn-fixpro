import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import ValueTicker from '@/components/sections/ValueTicker';
import ServiceMatrix from '@/components/sections/ServiceMatrix';
import SocialHub from '@/components/sections/SocialHub';
import EstimateForm from '@/components/sections/EstimateForm';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden selection:bg-brand-accent selection:text-brand-bg">
      {/* Sticky Top Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Value Ticker placed cleanly outside and below the initial viewport fold */}
        <ValueTicker />

        {/* Dynamic / Interactive Service Matrix and Specialties */}
        <ServiceMatrix />

        {/* High-fidelity Visual Neighborhoodproof Hub linking FB/IG */}
        <SocialHub />

        {/* React Hook Form + Zod Lead capture and Dispatch validation */}
        <EstimateForm />

        {/* Custom State Accordions for conversion-focused FAQs */}
        <FAQ />
      </main>

      {/* Structured Local Disclosures Footer */}
      <Footer />
    </div>
  );
}
