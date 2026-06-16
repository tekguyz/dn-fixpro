'use client';

import { ArrowRight, PhoneCall, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#estimate-form');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[calc(100dvh-4rem)] md:min-h-[calc(100vh-5rem)] flex flex-col justify-between bg-honeycomb border-b border-white/5">
      {/* Honeycomb Radial overlay for premium depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-brand-bg/85 to-brand-bg select-none pointer-events-none" />

      {/* Decorative metal-mesh orange glow ring */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none select-none" />
      <div className="absolute -bottom-12 -left-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none select-none" />

      {/* Centered Main Content Area / Two-Column Grid on lg resolutions */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex-grow flex flex-col justify-center items-center w-full py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6 text-center lg:text-left items-center lg:items-start max-w-3xl mx-auto lg:mx-0 w-full">
            
            {/* Tagline / Diagnostic Offer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-full"
            >
              <Zap className="w-3.5 h-3.5 text-brand-accent animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-brand-accent font-semibold whitespace-nowrap">
                $69 Diagnostic Applied to Repair
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.1]"
              id="hero-title"
            >
              Same-Day Handyman & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-400 font-black">
                Appliance Repair
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Same-Day Appliance Repair & Handyman Services Right to Your Door. No Storefront Overhead Means Lower Prices for You! $69 Diagnostic Fee Applied 100% to Your Repair.
            </motion.p>

            {/* Mobile-only condensed dispatch guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex lg:hidden flex-col gap-2.5 w-full text-left bg-brand-card/40 border border-white/5 p-4 rounded-xl mt-2"
            >
              <div className="flex gap-2.5 items-center text-xs text-brand-muted">
                <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" />
                <span><strong className="text-white">No Storefront Overhead:</strong> Save 20-30% on labor costs.</span>
              </div>
              <div className="flex gap-2.5 items-center text-xs text-brand-muted">
                <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" />
                <span><strong className="text-white">Fully Stocked Vans:</strong> Common parts on-board for same-day repairs.</span>
              </div>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full sm:w-auto pt-1.5"
            >
              {/* Request Dispatch Button */}
              <button
                onClick={scrollToForm}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-accent text-brand-bg font-extrabold rounded-lg text-sm sm:text-base transition-all hover:bg-brand-accent/90 shadow-xl shadow-brand-accent/20 border border-brand-accent/10 cursor-pointer min-h-[44px] touch-manipulation w-full sm:w-auto shrink-0"
                id="btn-scroll-form"
              >
                <span>Request Same-Day Service</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              {/* Direct Call Button */}
              <a
                href="tel:+17818858584"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 text-white font-bold rounded-lg text-sm sm:text-base transition-all hover:bg-white/10 hover:text-brand-accent border border-white/10 min-h-[44px] touch-manipulation w-full sm:w-auto shrink-0"
                id="btn-call-hero"
              >
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Call Dispatch Directly</span>
              </a>
            </motion.div>
          </div>

          {/* Graphical Trust Widget Column — Hidden on Mobile for Conversion Optimization, Shown on lg */}
          <div className="hidden lg:col-span-5 lg:flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-sm sm:max-w-md bg-brand-card/90 border border-white/10 rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden group"
            >
              {/* Diagonal glow sheet representing pristine metal */}
              <div className="absolute -inset-y-12 -left-1/2 w-12 bg-white/5 -skew-x-12 group-hover:translate-x-[600px] transition-transform duration-1000 ease-out pointer-events-none" />

              {/* Floating diagnostic highlight */}
              <div className="absolute top-0 right-0 bg-brand-accent text-brand-bg px-4 py-1.5 rounded-bl-xl text-xs font-mono font-extrabold uppercase tracking-wide">
                100% applied back
              </div>

              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    Our Dispatch Guarantee
                  </h3>
                  <p className="text-xs text-brand-muted mt-1">
                    Direct-to-Your-Door Pro Mobility Fleet
                  </p>
                </div>

                {/* Grid checklist */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex gap-3 items-start">
                    <div className="p-1 bg-brand-accent/20 rounded text-brand-accent shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">No Public Storefront Surcharge</p>
                      <p className="text-xs font-medium text-brand-muted">You save 20-30% on labor costs because we operate completely mobile dispatch.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="p-1 bg-brand-accent/20 rounded text-brand-accent shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Full-Stack Mobile Fleet Workshops</p>
                      <p className="text-xs font-medium text-brand-muted">Our service vans travel with common structural repair parts on-board to achieve same-day finishes.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="p-1 bg-brand-accent/20 rounded text-brand-accent shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Commercial-Grade Speed</p>
                      <p className="text-xs font-medium text-brand-muted">Rapid response for homes, restaurants, grocery outlets, and offices.</p>
                    </div>
                  </div>
                </div>

                {/* South Florida dispatch radius list */}
                <div className="p-3 bg-brand-bg/50 border border-white/5 rounded-lg flex justify-between items-center text-xs font-mono">
                  <span className="text-brand-muted font-medium">Core Service Circle:</span>
                  <span className="text-brand-accent font-extrabold">Hollywood • Broward • Miami</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}