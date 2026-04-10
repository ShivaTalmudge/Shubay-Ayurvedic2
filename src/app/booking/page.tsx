'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Clipboard, CheckCircle, ArrowRight, Info, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const services = [
    'Obesity & Weight',
    'Infertility & PCOD',
    'Psoriasis & Acne',
    'Arthritis & Spine',
    'Frozen Shoulder',
    'Acidity & Migraine',
    'Indigestion & Stones',
    'Chronic Diseases'
  ];

  const times = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-accent/20">
      <section className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Book an <span className="text-primary italic">Appointment</span></h1>
          <p className="text-charcoal/60">Take the first step towards a healthier, balanced life.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between mb-12 relative max-w-md mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-charcoal/5 -z-0 -translate-y-1/2"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary -z-0 -translate-y-1/2 transition-all duration-500"
            style={{ width: `${(step - 1) * 50}%` }}
          ></div>
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold relative z-10 transition-colors duration-500 ${
                step >= s ? 'bg-primary text-white shadow-lg' : 'bg-white text-charcoal/30 border border-charcoal/10'
              }`}
            >
              {step > s ? <CheckCircle size={20} /> : s}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl shadow-primary/5 p-8 md:p-16 overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-charcoal/60 flex items-center gap-2"><User size={16} className="text-primary" /> Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full bg-accent/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      value={formData.name}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-charcoal/60 flex items-center gap-2"><Phone size={16} className="text-primary" /> Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone"
                      className="w-full bg-accent/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      value={formData.phone}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-charcoal/60 flex items-center gap-2"><Clipboard size={16} className="text-primary" /> Select Treatment</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((s) => (
                      <button 
                        key={s}
                        onClick={() => setFormData({...formData, service: s})}
                        className={`text-left px-6 py-4 rounded-2xl font-medium transition-all ${
                          formData.service === s ? 'bg-primary text-white shadow-lg' : 'bg-accent/30 text-charcoal/60 hover:bg-accent/50'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <button 
                  disabled={!formData.name || !formData.phone || !formData.service}
                  onClick={handleNext}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover-lift shadow-xl shadow-primary/20 disabled:opacity-50 disabled:hover:translate-y-0 transition-all flex items-center justify-center gap-2"
                >
                  Continue to Schedule <ArrowRight size={20} />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-charcoal/60 flex items-center gap-2"><Calendar size={16} className="text-primary" /> Select Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-accent/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      value={formData.date}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-charcoal/60 flex items-center gap-2"><Clock size={16} className="text-primary" /> Select Time Slot</label>
                    <div className="grid grid-cols-2 gap-3">
                      {times.map((t) => (
                        <button 
                          key={t}
                          onClick={() => setFormData({...formData, time: t})}
                          className={`text-center py-3 rounded-xl text-sm font-bold transition-all ${
                            formData.time === t ? 'bg-primary text-white shadow-md' : 'bg-accent/30 text-charcoal/60 hover:bg-accent/50'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button onClick={handleBack} className="flex-1 bg-accent/50 text-charcoal font-bold py-5 rounded-2xl hover:bg-accent/70 transition-all">Back</button>
                  <button 
                    disabled={!formData.date || !formData.time}
                    onClick={handleNext}
                    className="flex-[2] bg-primary text-white py-5 rounded-2xl font-bold text-lg hover-lift shadow-xl shadow-primary/20 disabled:opacity-50 transition-all"
                  >
                    Confirm Booking
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 relative overflow-hidden"
              >
                {/* Floating Petals Animation */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -20, opacity: 0, x: (i * 100) % 400 - 200 }}
                    animate={{ 
                      y: [0, 400], 
                      opacity: [0, 1, 0],
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      duration: 4 + (i * 0.5) % 2, 
                      repeat: Infinity, 
                      delay: i * 0.5 
                    }}
                    className="absolute top-0 text-primary/20 pointer-events-none"
                  >
                    <Leaf size={24} fill="currentColor" />
                  </motion.div>
                ))}

                <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 shadow-inner">
                  <CheckCircle className="text-primary w-12 h-12" />
                </div>
                <h2 className="text-4xl font-bold text-charcoal mb-4 relative z-10">Request Received!</h2>
                <p className="text-charcoal/60 mb-10 text-lg max-w-md mx-auto relative z-10">
                  Thank you, <span className="text-primary font-bold">{formData.name}</span>! Our team will call you at <span className="font-bold">{formData.phone}</span> to confirm your session.
                </p>
                <div className="bg-accent/40 p-6 rounded-2xl inline-flex items-center gap-3 text-sm text-charcoal/50 max-w-sm relative z-10">
                  <Info size={20} className="text-primary shrink-0" />
                  Please arrive 10 minutes before your scheduled treatment.
                </div>
                <div className="mt-12 relative z-10">
                   <Link href="/" className="bg-white text-primary border border-primary/20 px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">Back to Home</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
