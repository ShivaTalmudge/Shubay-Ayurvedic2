'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd handle form submission here
  };

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl font-bold text-charcoal mb-8">Get in <span className="text-primary italic">Touch</span></h1>
            <p className="text-lg text-charcoal/60 mb-12 max-w-md">
              Have questions about treatments? We're here to help you on your healing journey. Reach out to us anytime.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="bg-white p-4 rounded-2xl shadow-xl shadow-primary/5 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Our Location</h4>
                  <p className="text-charcoal/60">Gajanan Society, Sant Nagar, Sector 4, Moshi, Pune, Maharashtra 411070</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-bold mt-2 inline-block hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="bg-white p-4 rounded-2xl shadow-xl shadow-primary/5 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Call Us</h4>
                  <p className="text-charcoal/60">09970836811</p>
                  <a href="tel:09970836811" className="text-primary text-sm font-bold mt-2 inline-block hover:underline">Click to Call</a>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="bg-white p-4 rounded-2xl shadow-xl shadow-primary/5 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Clinic Timings</h4>
                  <p className="text-charcoal/60">Open Daily: 09:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              <a 
                href="https://wa.me/919970836811" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover-lift shadow-lg"
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-primary/5 border border-primary/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Message Sent!</h3>
                <p className="text-charcoal/60">Thank you for reaching out. Our team will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-charcoal mb-8">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-charcoal/60 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Your Name"
                        className="w-full bg-accent/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-charcoal/60 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="Your Phone"
                        className="w-full bg-accent/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-charcoal/60 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Your Email (Optional)"
                      className="w-full bg-accent/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-charcoal/60 ml-1">Your Message</label>
                    <textarea 
                      required 
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full bg-accent/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover-lift shadow-xl shadow-primary/10 flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Frequently Asked <span className="text-primary italic">Questions</span></h2>
          <p className="text-charcoal/60">Common queries about Ayurvedic treatments and our clinic.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: "Is Ayurveda safe for long-term use?",
              a: "Yes, authentic Ayurvedic medicines are natural and emphasize long-term health without side effects when taken under expert guidance."
            },
            {
              q: "What is Panchkarma?",
              a: "Panchkarma is a 5-step detoxification process that removes deep-seated toxins from the body and restores balance to the Doshas."
            },
            {
              q: "How many sessions will I need?",
              a: "The number of sessions varies depending on the chronic nature of the condition. Most patients see results within 3-7 sessions."
            },
            {
              q: "Do I need to follow a specific diet?",
              a: "Yes, Ayurveda considers diet (Ahara) as a primary medicine. Your doctor will provide a personalized diet chart as part of the treatment."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-primary/5 hover:border-primary/20 transition-all">
              <h4 className="text-xl font-bold text-charcoal mb-4 flex gap-3">
                <span className="text-primary font-serif">Q.</span> {faq.q}
              </h4>
              <p className="text-charcoal/60 leading-relaxed pl-8 border-l-2 border-primary/10">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Map Embed */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="h-[500px] w-full bg-accent rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.252062534571!2d73.818456075195!3d18.663952565126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b77543026a79%3A0xc682245b78438258!2sMoshi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712745000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
