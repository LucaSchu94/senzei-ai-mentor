
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-16 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-senzei-navy mb-8">Senzei – Terms of Service</h1>
          <p className="text-sm text-senzei-navy/70 mb-8">Last updated: May 2025</p>

          <p className="mb-6">
            Welcome to Senzei! By using our website or joining our waitlist, you agree to these terms:
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">1. Use of Service</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>You may use our website and join the waitlist for personal, non-commercial purposes only.</li>
            <li>Do not misuse, attack, or attempt to hack our services.</li>
          </ul>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">2. Waitlist & Communication</h2>
          <p className="mb-6">
            By joining the waitlist, you agree to receive occasional emails about Senzei's beta, launch, and product updates. You can unsubscribe anytime.
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">3. Intellectual Property</h2>
          <p className="mb-6">
            All content, logos, and visuals are the property of Senzei. Do not copy or distribute without permission.
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">4. No Warranty</h2>
          <p className="mb-6">
            Senzei is pre-launch and provided "as is." We do not guarantee uninterrupted or error-free access.
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="mb-6">
            Senzei is not liable for any damages arising from the use of the site or reliance on information provided.
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">6. Links</h2>
          <p className="mb-6">
            Our site may link to external sites (like Tally). We are not responsible for their content or privacy practices.
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">7. Changes</h2>
          <p className="mb-6">
            We may update these terms at any time. Changes will be posted on this page.
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Contact</h2>
          <p className="mb-6">
            Questions? Email us at <a href="mailto:info@senzei.ai" className="text-senzei-orange hover:underline">info@senzei.ai</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
