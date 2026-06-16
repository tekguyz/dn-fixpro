'use client';

import { Instagram, Facebook, ArrowUpRight, Camera, Film, Users, Sparkles, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export default function SocialHub() {
  return (
    <section id="portfolio" className="py-20 bg-brand-card/30 border-y border-white/5 relative">
      <div className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span className="text-xs font-mono text-brand-accent uppercase tracking-wider font-semibold">
              Zero Staged Stock Photos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            We Work in Public — See Our Live Portfolio
          </h2>
          <p className="text-sm sm:text-base text-brand-muted">
            As a modern direct-dispatch team, we believe in 100% transparency. We publish our daily project videos and updates live directly from the field. No staged templates—see real mechanical repairs directly on your feed.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Instagram Channel Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col justify-between bg-brand-card border border-white/5 rounded-2xl p-8 hover:border-[#E1306C]/30 transition-all shadow-xl overflow-hidden"
          >
            {/* Background heat lamp glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E1306C]/10 rounded-full blur-[50px] transition-all group-hover:bg-[#E1306C]/20" />

            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2.5 text-white flex items-center justify-center shadow-lg">
                    <Instagram className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-white text-lg tracking-wide uppercase">
                      Live Video Log
                    </h3>
                    <p className="text-xs text-brand-muted font-mono">@dn_fixpro</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#ee2a7b] font-semibold bg-[#ee2a7b]/10 border border-[#ee2a7b]/20 px-2.5 py-1 rounded-full flex items-center gap-1.5 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ee2a7b] animate-ping" />
                  Stories
                </span>
              </div>

              {/* Copy */}
              <p className="text-sm text-brand-muted leading-relaxed">
                Follow <span className="text-white font-semibold">@dn_fixpro</span> on Instagram to watch real-time project video stories, component installations, custom appliance testing, and completed field projects across Broward County.
              </p>

              {/* Graphic Representation Widget of Instagram Feed */}
              <div className="grid grid-cols-3 gap-2.5 pt-4">
                <div className="aspect-square bg-white/5 rounded-lg border border-white/5 relative overflow-hidden group-hover:border-white/10 flex items-center justify-center text-white p-2">
                  <div className="text-center">
                    <Film className="w-4 h-4 text-brand-accent mx-auto mb-1 opacity-70" />
                    <span className="text-[9px] font-mono text-brand-muted uppercase">Dryer Vent</span>
                  </div>
                </div>
                <div className="aspect-square bg-white/5 rounded-lg border border-white/5 relative overflow-hidden group-hover:border-white/10 flex items-center justify-center text-white p-2">
                  <div className="text-center">
                    <Camera className="w-4 h-4 text-brand-accent mx-auto mb-1 opacity-70" />
                    <span className="text-[9px] font-mono text-brand-muted uppercase">Dishwasher</span>
                  </div>
                </div>
                <div className="aspect-square bg-white/5 rounded-lg border border-white/5 relative overflow-hidden group-hover:border-white/10 flex items-center justify-center text-white p-2">
                  <div className="text-center">
                    <Film className="w-4 h-4 text-brand-accent mx-auto mb-1 opacity-70" />
                    <span className="text-[9px] font-mono text-brand-muted uppercase">Bath Remod</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Link out */}
            <div className="pt-8">
              <a
                href="https://www.instagram.com/dn_fixpro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-4 bg-[#E1306C]/10 border border-[#E1306C]/20 hover:bg-[#E1306C] hover:text-white group-hover:border-[#E1306C]/40 text-[#E1306C] group-hover:text-white font-extrabold text-sm rounded-xl transition-all uppercase tracking-wider min-h-[44px] cursor-pointer touch-manipulation shadow-md"
              >
                <span>Launch Instagram portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Facebook Channel Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col justify-between bg-brand-card border border-white/5 rounded-2xl p-8 hover:border-[#1877F2]/30 transition-all shadow-xl overflow-hidden"
          >
            {/* Background heat lamp glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1877F2]/10 rounded-full blur-[50px] transition-all group-hover:bg-[#1877F2]/20" />

            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1877F2] p-2.5 text-white flex items-center justify-center shadow-lg">
                    <Facebook className="w-6 h-6 stroke-[2.2] fill-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-white text-lg tracking-wide uppercase">
                      Local Proof Loop
                    </h3>
                    <p className="text-xs text-brand-muted font-mono">DN FIXPRO Services</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#1877F2] font-semibold bg-[#1877F2]/10 border border-[#1877F2]/20 px-2.5 py-1 rounded-full flex items-center gap-1.5 uppercase">
                  <Users className="w-3.5 h-3.5 text-[#1877F2]" />
                  Verified
                </span>
              </div>

              {/* Copy */}
              <p className="text-sm text-brand-muted leading-relaxed">
                Join our <span className="text-white font-semibold">South Florida neighborhood loop</span> on Facebook for local homeowner recommendations, regular maintenance guidelines, safety alerts, and direct project dispatches, all backed by real clients.
              </p>

              {/* Graphic Representation Widget of Facebook Feed */}
              <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex gap-3.5 items-center">
                <div className="w-9 h-9 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent text-xs font-bold font-mono shrink-0">
                  DF
                </div>
                <div className="flex-1 space-y-1 min-w-0">
                  <div className="flex justify-between items-center gap-2">
                    <p className="text-xs font-bold text-white leading-none truncate max-w-[65%]">DN FIXPRO (Hollywood, FL)</p>
                    <span className="text-[10px] font-mono text-brand-muted shrink-0">June 2026</span>
                  </div>
                  <p className="text-[11px] text-brand-muted line-clamp-2 leading-snug">
                    &quot;Awesome service on our commercial line system dishwasher today! Super fast direct on-site technician response, saved us on Diagnostic Fee&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Link out */}
            <div className="pt-8">
              <a
                href="https://www.facebook.com/share/1B8NE4vcnU/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-4 bg-[#1877F2]/10 border border-[#1877F2]/20 hover:bg-[#1877F2] hover:text-white group-hover:border-[#1877F2]/40 text-[#1877F2] group-hover:text-white font-extrabold text-sm rounded-xl transition-all uppercase tracking-wider min-h-[44px] cursor-pointer touch-manipulation shadow-md"
              >
                <span>Browse Facebook Loop</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Alert / Location Note */}
        <div className="mt-14 max-w-lg mx-auto flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-yellow-500">
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold tracking-tight">Official Dispatch Notice</h4>
            <p className="text-xs leading-relaxed text-[#df9a3f]">
              Direct dispatch is coordinated exclusively via raw phone lines. Call us directly at (781) 885-8584 for same-day priority service window reservations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
