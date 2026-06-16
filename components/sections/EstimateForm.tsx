'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { estimateFormSchema, type EstimateFormValues } from '../../lib/schema';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import logoAsset from '@/app/icon0.svg';
import { 
  Send, 
  Loader2, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Wrench, 
  FileText 
} from 'lucide-react';

export default function EstimateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<EstimateFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EstimateFormValues>({
    resolver: zodResolver(estimateFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      serviceType: 'Appliance Repair',
      location: '',
      problemDescription: '',
    },
  });

  const onSubmit = async (data: EstimateFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API Round-trip processing state natively
    await new Promise((resolve) => setTimeout(resolve, 1800));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setSubmittedData(data);
    reset(); // reset form states cleanly
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Basic automatic phone formatting to create a premium user experience
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 10) val = val.slice(0, 10);
    
    let formatted = val;
    if (val.length >= 6) {
      formatted = `(${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6)}`;
    } else if (val.length >= 3) {
      formatted = `(${val.slice(0, 3)}) ${val.slice(3)}`;
    }
    
    e.target.value = formatted;
  };

  return (
    <section id="estimate-form" className="py-10 md:py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      {/* Dynamic Honeycomb subtle mask */}
      <div className="absolute inset-0 bg-honeycomb opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Block: CRO Conversion Copys */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-xs font-mono text-brand-accent uppercase tracking-widest font-extrabold bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full inline-block">
                Direct Dispatch Request
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white tracking-tight leading-tight">
                Request On-Site Mobile Dispatch Now
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed">
                Take the first step toward a zero-stress repair. Your professional technician drives straight to your South Florida location, fully armed with premium diagnostic gear and common replacement components.
              </p>
            </div>

            {/* Structured benefits lists - Beautifully streamlined, blocky badges removed */}
            <div className="space-y-4 pt-5 border-t border-white/5 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">15-Minute Response Hub</h4>
                  <p className="text-xs text-brand-muted">A live dispatch operations manager will call or text your phone number to confirm same-day availability details.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">$69 Applied-Back Credit</h4>
                  <p className="text-xs text-brand-muted">The minimal call-out & diagnostics fee is deducted 100% from your final invoice upon repair authorization.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Serving Broward & South FL</h4>
                  <p className="text-xs text-brand-muted">On-demand dispatch to Hollywood, Hallandale, Fort Lauderdale, Miami, Miramar, and surrounding cities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Pure Custom Form Engine */}
          <div className="lg:col-span-7">
            <div className="bg-brand-card border border-white/5 rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-accent to-amber-500" />
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="estimate-submit-form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                    noValidate
                  >
                    {/* Simplified Header Strip inside the card */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/5 mb-2">
                      <span className="text-xs font-semibold tracking-wider text-white uppercase">Request Appointment</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-brand-accent uppercase font-bold tracking-wider">Live Desk</span>
                        <span className="flex h-1.5 w-1.5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-accent"></span>
                        </span>
                      </div>
                    </div>

                    {/* Full Name Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs font-medium text-brand-muted block">
                        Full Name <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. John Doe"
                        {...register('fullName')}
                        className={`w-full h-11 px-4 bg-brand-bg/60 border ${
                          errors.fullName ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-accent'
                        } rounded-xl text-white placeholder-brand-muted/40 focus:outline-none focus:ring-1 focus:ring-brand-accent/20 text-sm transition-colors text-ellipsis`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="text-xs text-red-500 font-mono mt-1">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Dual Row: Phone and Service Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Phone Number Box */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-medium text-brand-muted block">
                          Phone Number <span className="text-brand-accent">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="(781) 885-8584"
                          autoComplete="tel"
                          {...register('phone')}
                          onChange={(e) => {
                            handlePhoneInput(e);
                            register('phone').onChange(e);
                          }}
                          className={`w-full h-11 px-4 bg-brand-bg/60 border ${
                            errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-accent'
                          } rounded-xl text-white placeholder-brand-muted/40 focus:outline-none focus:ring-1 focus:ring-brand-accent/20 text-sm transition-colors`}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-xs text-red-500 font-mono mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      {/* Service Dropdown Box */}
                      <div className="space-y-1.5">
                        <label htmlFor="serviceType" className="text-xs font-medium text-brand-muted block">
                          Service Type <span className="text-brand-accent">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="serviceType"
                            {...register('serviceType')}
                            className="w-full h-11 pl-4 pr-10 bg-brand-bg/60 border border-white/10 focus:border-brand-accent rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/20 text-sm transition-colors cursor-pointer appearance-none"
                          >
                            <option value="Appliance Repair" className="bg-brand-card">Appliance Repair</option>
                            <option value="Handyman Services" className="bg-brand-card">Handyman Services</option>
                            <option value="Commercial Kitchen" className="bg-brand-card">Commercial Kitchen Systems</option>
                            <option value="Property Upgrades" className="bg-brand-card">Property Upgrades</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        {errors.serviceType && (
                          <p id="serviceType-error" className="text-xs text-red-500 font-mono mt-1">
                            {errors.serviceType.message}
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Location/Zip Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="location" className="text-xs font-medium text-brand-muted block">
                        Location / Zip Code <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        id="location"
                        type="text"
                        placeholder="e.g. Hollywood, FL"
                        {...register('location')}
                        className={`w-full h-11 px-4 bg-brand-bg/60 border ${
                          errors.location ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-accent'
                        } rounded-xl text-white placeholder-brand-muted/40 focus:outline-none focus:ring-1 focus:ring-brand-accent/20 text-sm transition-colors`}
                      />
                      {errors.location && (
                        <p id="location-error" className="text-xs text-red-500 font-mono mt-1">
                          {errors.location.message}
                        </p>
                      )}
                    </div>

                    {/* Description Paragraph Textarea */}
                    <div className="space-y-1.5">
                      <label htmlFor="problemDescription" className="text-xs font-medium text-brand-muted block">
                        Describe What Needs Repair / Upgrade <span className="text-brand-accent">*</span>
                      </label>
                      <textarea
                        id="problemDescription"
                        rows={3}
                        placeholder="Please provide basic details (e.g., Dryer won't heat, kitchen faucet leaking, drywall patch needed, etc.)"
                        {...register('problemDescription')}
                        className={`w-full min-h-[80px] px-4 py-2.5 bg-brand-bg/60 border ${
                          errors.problemDescription ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-accent'
                        } rounded-xl text-white placeholder-brand-muted/40 focus:outline-none focus:ring-1 focus:ring-brand-accent/20 text-sm transition-colors resize-none`}
                      />
                      <div className="flex justify-between items-center text-[10px] font-mono text-brand-muted">
                        <span>Provide details for speed</span>
                        <span>Min. 10 chars</span>
                      </div>
                      {errors.problemDescription && (
                        <p id="problemDescription-error" className="text-xs text-red-500 font-mono mt-1">
                          {errors.problemDescription.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button Trigger - Streamlined padding, icon on the right, no text wrapping */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 inline-flex items-center justify-center gap-2 px-6 bg-brand-accent text-brand-bg font-extrabold uppercase tracking-wider rounded-xl text-xs hover:bg-brand-accent/90 transition-all cursor-pointer shadow-lg shadow-brand-accent/15 border border-brand-accent/10 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                      id="submit-estimate-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Routing Dispatcher...</span>
                        </>
                      ) : (
                        <>
                          <span>Request Dispatch Now</span>
                          <Send className="w-3.5 h-3.5 fill-brand-bg shrink-0" />
                        </>
                      )}
                    </button>
                    
                    {/* Reduced Security Subtext */}
                    <p className="text-[10px] font-sans text-brand-muted/80 text-center leading-normal mt-1">
                      Your phone number is strictly used for direct dispatch. No spam ever.
                    </p>

                  </motion.form>
                ) : (
                  <motion.div
                    key="estimate-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="py-10 text-center flex flex-col items-center justify-center space-y-6"
                    id="form-success-container"
                  >
                    {/* Animated Gold Ring Success Emblem */}
                    <div className="w-16 h-16 rounded-full bg-brand-accent/10 border-2 border-brand-accent/40 flex items-center justify-center text-brand-accent shadow-xl shadow-brand-accent/10 animate-pulse">
                      <CheckCircle className="w-8 h-8 stroke-[2.2]" />
                    </div>

                    {/* Highly Targeted CRO Confirmation Message */}
                    <div className="space-y-2 max-w-md">
                      <h3 className="text-xl font-display font-extrabold text-white tracking-wide uppercase">
                        Submission Received!
                      </h3>
                      <p className="text-sm text-brand-accent font-semibold">
                        A dispatcher will call or text you within 15 minutes.
                      </p>
                      <p className="text-xs text-brand-muted leading-relaxed">
                        We have logged your request for <span className="text-white font-semibold">{submittedData?.serviceType}</span> in <span className="text-white font-semibold">{submittedData?.location}</span>. Keep your phone nearby to lock in your slot.
                      </p>
                    </div>

                    {/* Submitted details summary widget */}
                    <div className="w-full bg-brand-bg/50 border border-white/5 rounded-xl p-4 text-xs font-mono text-left max-w-sm space-y-2">
                      <div className="flex justify-between border-b border-white/5 pb-1 text-brand-muted gap-4">
                        <span className="shrink-0">CONTACT NAME:</span>
                        <span className="text-white font-medium truncate max-w-[60%]">{submittedData?.fullName}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1 text-brand-muted gap-4">
                        <span className="shrink-0">SERVICE CALL:</span>
                        <span className="text-brand-accent font-extrabold truncate max-w-[60%]">{submittedData?.serviceType}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1 text-brand-muted gap-4">
                        <span className="shrink-0">PHONE INBOUND:</span>
                        <span className="text-white font-medium shrink-0">{submittedData?.phone}</span>
                      </div>
                      <div className="flex justify-between text-brand-muted gap-4">
                        <span className="shrink-0">DISPATCH RANGE:</span>
                        <span className="text-white font-medium truncate max-w-[60%]">{submittedData?.location}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-5 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-[10px] font-bold font-mono uppercase tracking-wider rounded-lg transition-colors cursor-pointer min-h-[40px] touch-manipulation"
                      id="reset-form-btn"
                    >
                      Request Another Dispatch
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
