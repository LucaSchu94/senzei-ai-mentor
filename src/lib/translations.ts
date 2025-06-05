
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
    // Features
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
    // Data to Action Section
    dataToAction: {
      title: 'From Data to Daily Action',
      subtitle: 'Senzei uses cutting-edge AI to transform your health data into clear, practical recommendations—so you spend less time analyzing and more time performing.',
      howItWorks: {
        title: 'How It Works',
        steps: [
          {
            title: 'Connect Your Data',
            description: 'Link your favorite apps and wearables—like Apple Health, Google Fit, Oura, Whoop and more. Senzei gathers only the information you choose to share.'
          },
          {
            title: 'AI-Powered Analysis',
            description: 'Our proprietary algorithms spot patterns and trends across your sleep, training, recovery, and more—filtering out the noise to focus on what truly matters.'
          },
          {
            title: 'Personalized Briefings',
            description: 'Each day, you receive a simple, tailored action plan. No confusing dashboards or overwhelming stats—just practical decisions for better results.'
          },
          {
            title: 'Real-World Results',
            description: 'Senzei\'s recommendations adapt as your routines and goals evolve, ensuring your daily actions stay aligned with your highest performance.'
          }
        ]
      },
      unique: {
        title: 'What Makes Senzei Unique',
        points: [
          {
            title: 'Action-Focused',
            description: 'We don\'t just track data—we tell you what to do with it, every day.'
          },
          {
            title: 'Personalization',
            description: 'Our AI learns your rhythms and adapts recommendations to your evolving needs.'
          },
          {
            title: 'Minimal Friction',
            description: 'Integrate with the apps and wearables you already use. No manual tracking required.'
          }
        ]
      },
      privacy: {
        title: 'Privacy Assurance',
        description: 'We never sell your data. All information is securely stored and fully under your control.'
      }
    },
    // About
    about: {
      title: 'About Senzei',
      subtitle: 'Your personal AI-powered high performance mentor',
      mission: {
        title: 'Our Mission Statement',
        content: 'Empowering high performers to live with clarity, structure, and purpose—by transforming complex health data into simple, actionable guidance for body and mind.'
      },
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
    // AI Snapshot
    aiSnapshot: {
      realResults: 'REAL RESULTS',
      realResultsSubtitle: 'See how our AI-driven insights transform recovery journeys',
      title: 'AI SNAPSHOT',
      metrics: {
        sleepingDuration: 'HRV',
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
    // Comparison
    comparison: {
      title: 'How Senzei is different',
      userQuotes: {
        title: 'What Users Really Say About Health Apps',
        quotes: [
          '"I love the data, but I don\'t know what to do with it."',
          '"I wish the app just told me what matters most today."',
          '"I want everything in one place—not a dozen dashboards and subscriptions."',
          '"It\'s expensive, especially with the subscription on top of the device."',
          '"Great for tracking, but not for daily decisions."'
        ]
      },
      solutions: {
        title: 'How Senzei Solves These Pain Points',
        items: [
          {
            title: 'Action > Analytics',
            description: 'Translate wearable data into daily, practical actions—no dashboards, just decisions.'
          },
          {
            title: 'Integration Hub',
            description: 'Combine Oura, Whoop, and other app data in one place for holistic guidance.'
          },
          {
            title: 'Transparent Model',
            description: 'Be clear about pricing and value; reward early users with lifetime or tiered access.'
          }
        ]
      },
      features: [
        {
          feature: 'Focus',
          senzei: 'AI-powered daily briefings for actionable insights',
          others: 'Complex dashboards with endless metrics'
        },
        {
          feature: 'Data Integration',
          senzei: 'Smart integration with mood, sleep, HRV, training & nutrition',
          others: 'Limited to single data sources or manual tracking'
        },
        {
          feature: 'Recommendations',
          senzei: 'Personalized, AI-driven action plans for performance & recovery',
          others: 'Generic tips or overwhelming information'
        },
        {
          feature: 'User Experience',
          senzei: 'Clean, minimalist design focused on clarity',
          others: 'Cluttered interfaces with confusing navigation'
        },
        {
          feature: 'Approach',
          senzei: 'Holistic view combining physical & mental performance',
          others: 'Fragmented tracking of individual metrics'
        },
        {
          feature: 'Personalized Context',
          senzei: 'Explains why recommendations are given, linking data to real-world actions and context',
          others: 'Generic recommendations without context or explanation'
        },
        {
          feature: 'Device Flexibility',
          senzei: 'Works with available devices - no need to wear one device 24/7',
          others: 'Requires specific devices or constant wearing for full value'
        }
      ],
      headers: {
        feature: 'Feature',
        senzei: 'Senzei',
        others: 'Other Health Apps'
      }
    },
    // Evolution
    evolution: {
      title: 'Why Senzei Is the Next Evolution in Health Guidance',
      guidanceSection: {
        title: 'Guidance & Action, Not More Data',
        content: 'Your AI-powered health mentor, not another wearable. Senzei - the AI that makes sense of all your health data, no matter what device you use. Integrate data from Apple Watch, Oura, Garmin, etc.—not just one ecosystem.',
        description: 'Don\'t just rely on wearables—pull in nutrition, subjective mood, journal entries, glucose, even calendar. Position Senzei as "the orchestrator"—the place where all your signals become clarity.',
        action: 'It gives simple daily briefings, micro-habits, routines, and check-ins—actionable "do this now" prompts, not just "your HRV is low."'
      },
      personalizationSection: {
        title: 'Ultra-Personalization',
        content: 'Senzei adapts to context: Mood, workday, travel, meetings, mental state, not just physical recovery. "Senzei learns your patterns and offers guidance tailored to your real life—not just your workouts."',
        description: 'Your health guidance should understand your whole life, not just your fitness metrics. Senzei considers everything that affects your wellbeing.'
      }
    },
    pullquotes: {
      decisions: 'Senzei. Your AI-powered health mentor. No dashboards. Just decisions.',
      clarity: 'Don\'t drown in data. Get clarity, structure, and daily decisions.',
      integration: 'Your WHOOP, Oura, Apple Watch… Senzei makes sense of them all.',
      action: 'Less tracking, more action. Senzei tells you what to do—today.'
    },
    // FAQ
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
          answer: 'Absolutely. We take data privacy and security very seriously. All your personal health data is encrypted and stored securely, and you maintain full control over what data you share with us. We never sell your data. All information is securely stored and fully under your control.'
        }
      ]
    },
    // CTA
    cta: {
      title: 'Ready to unlock your next level of performance?',
      description: 'Join our beta waitlist and be among the first to experience Senzei\'s AI-powered health mentoring.',
      button: 'Join the Beta Waitlist →'
    },
    // Footer
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
        terms: 'Terms of Service',
        imprint: 'Imprint'
      },
      copyright: '© 2025 Senzei. All rights reserved.'
    },
    // Privacy
    privacy: {
      title: 'Senzei – Privacy Policy',
      lastUpdated: 'Last updated: May 2025'
    },
    // Terms
    terms: {
      title: 'Senzei – Terms of Service',
      lastUpdated: 'Last updated: May 2025'
    },
    // Imprint
    imprint: {
      title: 'Imprint',
      companyInfo: 'Company Information'
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
      titleHighlight: '<br>Gesundheitsmentor',
      description: 'Senzei verbindet Ihre täglichen Daten, Gewohnheiten und Biomarker mit künstlicher Intelligenz – und liefert klare, personalisierte Empfehlungen für Höchstleistung, Erholung und intelligente Gesundheit.',
      subtitle: 'Keine verwirrenden Dashboards, keine Komplexität – nur Fokus, Struktur und echte Ergebnisse.',
      cta: 'Der Beta-Warteliste beitreten →'
    },
    // Features
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
    // Data to Action Section
    dataToAction: {
      title: 'Von Daten zu täglichen Handlungen',
      subtitle: 'Senzei nutzt modernste KI, um Ihre Gesundheitsdaten in klare, praktische Empfehlungen umzuwandeln – damit Sie weniger Zeit mit Analysen und mehr Zeit mit Leistung verbringen.',
      howItWorks: {
        title: 'Wie es funktioniert',
        steps: [
          {
            title: 'Verbinden Sie Ihre Daten',
            description: 'Verknüpfen Sie Ihre Lieblings-Apps und Wearables – wie Apple Health, Google Fit, Oura, Whoop und mehr. Senzei sammelt nur die Informationen, die Sie teilen möchten.'
          },
          {
            title: 'KI-gestützte Analyse',
            description: 'Unsere proprietären Algorithmen erkennen Muster und Trends in Ihrem Schlaf, Training, Erholung und mehr – filtern das Rauschen heraus, um sich auf das zu konzentrieren, was wirklich wichtig ist.'
          },
          {
            title: 'Personalisierte Briefings',
            description: 'Jeden Tag erhalten Sie einen einfachen, maßgeschneiderten Aktionsplan. Keine verwirrenden Dashboards oder überwältigenden Statistiken – nur praktische Entscheidungen für bessere Ergebnisse.'
          },
          {
            title: 'Reale Ergebnisse',
            description: 'Senzeis Empfehlungen passen sich an, während sich Ihre Routinen und Ziele entwickeln, und stellen sicher, dass Ihre täglichen Handlungen mit Ihrer Höchstleistung im Einklang bleiben.'
          }
        ]
      },
      unique: {
        title: 'Was Senzei einzigartig macht',
        points: [
          {
            title: 'Handlungsorientiert',
            description: 'Wir verfolgen nicht nur Daten – wir sagen Ihnen jeden Tag, was Sie damit tun sollen.'
          },
          {
            title: 'Personalisierung',
            description: 'Unsere KI lernt Ihre Rhythmen und passt Empfehlungen an Ihre sich entwickelnden Bedürfnisse an.'
          },
          {
            title: 'Minimale Reibung',
            description: 'Integrieren Sie sich mit den Apps und Wearables, die Sie bereits verwenden. Keine manuelle Verfolgung erforderlich.'
          }
        ]
      },
      privacy: {
        title: 'Datenschutzgarantie',
        description: 'Wir verkaufen niemals Ihre Daten. Alle Informationen werden sicher gespeichert und stehen vollständig unter Ihrer Kontrolle.'
      }
    },
    // About
    about: {
      title: 'Über Senzei',
      subtitle: 'Ihr persönlicher KI-gestützter Hochleistungsmentor',
      mission: {
        title: 'Unsere Mission',
        content: 'High Performer dabei zu unterstützen, mit Klarheit, Struktur und Zweck zu leben – indem wir komplexe Gesundheitsdaten in einfache, umsetzbare Anleitungen für Körper und Geist verwandeln.'
      },
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
    // AI Snapshot
    aiSnapshot: {
      realResults: 'ECHTE ERGEBNISSE',
      realResultsSubtitle: 'Sehen Sie, wie unsere KI-gestützten Einblicke Erholungsreisen transformieren',
      title: 'KI-MOMENTAUFNAHME',
      metrics: {
        sleepingDuration: 'HRV',
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
    // Comparison
    comparison: {
      title: 'Wie sich Senzei unterscheidet',
      userQuotes: {
        title: 'Was Nutzer wirklich über Gesundheits-Apps sagen',
        quotes: [
          '"Ich liebe die Daten, aber ich weiß nicht, was ich damit anfangen soll."',
          '"Ich wünschte, die App würde mir einfach sagen, was heute am wichtigsten ist."',
          '"Ich möchte alles an einem Ort – nicht ein Dutzend Dashboards und Abonnements."',
          '"Es ist teuer, besonders mit dem Abonnement zusätzlich zum Gerät."',
          '"Großartig zum Verfolgen, aber nicht für tägliche Entscheidungen."'
        ]
      },
      solutions: {
        title: 'Wie Senzei diese Probleme löst',
        items: [
          {
            title: 'Handlung > Analytik',
            description: 'Wearable-Daten in tägliche, praktische Handlungen übersetzen – keine Dashboards, nur Entscheidungen.'
          },
          {
            title: 'Integrations-Hub',
            description: 'Oura-, Whoop- und andere App-Daten an einem Ort für ganzheitliche Beratung kombinieren.'
          },
          {
            title: 'Transparentes Modell',
            description: 'Klarheit über Preise und Wert; frühe Nutzer mit lebenslangem oder gestuftem Zugang belohnen.'
          }
        ]
      },
      features: [
        {
          feature: 'Fokus',
          senzei: 'KI-gestützte tägliche Briefings für umsetzbare Erkenntnisse',
          others: 'Komplexe Dashboards mit endlosen Metriken'
        },
        {
          feature: 'Datenintegration',
          senzei: 'Intelligente Integration von Stimmung, Schlaf, HRV, Training & Ernährung',
          others: 'Begrenzt auf einzelne Datenquellen oder manuelle Verfolgung'
        },
        {
          feature: 'Empfehlungen',
          senzei: 'Personalisierte, KI-gesteuerte Aktionspläne für Leistung & Erholung',
          others: 'Allgemeine Tipps oder überwältigende Informationen'
        },
        {
          feature: 'Benutzererfahrung',
          senzei: 'Sauberes, minimalistisches Design fokussiert auf Klarheit',
          others: 'Überladene Benutzeroberflächen mit verwirrende Navigation'
        },
        {
          feature: 'Ansatz',
          senzei: 'Ganzheitliche Sicht auf körperliche & geistige Leistung',
          others: 'Fragmentierte Verfolgung einzelner Metriken'
        },
        {
          feature: 'Personalisierter Kontext',
          senzei: 'Erklärt, warum Empfehlungen gegeben werden (Daten mit realen Handlungen und Kontext verknüpfen)',
          others: 'Allgemeine Empfehlungen ohne Kontext oder Erklärung'
        },
        {
          feature: 'Geräte-Flexibilität',
          senzei: 'Funktioniert mit verfügbaren Geräten – kein 24/7-Tragen eines Geräts erforderlich',
          others: 'Erfordert spezifische Geräte oder ständiges Tragen für vollen Nutzen'
        }
      ],
      headers: {
        feature: 'Funktion',
        senzei: 'Senzei',
        others: 'Andere Gesundheits-Apps'
      }
    },
    // Evolution
    evolution: {
      title: 'Warum Senzei die nächste Evolution in der Gesundheitsberatung ist',
      guidanceSection: {
        title: 'Beratung & Handlung, nicht mehr Daten',
        content: 'Ihr KI-gestützter Gesundheitsmentor, nicht nur ein weiteres Wearable. Senzei - die KI, die all Ihre Gesundheitsdaten sinnvoll macht, egal welches Gerät Sie verwenden. Integrieren Sie Daten von Apple Watch, Oura, Garmin usw. – nicht nur ein Ökosystem.',
        description: 'Verlassen Sie sich nicht nur auf Wearables – beziehen Sie Ernährung, subjektive Stimmung, Tagebucheinträge, Glukose, sogar Kalender mit ein. Positionieren Sie Senzei als "den Orchestrator" – den Ort, wo all Ihre Signale zu Klarheit werden.',
        action: 'Es liefert einfache tägliche Briefings, Micro-Gewohnheiten, Routinen und Check-ins – umsetzbare "tue dies jetzt" Aufforderungen, nicht nur "deine HRV ist niedrig".'
      },
      personalizationSection: {
        title: 'Ultra-Personalisierung',
        content: 'Senzei passt sich dem Kontext an: Stimmung, Arbeitstag, Reisen, Meetings, Geisteszustand, nicht nur körperliche Erholung. "Senzei lernt Ihre Muster und bietet Beratung, die auf Ihr echtes Leben zugeschnitten ist – nicht nur auf Ihre Workouts."',
        description: 'Ihre Gesundheitsberatung sollte Ihr ganzes Leben verstehen, nicht nur Ihre Fitness-Metriken. Senzei berücksichtigt alles, was Ihr Wohlbefinden beeinflusst.'
      }
    },
    pullquotes: {
      decisions: 'Senzei. Ihr KI-gestützter Gesundheitsmentor. Keine Dashboards. Nur Entscheidungen.',
      clarity: 'Ertrinken Sie nicht in Daten. Erhalten Sie Klarheit, Struktur und tägliche Entscheidungen.',
      action: 'Weniger Tracking, mehr Handlung. Senzei sagt Ihnen, was zu tun ist – heute.',
      integration: 'Ihr WHOOP, Oura, Apple Watch… Senzei macht aus allem einen Sinn.'
    },
    // FAQ
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
          answer: 'Absolut. Wir nehmen Datenschutz und Sicherheit sehr ernst. Alle Ihre persönlichen Gesundheitsdaten werden verschlüsselt und sicher gespeichert, und Sie behalten die volle Kontrolle darüber, welche Daten Sie mit uns teilen. Wir verkaufen niemals Ihre Daten. Alle Informationen werden sicher gespeichert und stehen vollständig unter Ihrer Kontrolle.'
        }
      ]
    },
    // CTA
    cta: {
      title: 'Bereit, Ihr nächstes Leistungsniveau freizuschalten?',
      description: 'Treten Sie unserer Beta-Warteliste bei und gehören Sie zu den Ersten, die Senzeis KI-gestütztes Gesundheitsmentoring erleben.',
      button: 'Der Beta-Warteliste beitreten →'
    },
    // Footer
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
        terms: 'Nutzungsbedingungen',
        imprint: 'Impressum'
      },
      copyright: '© 2025 Senzei. Alle Rechte vorbehalten.'
    },
    // Privacy
    privacy: {
      title: 'Senzei – Datenschutzerklärung',
      lastUpdated: 'Zuletzt aktualisiert: Mai 2025'
    },
    // Terms
    terms: {
      title: 'Senzei – Nutzungsbedingungen',
      lastUpdated: 'Zuletzt aktualisiert: Mai 2025'
    },
    // Imprint
    imprint: {
      title: 'Impressum',
      companyInfo: 'Firmeninformationen'
    }
  }
};
