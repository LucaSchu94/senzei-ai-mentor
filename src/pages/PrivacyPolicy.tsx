
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-16 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-senzei-navy mb-8">Senzei – Privacy Policy</h1>
          <p className="text-sm text-senzei-navy/70 mb-8">Last updated: May 2025</p>

          <p className="mb-6">
            Senzei ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you sign up for our waitlist or use our website (senzei.ai).
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">What information do we collect?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Your email address (when you join the beta waitlist via Tally)</li>
            <li>(Optionally) Your name if provided</li>
          </ul>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">How do we use your information?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>To contact you about Senzei's beta launch and product updates</li>
            <li>To gather feedback to improve our product</li>
          </ul>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Will your information be shared?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>We do not sell or rent your data.</li>
            <li>Your data is securely processed using Tally and reputable email providers.</li>
            <li>We may share anonymized, aggregated data for analytics (never personal details).</li>
          </ul>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">How do we protect your data?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>We use industry-standard security measures.</li>
            <li>Access to your data is limited to authorized team members only.</li>
          </ul>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Your rights</h2>
          <p className="mb-6">
            You can request to view, update, or delete your data at any time. Just email us at <a href="mailto:info@senzei.ai" className="text-senzei-orange hover:underline">info@senzei.ai</a>.
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Third-Party Services</h2>
          <p className="mb-6">
            We use Tally (tally.so) to collect waitlist signups. Their privacy practices apply as well.
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Children's Privacy</h2>
          <p className="mb-6">
            Senzei is not intended for children under 16.
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Changes</h2>
          <p className="mb-6">
            We may update this policy. We will notify you of material changes via email or our website.
          </p>

          <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Contact</h2>
          <p className="mb-6">
            For questions, reach out to <a href="mailto:info@senzei.ai" className="text-senzei-orange hover:underline">info@senzei.ai</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
