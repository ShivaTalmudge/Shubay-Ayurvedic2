'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Star, User } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-charcoal mb-6 text-balance">
            Rooted in Tradition, <br />
            <span className="text-primary italic">Healing with Heart</span>
          </h1>
          <p className="text-lg text-charcoal/60 leading-relaxed">
            Shubhay Clinic is a premier Ayurvedic wellness center in Pune, dedicated to restoring the natural balance of body, mind, and spirit.
          </p>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="h-[500px] rounded-[3rem] overflow-hidden relative shadow-2xl">
          <img 
            src="/images/clinic.png" 
            alt="Ayurvedic Clinic Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 rounded-[2.5rem] bg-accent/30 border border-primary/5">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-charcoal italic">Our Mission</h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              To provide authentic Ayurvedic healthcare services that are accessible, effective, and personalized. We strive to empower individuals to take control of their health through the timeless wisdom of Ayurveda.
            </p>
          </div>
          <div className="p-12 rounded-[2.5rem] bg-secondary/20 border border-primary/5">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-charcoal italic">Our Vision</h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              To be a global leader in holistic healing, where ancient Ayurvedic principles meet modern clinical excellence, creating a healthier society through natural and sustainable wellness practices.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white/50">
              <img 
                src="/images/doctor.png" 
                alt="Expert Ayurvedic Doctor" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-xl z-20 max-w-xs border border-primary/10"
            >
              <div className="flex gap-1 text-primary mb-2">
                <Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} />
              </div>
              <p className="text-charcoal italic font-medium">&quot;Healing is not just about treating disease, it&apos;s about restoring harmony.&quot;</p>
            </motion.div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Heart of our clinic</span>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Meet <span className="text-primary italic">Dr. Sameer Deshmukh</span></h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Dr. Sameer Deshmukh brings over 10 years of clinical expertise in treating chronic lifestyle disorders through authentic Panchkarma and Ayurvedic medicines. With a deep commitment to patient care, he ensures every individual receives a personalized path to recovery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-center bg-white p-6 rounded-2xl shadow-sm border border-primary/5">
                <div className="bg-accent p-3 rounded-xl text-primary"><User /></div>
                <div>
                  <h4 className="font-bold text-charcoal">Highly Qualified</h4>
                  <p className="text-sm text-charcoal/60">B.A.M.S & M.D Expertise</p>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-white p-6 rounded-2xl shadow-sm border border-primary/5">
                <div className="bg-accent p-3 rounded-xl text-primary"><Star /></div>
                <div>
                  <h4 className="font-bold text-charcoal">5000+ Treated</h4>
                  <p className="text-sm text-charcoal/60">Successful Case Studies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-charcoal text-white py-24 mt-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 italic">The Shubhay Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-primary text-xl font-bold">Nature First</h3>
              <p className="text-white/60">We believe in the healing power of nature and use pure herbal formulations.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-primary text-xl font-bold">Holistic Approach</h3>
              <p className="text-white/60">We treat the whole person, not just the symptoms, addressing root causes.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-primary text-xl font-bold">Personalized Pace</h3>
              <p className="text-white/60">Every body heals differently. We respect your unique journey to wellness.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
