'use client';

import { CheckCircle2, Zap, Truck, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function ValueTicker() {
  const pillars = [
    {
      icon: CheckCircle2,
      title: '$69 Diagnostic Fee',
    },
    {
      icon: Zap,
      title: 'Same-Day Dispatch',
    },
    {
      icon: Truck,
      title: '100% Mobile & Direct',
    },
    {
      icon: ShieldCheck,
      title: 'Licensed & Insured',
    },
  ];

  return (
    <section id="why-us" className="py-3 sm:py-4 bg-brand-card/90 backdrop-blur-md border-t border-b border-white/5 relative z-10 w-full select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-4 md:gap-x-8 items-center justify-items-center text-center">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center gap-2 sm:gap-2.5 text-left shrink-0 max-w-full justify-center md:justify-start"
              >
                {/* Slim Accent Icon Container */}
                <div className="p-1.5 sm:p-2 bg-brand-accent/10 rounded-lg border border-brand-accent/20 text-brand-accent shrink-0">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 animate-pulse" />
                </div>

                {/* Compact Bold Title */}
                <span className="text-[10px] xs:text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white">
                  {pillar.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

