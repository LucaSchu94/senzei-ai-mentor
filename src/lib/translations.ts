
export type Language = 'en' | 'de';

export const translations = {
  en: {
    // Navigation
    nav: {
      features: 'Features',
      about: 'About',
      faq: 'FAQ',
      joinBeta: 'Join Beta'
    },
    hero: {
      title: 'Your AI-powered',
      titleHighlight: 'health mentor',
      description: 'Senzei connects your daily data, habits, and biomarkers with artificial intelligence – delivering clear, personalized recommendations for high performance, recovery, and smart health.',
      subtitle: 'No confusing dashboards, no complexity – just focus, structure, and real results.',
      cta: 'Join the Beta Waitlist →'
    },
    features: {
      title: 'Core Features',
      subtitle: 'No complex dashboards – just clarity, structure, and progress',
      items: [
        {
          title: 'AI-powered daily briefings',
          description: 'Get personalized insights on your mood, sleep, training, and focus – all in one clear daily briefing.'
        },
        {
          title: 'Smart data integration',
          description: 'Connect your wearables and health apps for a complete picture of your physical and mental state.'
        },
        {
          title: 'Actionable recommendations',
          description: 'Receive clear, specific actions to improve your recovery, performance, and overall well-being.'
        },
        {
          title: 'Progress tracking',
          description: 'Watch your health markers improve over time with intuitive, minimalist tracking.'
        }
      ]
    },
    about: {
      title: 'About Senzei',
      subtitle: 'Your personal AI-powered high performance mentor',
      cards: [
        {
          title: 'For whom is Senzei designed?',
          content: 'Senzei is the digital mentor for high performers, athletes, coaches, entrepreneurs, health-driven creators – anyone who wants to "own their day" with AI support and get more out of their body and mind.'
        },
        {
          title: 'How does it work?',
          content: 'Senzei connects your data, analyzes patterns, and delivers smart, clear recommendations for your day. By integrating with your existing health data sources, Senzei provides a holistic view of your performance and actionable steps to improve it.'
        },
        {
          title: 'Why choose Senzei?',
          content: 'AI-powered daily briefings tailored to your habits and goals'
        }
      ],
      benefits: [
        'AI-powered daily briefings tailored to your habits and goals',
        'Integrates with your data: mood, sleep, HRV, training & nutrition',
        'Actionable recommendations for recovery, performance & focus',
        'No complex dashboards – just clarity, structure, and progress',
        'Modern, minimalistic premium design'
      ]
    },
    aiSnapshot: {
      realResults: 'REAL RESULTS',
      realResultsSubtitle: 'See how our AI-driven insights transform recovery journeys',
      title: 'AI SNAPSHOT',
      metrics: {
        sleepingDuration: 'Sleeping Duration',
        sleepQuality: 'Sleep Quality',
        sleepDuration: 'Sleep Duration',
        training: 'Training',
        glucose: 'Glucose',
        energyLevel: 'Energy Level'
      },
      values: {
        restDay: 'rest day',
        lowered: 'Lowered',
        exhausted: 'Exhausted'
      },
      recommendation: 'Today your recovery needs extra support.',
      recommendations: [
        'Schedule a 20-minute yoga session before noon to boost circulation and calm your mind.',
        'Practice box-breathing (4x4x4x4) for 5 minutes after lunch to help reduce stress.',
        'Prioritize an early bedtime and avoid caffeine after 2 pm. Hydrate regularly and keep screens off 1 hour before sleep.'
      ],
      caseStudy: {
        title: "Case Study: Michael's Recovery Journey",
        subtitle: 'Weekly Progress Report',
        description: '30-year-old athlete recovering from shoulder injury',
        metrics: {
          metric: 'Metric',
          week1: 'Week 1',
          week4: 'Week 4',
          sleepQuality: 'Sleep Quality',
          recoveryRate: 'Recovery Rate',
          painLevel: 'Pain Level',
          mobility: 'Mobility'
        },
        values: {
          poor: 'Poor (4/10)',
          good: 'Good (8/10)',
          slow: 'Slow',
          accelerated: 'Accelerated',
          painHigh: '7/10',
          painLow: '2/10',
          limited: 'Limited',
          restored: '85% restored'
        },
        quote: '"Senzei helped me understand how my sleep patterns were directly impacting my recovery. Following the AI recommendations improved my sleep quality dramatically, which accelerated my healing process by an estimated 40%."',
        author: '— Michael T.'
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What is Senzei?',
          answer: 'Senzei is your personal AI-powered high performance mentor. It connects your daily data, habits, and biomarkers with artificial intelligence to deliver clear, personalized recommendations for improved health and performance.'
        },
        {
          question: 'How does it work?',
          answer: 'Senzei connects your data, analyzes patterns, and delivers smart, clear recommendations for your day. It integrates with your existing health apps and wearables to provide a comprehensive view of your health status.'
        },
        {
          question: 'When does the beta start?',
          answer: 'Sign up now – beta users will be notified first! Join our waitlist to be among the first to experience Senzei and help shape the product.'
        },
        {
          question: 'What data can Senzei integrate with?',
          answer: 'Senzei can integrate with various data sources including sleep trackers, heart rate monitors, activity trackers, and manual inputs for mood, nutrition, and more.'
        },
        {
          question: 'Is my data secure with Senzei?',
          answer: 'Absolutely. We take data privacy and security very seriously. All your personal health data is encrypted and stored securely, and you maintain full control over what data you share with us.'
        }
      ]
    },
    cta: {
      title: 'Ready to unlock your next level of performance?',
      description: 'Join our beta waitlist and be among the first to experience Senzei\'s AI-powered health mentoring.',
      button: 'Join the Beta Waitlist →'
    },
    footer: {
      tagline: 'Your AI-powered health mentor',
      links: 'Links',
      connect: 'Connect',
      legal: 'Legal',
      navigation: {
        home: 'Home',
        features: 'Features',
        about: 'About',
        faq: 'FAQ'
      },
      contact: {
        email: 'info@senzei.ai',
        twitter: 'Twitter',
        linkedin: 'LinkedIn'
      },
      legalLinks: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      },
      copyright: '© 2025 Senzei. All rights reserved.'
    },
    // Legal pages
    privacy: {
      title: 'Senzei – Privacy Policy',
      lastUpdated: 'Last updated: May 2025'
    },
    terms: {
      title: 'Senzei – Terms of Service',
      lastUpdated: 'Last updated: May 2025'
    }
  },
  de: {
    // Navigation
    nav: {
      features: 'Funktionen',
      about: 'Über uns',
      faq: 'Häufige Fragen',
      joinBeta: 'Beta beitreten'
    },
    hero: {
      title: 'Ihr KI-gestützter',
      titleHighlight: 'Gesundheits<wbr>mentor',
      description: 'Senzei verbindet Ihre täglichen Daten, Gewohnheiten und Biomarker mit künstlicher Intelligenz – und liefert klare, personalisierte Empfehlungen für Höchstleistung, Erholung und intelligente Gesundheit.',
      subtitle: 'Keine verwirrenden Dashboards, keine Komplexität – nur Fokus, Struktur und echte Ergebnisse.',
      cta: 'Der Beta-Warteliste beitreten →'
    },
    features: {
      title: 'Kernfunktionen',
      subtitle: 'Keine komplexen Dashboards – nur Klarheit, Struktur und Fortschritt',
      items: [
        {
          title: 'KI-gestützte tägliche Briefings',
          description: 'Erhalten Sie personalisierte Einblicke in Ihre Stimmung, Ihren Schlaf, Ihr Training und Ihren Fokus – alles in einem klaren täglichen Briefing.'
        },
        {
          title: 'Intelligente Datenintegration',
          description: 'Verbinden Sie Ihre Wearables und Gesundheits-Apps für ein vollständiges Bild Ihres körperlichen und geistigen Zustands.'
        },
        {
          title: 'Umsetzbare Empfehlungen',
          description: 'Erhalten Sie klare, spezifische Maßnahmen zur Verbesserung Ihrer Erholung, Leistung und Ihres allgemeinen Wohlbefindens.'
        },
        {
          title: 'Fortschrittsverfolgung',
          description: 'Beobachten Sie, wie sich Ihre Gesundheitsmarker im Laufe der Zeit mit intuitiver, minimalistischer Verfolgung verbessern.'
        }
      ]
    },
    about: {
      title: 'Über Senzei',
      subtitle: 'Ihr persönlicher KI-gestützter Hochleistungsmentor',
      cards: [
        {
          title: 'Für wen ist Senzei konzipiert?',
          content: 'Senzei ist der digitale Mentor für Hochleistungssportler, Athleten, Trainer, Unternehmer, gesundheitsorientierte Kreative – für alle, die ihren Tag mit KI-Unterstützung "besitzen" und mehr aus ihrem Körper und Geist herausholen möchten.'
        },
        {
          title: 'Wie funktioniert es?',
          content: 'Senzei verbindet Ihre Daten, analysiert Muster und liefert intelligente, klare Empfehlungen für Ihren Tag. Durch die Integration mit Ihren bestehenden Gesundheitsdatenquellen bietet Senzei eine ganzheitliche Sicht auf Ihre Leistung und umsetzbare Schritte zur Verbesserung.'
        },
        {
          title: 'Warum Senzei wählen?',
          content: 'KI-gestützte tägliche Briefings, die auf Ihre Gewohnheiten und Ziele zugeschnitten sind'
        }
      ],
      benefits: [
        'KI-gestützte tägliche Briefings, die auf Ihre Gewohnheiten und Ziele zugeschnitten sind',
        'Integration mit Ihren Daten: Stimmung, Schlaf, HRV, Training und Ernährung',
        'Umsetzbare Empfehlungen für Erholung, Leistung und Fokus',
        'Keine komplexen Dashboards – nur Klarheit, Struktur und Fortschritt',
        'Modernes, minimalistisches Premium-Design'
      ]
    },
    aiSnapshot: {
      realResults: 'ECHTE ERGEBNISSE',
      realResultsSubtitle: 'Sehen Sie, wie unsere KI-gestützten Einblicke Erholungsreisen transformieren',
      title: 'KI-MOMENTAUFNAHME',
      metrics: {
        sleepingDuration: 'Schlafdauer',
        sleepQuality: 'Schlafqualität',
        sleepDuration: 'Schlafdauer',
        training: 'Training',
        glucose: 'Glukose',
        energyLevel: 'Energielevel'
      },
      values: {
        restDay: 'Ruhetag',
        lowered: 'Gesenkt',
        exhausted: 'Erschöpft'
      },
      recommendation: 'Heute braucht Ihre Erholung zusätzliche Unterstützung.',
      recommendations: [
        'Planen Sie eine 20-minütige Yoga-Session vor dem Mittag, um die Durchblutung zu fördern und Ihren Geist zu beruhigen.',
        'Praktizieren Sie nach dem Mittagessen 5 Minuten lang Box-Atmung (4x4x4x4), um Stress abzubauen.',
        'Priorisieren Sie eine frühe Schlafenszeit und vermeiden Sie Koffein nach 14 Uhr. Trinken Sie regelmäßig Wasser und schalten Sie Bildschirme 1 Stunde vor dem Schlafengehen aus.'
      ],
      caseStudy: {
        title: 'Fallstudie: Michaels Erholungsreise',
        subtitle: 'Wöchentlicher Fortschrittsbericht',
        description: '30-jähriger Athlet erholt sich von Schulterverletzung',
        metrics: {
          metric: 'Metrik',
          week1: 'Woche 1',
          week4: 'Woche 4',
          sleepQuality: 'Schlafqualität',
          recoveryRate: 'Erholungsrate',
          painLevel: 'Schmerzniveau',
          mobility: 'Mobilität'
        },
        values: {
          poor: 'Schlecht (4/10)',
          good: 'Gut (8/10)',
          slow: 'Langsam',
          accelerated: 'Beschleunigt',
          painHigh: '7/10',
          painLow: '2/10',
          limited: 'Begrenzt',
          restored: '85% wiederhergestellt'
        },
        quote: '"Senzei half mir zu verstehen, wie sich meine Schlafmuster direkt auf meine Erholung auswirkten. Das Befolgen der KI-Empfehlungen verbesserte meine Schlafqualität dramatisch, was meinen Heilungsprozess um geschätzte 40% beschleunigte."',
        author: '— Michael T.'
      }
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      items: [
        {
          question: 'Was ist Senzei?',
          answer: 'Senzei ist Ihr persönlicher KI-gestützter Hochleistungsmentor. Es verbindet Ihre täglichen Daten, Gewohnheiten und Biomarker mit künstlicher Intelligenz, um klare, personalisierte Empfehlungen für verbesserte Gesundheit und Leistung zu liefern.'
        },
        {
          question: 'Wie funktioniert es?',
          answer: 'Senzei verbindet Ihre Daten, analysiert Muster und liefert intelligente, klare Empfehlungen für Ihren Tag. Es integriert sich mit Ihren bestehenden Gesundheits-Apps und Wearables, um eine umfassende Sicht auf Ihren Gesundheitsstatus zu bieten.'
        },
        {
          question: 'Wann startet die Beta?',
          answer: 'Melden Sie sich jetzt an – Beta-Nutzer werden zuerst benachrichtigt! Treten Sie unserer Warteliste bei, um zu den Ersten zu gehören, die Senzei erleben und das Produkt mitgestalten.'
        },
        {
          question: 'Mit welchen Daten kann Senzei integriert werden?',
          answer: 'Senzei kann mit verschiedenen Datenquellen integriert werden, einschließlich Schlaf-Trackern, Herzfrequenzmessern, Aktivitäts-Trackern und manuellen Eingaben für Stimmung, Ernährung und mehr.'
        },
        {
          question: 'Sind meine Daten bei Senzei sicher?',
          answer: 'Absolut. Wir nehmen Datenschutz und Sicherheit sehr ernst. Alle Ihre persönlichen Gesundheitsdaten werden verschlüsselt und sicher gespeichert, und Sie behalten die volle Kontrolle darüber, welche Daten Sie mit uns teilen.'
        }
      ]
    },
    cta: {
      title: 'Bereit, Ihr nächstes Leistungsniveau freizuschalten?',
      description: 'Treten Sie unserer Beta-Warteliste bei und gehören Sie zu den Ersten, die Senzeis KI-gestütztes Gesundheitsmentoring erleben.',
      button: 'Der Beta-Warteliste beitreten →'
    },
    footer: {
      tagline: 'Ihr KI-gestützter Gesundheitsmentor',
      links: 'Links',
      connect: 'Verbinden',
      legal: 'Rechtliches',
      navigation: {
        home: 'Startseite',
        features: 'Funktionen',
        about: 'Über uns',
        faq: 'Häufige Fragen'
      },
      contact: {
        email: 'info@senzei.ai',
        twitter: 'Twitter',
        linkedin: 'LinkedIn'
      },
      legalLinks: {
        privacy: 'Datenschutzerklärung',
        terms: 'Nutzungsbedingungen'
      },
      copyright: '© 2025 Senzei. Alle Rechte vorbehalten.'
    },
    // Legal pages
    privacy: {
      title: 'Senzei – Datenschutzerklärung',
      lastUpdated: 'Zuletzt aktualisiert: Mai 2025'
    },
    terms: {
      title: 'Senzei – Nutzungsbedingungen',
      lastUpdated: 'Zuletzt aktualisiert: Mai 2025'
    }
  }
};
