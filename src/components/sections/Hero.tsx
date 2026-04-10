'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: 'url("/images/hero.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="text-primary w-4 h-4" />
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Trusted Ayurvedic Healing</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-tight mb-6">
              Heal Naturally with <br />
              <span className="text-primary italic">Authentic Ayurveda</span>
            </h1>
            
            <p className="text-lg text-charcoal/70 mb-10 max-w-xl leading-relaxed">
              Restore balance and rejuvenation through ancient wisdom. Under the expert guidance of <span className="text-primary font-bold">Dr. Sameer Deshmukh</span> at Shubhay Clinic, we provide personalized Panchkarma and Ayurvedic treatments tailored to your unique body type.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/booking" 
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover-lift shadow-xl shadow-primary/20"
              >
                Book Appointment <ArrowRight size={20} />
              </Link>
              <a 
                href="tel:9970836811" 
                className="bg-white text-charcoal px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 border border-charcoal/10 hover:bg-charcoal/5 transition-all hover-lift shadow-sm"
              >
                Call Support
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-charcoal">10+</span>
                <span className="text-sm text-charcoal/50">Years Experience</span>
              </div>
              <div className="h-10 w-px bg-charcoal/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-charcoal">5000+</span>
                <span className="text-sm text-charcoal/50">Happy Patients</span>
              </div>
              <div className="h-10 w-px bg-charcoal/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-charcoal">100%</span>
                <span className="text-sm text-charcoal/50">Natural</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/50"
            >
              <img 
                src="/images/hero.png" 
                alt="Ayurvedic Treatment" 
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </motion.div>
            
            {/* Decor Elements */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -top-12 -right-12 w-64 h-64 bg-secondary rounded-full -z-0 blur-3xl opacity-50"
            />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary rounded-full -z-0 blur-3xl opacity-20" />
            
            {/* Trust Badge badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-primary/10"
            >
              <div className="text-primary font-bold text-sm uppercase tracking-tighter mb-1">Trusted Ayurvedic Care</div>
              <div className="text-charcoal text-xs font-medium">Experienced Doctor Consultation</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
