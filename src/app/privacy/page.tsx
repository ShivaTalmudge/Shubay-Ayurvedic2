import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-charcoal mb-8">Privacy <span className="text-primary italic">Policy</span></h1>
        <div className="prose prose-lg max-w-none text-charcoal/70 space-y-6">
          <p>Last updated: April 10, 2026</p>
          <p>
            At Shubhay Clinic, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website or use our services.
          </p>
          
          <h2 className="text-2xl font-bold text-charcoal mt-10">1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, phone number, email address, and health-related information when you book an appointment or contact us through our website.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-10">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and confirm your appointment bookings</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you important updates regarding our services</li>
            <li>Improve the quality of our medical care and website experience</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal mt-10">3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. Your health records are handled with the utmost confidentiality.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-10">4. Third-Party Services</h2>
          <p>
            We do not sell or trade your personal information to third parties. We may use trusted service providers to help us operate our website and conduct our business, provided they agree to keep your information confidential.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-10">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="font-bold">
            Shubhay Clinic<br />
            Moshi, Pune, Maharashtra 411070<br />
            Phone: 09970836811
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
