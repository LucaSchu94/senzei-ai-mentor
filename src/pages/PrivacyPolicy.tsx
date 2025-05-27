
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

const PrivacyPolicy = () => {
  const { t, language } = useTranslation();

  const englishContent = (
    <>
      <p className="mb-6">
        Senzei is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you sign up for our waitlist or use our website (senzei.ai).
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
    </>
  );

  const germanContent = (
    <>
      <p className="mb-6">
        Senzei verpflichtet sich zum Schutz Ihrer Privatsphäre. Diese Datenschutzerklärung erklärt, wie wir Ihre Informationen sammeln, verwenden und schützen, wenn Sie sich für unsere Warteliste anmelden oder unsere Website (senzei.ai) nutzen.
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Welche Informationen sammeln wir?</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Ihre E-Mail-Adresse (wenn Sie der Beta-Warteliste über Tally beitreten)</li>
        <li>(Optional) Ihr Name, falls angegeben</li>
      </ul>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Wie verwenden wir Ihre Informationen?</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Um Sie über Senzeis Beta-Start und Produktupdates zu kontaktieren</li>
        <li>Um Feedback zu sammeln und unser Produkt zu verbessern</li>
      </ul>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Werden Ihre Informationen geteilt?</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Wir verkaufen oder vermieten Ihre Daten nicht.</li>
        <li>Ihre Daten werden sicher über Tally und seriöse E-Mail-Anbieter verarbeitet.</li>
        <li>Wir können anonymisierte, aggregierte Daten für Analysen teilen (niemals persönliche Details).</li>
      </ul>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Wie schützen wir Ihre Daten?</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Wir verwenden branchenübliche Sicherheitsmaßnahmen.</li>
        <li>Der Zugang zu Ihren Daten ist nur auf autorisierte Teammitglieder beschränkt.</li>
      </ul>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Ihre Rechte</h2>
      <p className="mb-6">
        Sie können jederzeit die Einsicht, Aktualisierung oder Löschung Ihrer Daten beantragen. Senden Sie uns einfach eine E-Mail an <a href="mailto:info@senzei.ai" className="text-senzei-orange hover:underline">info@senzei.ai</a>.
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Drittanbieterdienste</h2>
      <p className="mb-6">
        Wir verwenden Tally (tally.so) zur Erfassung von Wartelisten-Anmeldungen. Deren Datenschutzpraktiken gelten ebenfalls.
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Kinderschutz</h2>
      <p className="mb-6">
        Senzei ist nicht für Kinder unter 16 Jahren bestimmt.
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Änderungen</h2>
      <p className="mb-6">
        Wir können diese Richtlinie aktualisieren. Wir werden Sie über wesentliche Änderungen per E-Mail oder über unsere Website benachrichtigen.
      </p>

      <h2 className="text-xl font-bold text-senzei-navy mt-8 mb-4">Kontakt</h2>
      <p className="mb-6">
        Bei Fragen wenden Sie sich an <a href="mailto:info@senzei.ai" className="text-senzei-orange hover:underline">info@senzei.ai</a>.
      </p>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-16 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-senzei-navy mb-8">{t('privacy.title')}</h1>
          <p className="text-sm text-senzei-navy/70 mb-8">{t('privacy.lastUpdated')}</p>

          {language === 'de' ? germanContent : englishContent}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
