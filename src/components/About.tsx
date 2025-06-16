
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-senzei-taupe/10 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-senzei-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-senzei-navy/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-senzei-navy/70 leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16 reveal">
            <div className="bg-gradient-primary p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden border border-white/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-senzei-orange/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  {t('about.mission.title')}
                </h3>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center max-w-3xl mx-auto">
                  {t('about.mission.content')}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 reveal">
            {Array.from({ length: 3 }).map((_, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-senzei-orange/30 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-senzei-navy mb-4 group-hover:text-senzei-orange transition-colors duration-300">
                      {t(`about.cards.${index}.title`)}
                    </h3>
                    {index === 2 ? (
                      <ul className="list-none space-y-3 text-senzei-navy/80">
                        {Array.from({ length: 5 }).map((_, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-senzei-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{t(`about.benefits.${benefitIndex}`)}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-senzei-navy/80 leading-relaxed">
                        {t(`about.cards.${index}.content`)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
