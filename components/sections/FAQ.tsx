'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type FaqItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What does the $69 diagnostic cover?',
      answer:
        'An expert, certified dispatcher-technician travels directly to your residential property or commercial facility to inspect your appliance or property item and pinpoint the failure. If you authorize us to proceed with the repair on-site, that $69 fee is 100% applied as a direct credit toward your final repair invoice!',
    },
    {
      question: 'How do you keep your on-site repair rates so competitive?',
      answer:
        'By operating as a direct-to-door mobile dispatch network, we run an extremely efficient operation that eliminates unnecessary middlemen overhead, allowing us to pass significant labor savings straight to you. Plus, we work transparently in public—check out our live Instagram and Facebook channels in the navigation above to view real completed repair videos posted daily!',
    },
    {
      question: 'Do you offer same-day emergency dispatch?',
      answer:
        'Yes! We provide same-day handyman and appliance repair services depending on dispatcher location queues. Because our team is fully mobile-powered across Hollywood, Miami, Fort Lauderdale, and surrounding areas, our vans are routed in real-time for immediate availability.',
    },
    {
      question: 'Do you work with commercial kitchen lines or just residential?',
      answer:
        'We support both. Our tech fleet has specialized commercial appliance qualifications—meaning we repair restaurant lines (kitchen dishwasher sensors, professional heating elements) and multi-family laundries, alongside home washers, dryers, and property repairs.',
    },
    {
      question: 'Do you offer a satisfaction guarantee on repairs?',
      answer:
        'Absolutely. We utilize high-grade OEM manufacturer parts designed to match original hardware. All of our repair dispatches are covered by our solid customer satisfaction agreement, giving you peace of mind.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-brand-accent" />
            <span className="text-xs font-mono text-brand-accent uppercase tracking-wider font-semibold">
              Frequently Answered
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-sm text-brand-muted">
            Transparent policies, mobile dispatch guarantees, and everything you need to know before locking in your same-day diagnostic route.
          </p>
        </div>

        {/* Custom State Accordions */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-brand-card/60 border border-white/5 rounded-2xl overflow-hidden transition-all duration-200 hover:border-white/10"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:text-brand-accent transition-colors focus:outline-none min-h-[48px] touch-manipulation group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold font-display pr-4 group-hover:text-brand-accent">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 group-hover:bg-brand-accent/15 text-brand-muted group-hover:text-brand-accent transition-all ${
                    isOpen ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4 shrink-0" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-muted leading-relaxed border-t border-white/5 font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct Link Hook */}
        <div className="mt-12 text-center">
          <p className="text-xs text-brand-muted">
            Still have questions or ready to book?{' '}
            <a
              href="#estimate-form"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#estimate-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-brand-accent hover:text-amber-300 font-bold border-b border-brand-accent/30 hover:border-amber-300 transition-colors uppercase tracking-widest text-[10px] font-mono"
            >
              Request Dispatch Directly
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
