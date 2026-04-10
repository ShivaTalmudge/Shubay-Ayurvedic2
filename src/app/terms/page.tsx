import React from 'react';

const TermsPage = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-charcoal mb-8">Terms of <span className="text-primary italic">Service</span></h1>
        <div className="prose prose-lg max-w-none text-charcoal/70 space-y-6">
          <p>Last updated: April 10, 2026</p>
          <p>
            By accessing or using the Shubhay Clinic website, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
          </p>
          
          <h2 className="text-2xl font-bold text-charcoal mt-10">1. Medical Disclaimer</h2>
          <p>
            The content on this website is for informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of a qualified Ayurvedic physician or other healthcare provider with any questions you may have regarding a medical condition.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-10">2. Appointment Bookings</h2>
          <p>
            Bookings made through our website are subject to availability. We reserve the right to reschedule or cancel appointments due to unforeseen circumstances. Please arrive at least 10 minutes before your scheduled appointment time.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-10">3. Cancellation Policy</h2>
          <p>
            We appreciate at least 24 hours&apos; notice for any appointment cancellations or rescheduling. This allows us to offer the slot to other patients in need of treatment.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-10">4. Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site. Unauthorized use of this website may give rise to a claim for damages or be a criminal offense.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-10">5. Limitation of Liability</h2>
          <p>
            Shubhay Clinic shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or services.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-10">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated revision date.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
