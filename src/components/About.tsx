
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-senzei-taupe/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-4">{t('about.title')}</h2>
            <p className="text-lg text-senzei-navy/70">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16 reveal">
            <div className="bg-gradient-to-r from-senzei-navy to-senzei-navy/90 p-8 md:p-12 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-senzei-orange/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-senzei-orange/10 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  Our Mission Statement
                </h3>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center max-w-3xl mx-auto">
                  Empowering high performers to live with clarity, structure, and purpose—by transforming complex health data into simple, actionable guidance for body and mind.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 reveal">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-senzei-taupe/30">
                <h3 className="text-xl font-bold text-senzei-navy mb-3">{t(`about.cards.${index}.title`)}</h3>
                {index === 2 ? (
                  <ul className="list-disc pl-5 text-senzei-navy/80 space-y-2">
                    {Array.from({ length: 5 }).map((_, benefitIndex) => (
                      <li key={benefitIndex}>{t(`about.benefits.${benefitIndex}`)}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-senzei-navy/80">
                    {t(`about.cards.${index}.content`)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
