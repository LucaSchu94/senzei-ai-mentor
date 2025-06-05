
import { useTranslation } from "@/hooks/useTranslation";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const DataToActionSection = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Access array data directly from translations
  const steps = translations[language].dataToAction.howItWorks.steps;
  const uniquePoints = translations[language].dataToAction.unique.points;

  // Select the appropriate flowchart image based on language
  const flowchartImage = language === 'de' 
    ? "/lovable-uploads/senzei_flowchart-technology 3.0-de.png"
    : "/lovable-uploads/senzei_flowchart-technology 3.0-eng.png";

  // Select the appropriate iPhone mock image based on language
  const dailyBriefingImage = language === 'de'
    ? "/lovable-uploads/senzei_daily-briefing-de.png"
    : "/lovable-uploads/senzei_daily-briefing-eng.png";

  return (
    <section id="data-to-action" className="py-20 bg-white reveal">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-6">
            {t('dataToAction.title')}
          </h2>
          <p className="text-lg md:text-xl text-senzei-navy/80 max-w-4xl mx-auto leading-relaxed">
            {t('dataToAction.subtitle')}
          </p>
        </div>

        {/* Data Flow Visual */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-senzei-navy text-center mb-8">
            {t('dataToAction.howItWorks.title')}
          </h3>
          <div className="flex justify-center mb-12">
            <img 
              src={flowchartImage}
              alt="Senzei technology flowchart showing how AI transforms health data into personalized daily actions" 
              className="max-w-full h-auto rounded-xl shadow-lg" 
            />
          </div>
        </div>

        {/* How It Works - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* iPhone Mock Visual */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={dailyBriefingImage}
              alt="iPhone showing Senzei daily briefing with personalized health recommendations"
              className="max-w-sm h-auto rounded-xl shadow-lg"
            />
          </div>
          
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step: any, index: number) => (
              <Card key={index} className="border border-senzei-taupe/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-senzei-orange text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-senzei-navy">{step.title}</h4>
                  </div>
                  <p className="text-senzei-navy/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Makes Senzei Unique */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-senzei-navy text-center mb-8">
            {t('dataToAction.unique.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {uniquePoints.map((point: any, index: number) => <Card key={index} className="border border-senzei-taupe/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-senzei-navy mb-3">{point.title}</h4>
                  <p className="text-senzei-navy/70 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Privacy Assurance */}
        
      </div>
    </section>
  );
};

export default DataToActionSection;
