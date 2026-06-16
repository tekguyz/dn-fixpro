'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wrench, 
  Settings, 
  Flame, 
  Droplet, 
  Utensils, 
  Layers, 
  LayoutGrid, 
  CheckCircle,
  Hammer,
  DoorOpen,
  ArrowUpRight
} from 'lucide-react';

type ServiceItem = {
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  highlights: string[];
  ctaUrl: string;
};

export default function ServiceMatrix() {
  const [activeTab, setActiveTab] = useState<'all' | 'appliance' | 'handyman'>('all');

  const applianceServices: ServiceItem[] = [
    {
      icon: Flame,
      title: 'Dryer & Laundry Maintenance',
      shortDesc: 'Dryer Not Heating or Broken Belt? We deep-clean internal systems and replace belts fast to eliminate fire hazards and restore high heat instantly.',
      highlights: ['Belt & motor replacement', 'Thermostat & thermocouple checks', 'Exhaust line lint cleanouts'],
      ctaUrl: '#estimate-form'
    },
    {
      icon: Utensils,
      title: 'Commercial Kitchen & Dishwashers',
      shortDesc: 'Fixing broken restaurant dishwashers, faulty water sensors, and restaurant kitchen hardware on-site. Fast mobile dispatch to keep your kitchen open and code-compliant.',
      highlights: ['Water flow & sensor diagnostics', 'Electrical contact arrays', 'Sump pump & valve servicing'],
      ctaUrl: '#estimate-form'
    },
    {
      icon: Settings,
      title: 'Residential Kitchen Diagnostic',
      shortDesc: 'Same-day diagnostics for household refrigerators, ovens, cooktops, and garbage disposals. We pinpoint failure codes and replace custom components on-site.',
      highlights: ['Error code troubleshooting', 'Compressor & fan repair', 'Gasket & seal replacements'],
      ctaUrl: '#estimate-form'
    }
  ];

  const handymanServices: ServiceItem[] = [
    {
      icon: Layers,
      title: 'General Property Upgrades',
      shortDesc: 'Complete bathroom remodeling, structural home repairs, and local honey-do list items handled by seasoned on-site pros.',
      highlights: ['Bathroom repairs & updates', 'Drywall taping & matching texture', 'Structural spatial mounts'],
      ctaUrl: '#estimate-form'
    },
    {
      icon: DoorOpen,
      title: 'Doors, Trim & Lock Operations',
      shortDesc: 'Resolving offset doors that scrape floors, loose door hinges, trim replacements, custom heavy hardware fittings, and digital locks installation for smart homes.',
      highlights: ['Door alignment & adjustments', 'Smart lock & hardware deployment', 'Sash and casing repairs'],
      ctaUrl: '#estimate-form'
    },
    {
      icon: Hammer,
      title: 'Framing, Mounting & Repairs',
      shortDesc: 'Heavy stud mounting for industrial screens, whiteboard brackets, customized wall shelving, accent wall wood styling, ceiling fans, and other precise fixtures.',
      highlights: ['Heavy equipment wall mounts', 'Accent wall construction', 'Ceiling fixture installation'],
      ctaUrl: '#estimate-form'
    }
  ];

  const filteredServices = 
    activeTab === 'all' 
      ? [...applianceServices, ...handymanServices]
      : activeTab === 'appliance' 
        ? applianceServices 
        : handymanServices;

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#estimate-form');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-10 md:py-20 bg-brand-bg relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="text-xs font-mono text-brand-accent uppercase tracking-wider font-semibold">
              On-Site South Florida Dispatch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Our Elite Repair & Maintenance Matrix
          </h2>
          <p className="text-sm sm:text-base text-brand-muted">
            Commercial-grade diagnostics, structural repairs, and handyman installations cataloged into fully mobile dispatch categories. Select a category below to browse.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center pb-12 w-full">
          <div className="p-1 bg-brand-card/80 border border-white/5 rounded-xl flex gap-1 max-w-full overflow-x-auto scrollbar-none shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-sm font-semibold uppercase tracking-wider transition-all min-h-[44px] cursor-pointer touch-manipulation flex items-center justify-center gap-1 sm:gap-1.5 shrink-0 select-none ${
                activeTab === 'all'
                  ? 'bg-brand-accent text-brand-bg shadow-md font-bold'
                  : 'text-brand-muted hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Show All</span>
            </button>
            <button
              onClick={() => setActiveTab('appliance')}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-sm font-semibold uppercase tracking-wider transition-all min-h-[44px] cursor-pointer touch-manipulation flex items-center justify-center gap-1 sm:gap-1.5 shrink-0 select-none ${
                activeTab === 'appliance'
                  ? 'bg-brand-accent text-brand-bg shadow-md font-bold'
                  : 'text-brand-muted hover:text-white'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Appliance Services</span>
            </button>
            <button
              onClick={() => setActiveTab('handyman')}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-sm font-semibold uppercase tracking-wider transition-all min-h-[44px] cursor-pointer touch-manipulation flex items-center justify-center gap-1 sm:gap-1.5 shrink-0 select-none ${
                activeTab === 'handyman'
                  ? 'bg-brand-accent text-brand-bg shadow-md font-bold'
                  : 'text-brand-muted hover:text-white'
              }`}
            >
              <Hammer className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Handyman Services</span>
            </button>
          </div>
        </div>

        {/* Dynamic Services Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-brand-card/50 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-accent/20 hover:bg-brand-card transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                >
                  <div className="space-y-4">
                    {/* Icon banner */}
                    <div className="w-12 h-12 bg-white/5 group-hover:bg-brand-accent/10 border border-white/10 group-hover:border-brand-accent/30 rounded-xl flex items-center justify-center text-brand-muted group-hover:text-brand-accent transition-all">
                      <Icon className="w-6 h-6 shrink-0" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-accent transition-colors flex items-center gap-2">
                        <span>{service.title}</span>
                      </h3>
                      <p className="text-sm text-brand-muted leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 pt-2 border-t border-white/5">
                      {service.highlights.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 items-start text-xs font-sans text-brand-muted leading-relaxed">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Call to Action Row */}
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center">
                    <a
                      href={service.ctaUrl}
                      onClick={scrollToForm}
                      className="text-xs font-bold font-mono uppercase tracking-wider text-brand-accent group-hover:text-amber-300 transition-colors flex items-center gap-1.5 min-h-[44px] cursor-pointer touch-manipulation"
                    >
                      <span>Book Diagnostic</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout Info */}
        <div className="mt-16 p-6 sm:p-8 bg-brand-card border border-white/5 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-display font-extrabold text-white">
              Do you have a unique or commercial-scale request?
            </h4>
            <p className="text-xs sm:text-sm text-brand-muted max-w-2xl">
              We support South Florida restaurant kitchens, condominium upgrades, property managers, and specialty appliances. Fill out the request form below or talk with our team directly.
            </p>
          </div>
          <a
            href="tel:+17818858584"
            className="px-6 py-3 bg-brand-accent/5 hover:bg-brand-accent/15 border border-brand-accent/20 hover:border-brand-accent/40 rounded-xl text-sm font-semibold tracking-wide text-brand-accent transition-all flex items-center gap-2 shrink-0 min-h-[44px] touch-manipulation"
          >
            <Settings className="w-4 h-4 animate-spin-slow" />
            <span>Call Mobile Dispatch</span>
          </a>
        </div>

      </div>
    </section>
  );
}
