'use client';

import Hero from "@/components/sections/Hero";
import FocusAreas from "@/components/sections/Features";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "Perfect place for panchkarma treatment. The doctor is very knowledgeable and patient.",
      rating: 5,
    },
    {
      name: "Sneha Patil",
      text: "Very nice doctor and staff. I felt immediate relief in my back pain after only 3 sessions.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      text: "Best experience, all services were great. The environment is extremely calming.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <FocusAreas />
      <ServicesOverview />
      <WhyChooseUs />

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-charcoal mb-4"
            >
              Patient <span className="text-primary italic">Stories</span>
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-24 h-1 bg-primary mx-auto rounded-full" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-accent/40 p-10 rounded-[2rem] relative group hover-lift"
              >
                <Quote className="absolute top-6 right-8 text-primary/10 w-16 h-16 group-hover:text-primary/20 transition-colors" />
                <div className="flex gap-1 mb-6 text-[#FFB800]">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-charcoal/70 mb-8 italic leading-relaxed font-medium">&quot;{t.text}&quot;</p>
                <h4 className="font-bold text-charcoal">{t.name}</h4>
                <p className="text-xs text-charcoal/40 uppercase tracking-widest font-bold">Verified Patient</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Visit Section */}
      <section className="py-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-24 bg-primary flex flex-col justify-center text-white">
            <h2 className="text-4xl font-bold mb-8">Visit Our <span className="text-secondary italic">Clinic</span></h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-xl"><MapPin /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-white/70">B-2 Gajanan Society, Sector No. 4, Plot No. 1, Sant Nagar, Moshi Pradhikaran, Pune - 412105</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-xl"><Phone /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Contact Us</h4>
                  <p className="text-white/70">9970836811</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-xl"><Clock /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                  <p className="text-white/70">Daily: 09:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
            <Link 
              href="https://maps.google.com" 
              className="mt-12 bg-white text-primary px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover-lift self-start"
            >
              Get Directions <ArrowRight size={20} />
            </Link>
          </div>
          <div className="h-[400px] lg:h-auto grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.252062534571!2d73.818456075195!3d18.663952565126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b77543026a79%3A0xc682245b78438258!2sMoshi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712745000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[100px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 leading-tight">
            Ready to Begin Your <br />
            <span className="text-primary italic">Healing Journey?</span>
          </h2>
          <p className="text-xl text-charcoal/60 mb-12 max-w-2xl mx-auto">
            Schedule a consultation with our experts today and experience the transformative power of authentic Ayurveda.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/booking" 
              className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover-lift hover:bg-primary/90 shadow-xl shadow-primary/20"
            >
              Book Your Appointment
            </Link>
            <a 
              href="https://wa.me/919970836811" 
              className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg hover-lift shadow-xl shadow-green-500/20 flex items-center justify-center gap-2"
            >
              Consult on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
