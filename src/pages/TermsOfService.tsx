
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

const TermsOfService = () => {
  const { t, language } = useTranslation();

  const englishContent = (
    <>
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
    </>
  );

  const germanContent = (
    <>
      <p className="mb-6">
        Willkommen bei Senzei! Durch die Nutzung unserer Website oder das Beitreten zu unserer Warteliste stimmen Sie diesen Bedingungen zu:
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">1. Nutzung des Services</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Sie dürfen unsere Website nur für persönliche, nicht-kommerzielle Zwecke nutzen und der Warteliste beitreten.</li>
        <li>Missbrauchen, attackieren oder versuchen Sie nicht, unsere Services zu hacken.</li>
      </ul>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">2. Warteliste & Kommunikation</h2>
      <p className="mb-6">
        Durch das Beitreten zur Warteliste stimmen Sie zu, gelegentliche E-Mails über Senzeis Beta, Start und Produktupdates zu erhalten. Sie können sich jederzeit abmelden.
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">3. Geistiges Eigentum</h2>
      <p className="mb-6">
        Alle Inhalte, Logos und Grafiken sind Eigentum von Senzei. Kopieren oder verbreiten Sie diese nicht ohne Erlaubnis.
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">4. Keine Gewährleistung</h2>
      <p className="mb-6">
        Senzei befindet sich vor dem Start und wird "wie besehen" bereitgestellt. Wir garantieren keinen ununterbrochenen oder fehlerfreien Zugang.
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">5. Haftungsbeschränkung</h2>
      <p className="mb-6">
        Senzei haftet nicht für Schäden, die durch die Nutzung der Website oder das Vertrauen auf bereitgestellte Informationen entstehen.
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">6. Links</h2>
      <p className="mb-6">
        Unsere Website kann auf externe Websites (wie Tally) verlinken. Wir sind nicht verantwortlich für deren Inhalte oder Datenschutzpraktiken.
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">7. Änderungen</h2>
      <p className="mb-6">
        Wir können diese Bedingungen jederzeit aktualisieren. Änderungen werden auf dieser Seite veröffentlicht.
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Kontakt</h2>
      <p className="mb-6">
        Fragen? Senden Sie uns eine E-Mail an <a href="mailto:info@senzei.ai" className="text-senzei-orange hover:underline">info@senzei.ai</a>.
      </p>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-16 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-senzei-navy mb-8">{t('terms.title')}</h1>
          <p className="text-sm text-senzei-navy/70 mb-8">{t('terms.lastUpdated')}</p>

          {language === 'de' ? germanContent : englishContent}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
