'use client';

import { Instagram, Facebook, Hammer, PhoneCall, Mail, MapPin, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import logoAsset from '@/app/icon0.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black/90 border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
      {/* Absolute faint yellow warning gradient for mechanical flavor */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid structure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-10">
          
          {/* Brand pitch columns */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-2">
              <Image
                src={logoAsset}
                alt="DN FIXPRO Handyman & Appliance"
                className="h-16 sm:h-18 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col gap-0.5 text-xs text-brand-muted font-mono leading-none pt-1">
                <span>Dispatch: Mon-Sun • 7AM–10PM</span>
                <span>Hollywood & South Florida Metro</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted max-w-sm leading-relaxed">
              Professional, same-day residential and commercial appliance repairs alongside rugged handyman upgrades. Operating direct-to-door mobile workshops to bypass retail lease overhead—ensuring South Florida clients receive premium services at unbeatable rates.
            </p>
          </div>

          {/* Nav Links columns */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-white font-extrabold uppercase tracking-widest">
              Navigation Linkways
            </h4>
            <div className="flex flex-col space-y-1 text-xs">
              <button
                onClick={() => handleScroll('#services')}
                className="text-left text-brand-muted hover:text-brand-accent transition-colors min-h-[40px] py-1.5 cursor-pointer block"
              >
                Our Elite Services
              </button>
              <button
                onClick={() => handleScroll('#why-us')}
                className="text-left text-brand-muted hover:text-brand-accent transition-colors min-h-[40px] py-1.5 cursor-pointer block"
              >
                Diagnostic Guidelines
              </button>
              <button
                onClick={() => handleScroll('#portfolio')}
                className="text-left text-brand-muted hover:text-brand-accent transition-colors min-h-[40px] py-1.5 cursor-pointer block"
              >
                &quot;Work in Public&quot; Portfolio
              </button>
              <button
                onClick={() => handleScroll('#estimate-form')}
                className="text-left text-brand-muted hover:text-brand-accent transition-colors min-h-[40px] py-1.5 cursor-pointer block"
              >
                Request Dispatcher
              </button>
            </div>
          </div>

          {/* Direct Hotline Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono text-white font-extrabold uppercase tracking-widest">
              Direct Contact & Dispatch
            </h4>
            <div className="space-y-1.5 text-xs">
              <a
                href="tel:+17818858584"
                className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-all duration-200 min-h-[40px] py-1.5"
              >
                <div className="p-1.5 rounded bg-white/5 border border-white/5 shrink-0">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-white">(781) 885-8584</span>
              </a>
              <div className="flex items-center gap-2 text-brand-muted min-h-[40px] py-1.5">
                <div className="p-1.5 rounded bg-white/5 border border-white/5 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed">Hollywood, FL & surrounding Broward</span>
              </div>
              <div className="flex items-center gap-2 text-brand-muted min-h-[40px] py-1.5">
                <div className="p-1.5 rounded bg-white/5 border border-white/5 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed break-all">dispatch@dnfixpro.com (Inquiries Only)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Base bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-brand-muted">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-mono">
              © {currentYear} <span className="text-white font-semibold">DN FIXPRO</span>. All Rights Reserved. Same-Day Mobile Dispatch.
            </p>
            <p className="text-[10px] leading-relaxed text-brand-muted/70 max-w-xl">
              We operate strictly via high-equipped mobile repair vans across South Florida (Boca Raton, Broward, Dade). We never maintain high-cost physical showrooms, allowing us to applied diagnostic fees directly and pass all discount rates forward.
            </p>
          </div>

          {/* Raw Icon link blocks */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/dn_fixpro/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-brand-muted hover:text-brand-accent hover:bg-white/10 transition-colors"
              aria-label="Instagram Channel"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1B8NE4vcnU/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-brand-muted hover:text-brand-accent hover:bg-white/10 transition-colors"
              aria-label="Facebook Channel"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
