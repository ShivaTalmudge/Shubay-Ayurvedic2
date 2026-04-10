import React from 'react';
import Link from 'next/link';
import { Leaf, Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-tight">Shubhay Clinic</span>
              <span className="text-[10px] text-white/60 uppercase tracking-widest font-medium">Ayurved & Panchkarma</span>
              <span className="text-[10px] text-primary/70 font-medium">शुभाय क्लिनिक - आयुर्वेद आणि पंचकर्म</span>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Leading Ayurvedic clinic in Pune, dedicated to natural healing and authentic Panchkarma treatments. We focus on holistic well-being and personalized care.
          </p>
          <div className="flex gap-4">
            <span className="text-white/40 text-xs">Join our community online</span>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-white/60 hover:text-primary transition-colors text-sm">About Us</Link></li>
            <li><Link href="/services" className="text-white/60 hover:text-primary transition-colors text-sm">Our Services</Link></li>
            <li><Link href="/testimonials" className="text-white/60 hover:text-primary transition-colors text-sm">Testimonials</Link></li>
            <li><Link href="/booking" className="text-white/60 hover:text-primary transition-colors text-sm">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Our Services</h4>
          <ul className="space-y-4">
            <li><Link href="/services" className="text-white/60 hover:text-primary transition-colors text-sm">Panchkarma Therapy</Link></li>
            <li><Link href="/services" className="text-white/60 hover:text-primary transition-colors text-sm">Basti Treatment</Link></li>
            <li><Link href="/services" className="text-white/60 hover:text-primary transition-colors text-sm">Abhyanga Massage</Link></li>
            <li><Link href="/services" className="text-white/60 hover:text-primary transition-colors text-sm">Detox Programs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin className="text-primary w-5 h-5 shrink-0" />
              <span className="text-white/60 text-sm">B-2 Gajanan Society, Sector No. 4, Plot No. 1, Sant Nagar, Moshi Pradhikaran, Pune - 412105</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="text-primary w-5 h-5 shrink-0" />
              <a href="tel:9970836811" className="text-white/60 text-sm hover:text-primary transition-colors">9970836811</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="text-primary w-5 h-5 shrink-0" />
              <span className="text-white/60 text-sm">contact@shubhayclinic.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between gap-4">
        <p className="text-white/40 text-xs text-center md:text-left">
          © {new Date().getFullYear()} Shubhay Clinic - Ayurved & Panchkarma. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link href="/privacy" className="text-white/40 text-xs hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-white/40 text-xs hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919970836811"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        <MessageCircle size={32} />
      </a>

      {/* Sticky Call Button (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 p-4 pt-0">
        <a
          href="tel:9970836811"
          className="bg-primary text-white flex items-center justify-center gap-2 py-4 rounded-xl font-bold shadow-2xl"
        >
          <Phone size={20} /> Call Now
        </a>
      </div>
    </footer>
  );
};

export default Footer;
