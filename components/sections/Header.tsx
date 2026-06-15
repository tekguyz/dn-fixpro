'use client';

import { useState } from 'react';
import { Phone, Instagram, Facebook, Menu, X, Hammer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import logoAsset from '@/app/icon0.svg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Recent Work', href: '#portfolio' },
    { name: 'FAQs', href: '#faq' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/40 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group min-h-[44px]">
            <Image
              src={logoAsset}
              alt="DN FIXPRO Handyman & Appliance"
              className="h-10 w-auto md:h-11 object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-brand-muted hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Business & Social Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4 border-r border-white/10 pr-6">
              <a
                href="https://www.instagram.com/dn_fixpro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-accent transition-colors duration-200"
                aria-label="Follow DN FIXPRO on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1B8NE4vcnU/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-accent transition-colors duration-200"
                aria-label="Connect with DN FIXPRO on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Click-to-Call Button */}
            <motion.a
              href="tel:+17818858584"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-brand-bg font-bold rounded-lg text-sm transition-all shadow-lg hover:shadow-brand-accent/20 border border-brand-accent/10"
            >
              <motion.span
                animate={{
                  rotate: [0, -10, 10, -10, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2.5,
                  ease: "easeInOut",
                }}
              >
                <Phone className="w-4 h-4 fill-brand-bg" />
              </motion.span>
              <span>+1 (781) 885-8584</span>
            </motion.a>
          </div>

          {/* Mobile hamburger icon */}
          <div className="flex items-center md:hidden gap-3">
            <a
              href="tel:+17818858584"
              className="p-2.5 bg-brand-accent text-brand-bg rounded-lg font-bold shadow-md shadow-brand-accent/20 min-h-[44px] w-[44px] flex items-center justify-center"
              aria-label="Call Dispatch"
            >
              <Phone className="w-5 h-5 fill-brand-bg" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-brand-muted hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors min-h-[44px] w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-brand-card/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="px-3 py-2 text-md font-medium text-brand-muted hover:text-white hover:bg-white/5 rounded-md transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                {/* Social media shortcuts */}
                <div className="flex items-center justify-around px-8">
                  <a
                    href="https://www.instagram.com/dn_fixpro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors py-2"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1B8NE4vcnU/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors py-2"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                </div>

                {/* Main Dispatch button */}
                <a
                  href="tel:+17818858584"
                  className="flex items-center justify-center gap-3 w-full py-3.5 bg-brand-accent text-brand-bg text-center font-bold rounded-lg shadow-lg hover:bg-brand-accent/90"
                >
                  <Phone className="w-5 h-5 fill-brand-bg animate-bounce" />
                  <span>Call Dispatch: (781) 885-8584</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
