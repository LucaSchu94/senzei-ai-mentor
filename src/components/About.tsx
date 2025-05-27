
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
