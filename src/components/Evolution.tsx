
import { useTranslation } from "@/hooks/useTranslation";
import { Brain, Target } from "lucide-react";

const Evolution = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-senzei-taupe/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-4">
              {t('evolution.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal">
            {/* Guidance & Action Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-senzei-taupe/30">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-senzei-orange mr-4" />
                <h3 className="text-2xl font-bold text-senzei-navy">
                  {t('evolution.guidanceSection.title')}
                </h3>
              </div>
              
              <div className="space-y-4 text-senzei-navy/80">
                <p className="text-lg leading-relaxed">
                  {t('evolution.guidanceSection.content')}
                </p>
                <p className="leading-relaxed">
                  {t('evolution.guidanceSection.description')}
                </p>
                <div className="bg-senzei-orange/10 p-4 rounded-lg border-l-4 border-senzei-orange">
                  <p className="font-medium text-senzei-navy">
                    {t('evolution.guidanceSection.action')}
                  </p>
                </div>
              </div>
            </div>

            {/* Ultra-Personalization Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-senzei-taupe/30">
              <div className="flex items-center mb-6">
                <Brain className="h-10 w-10 text-senzei-orange mr-4" />
                <h3 className="text-2xl font-bold text-senzei-navy">
                  {t('evolution.personalizationSection.title')}
                </h3>
              </div>
              
              <div className="space-y-4 text-senzei-navy/80">
                <p className="text-lg leading-relaxed">
                  {t('evolution.personalizationSection.content')}
                </p>
                <div className="bg-senzei-navy/5 p-4 rounded-lg">
                  <p className="leading-relaxed">
                    {t('evolution.personalizationSection.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolution;
