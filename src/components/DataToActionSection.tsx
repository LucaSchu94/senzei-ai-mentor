
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { ChevronRight, Database, Brain, Target, TrendingUp } from "lucide-react";

const DataToActionSection = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

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

  // Icons for each step
  const stepIcons = [Database, Brain, Target, TrendingUp];

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

        {/* Interactive How It Works Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-senzei-navy text-center mb-8">
            {t('dataToAction.howItWorks.title')}
          </h3>
          
          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Sidebar - Step Navigation */}
            <div className="lg:col-span-4 space-y-3">
              {steps.map((step: any, index: number) => {
                const IconComponent = stepIcons[index];
                const isActive = activeStep === index;
                
                return (
                  <div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                      isActive 
                        ? 'bg-senzei-orange text-white border-senzei-orange shadow-lg transform scale-105' 
                        : 'bg-white text-senzei-navy border-senzei-taupe/20 hover:border-senzei-orange/30 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                        isActive ? 'bg-white text-senzei-orange' : 'bg-senzei-orange text-white'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                        <div className="flex items-center">
                          <IconComponent className="w-4 h-4 mr-1" />
                          <span className={`text-xs ${isActive ? 'text-white/90' : 'text-senzei-navy/60'}`}>
                            {step.title}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${
                        isActive ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Content Window */}
            <div className="lg:col-span-8">
              <Card className="border-2 border-senzei-taupe/20 bg-gradient-to-br from-white to-gray-50/50 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-senzei-orange text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {activeStep + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-senzei-navy mb-1">
                        {steps[activeStep].title}
                      </h4>
                      <div className="flex space-x-2">
                        {steps.map((_: any, index: number) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === activeStep ? 'bg-senzei-orange' : 'bg-senzei-taupe/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-senzei-navy/80 text-base leading-relaxed mb-6">
                    {steps[activeStep].description}
                  </p>

                  {/* Visual Content Area */}
                  <div className="bg-white rounded-lg p-6 border border-senzei-taupe/10">
                    <div className="flex justify-center">
                      <img 
                        src={flowchartImage}
                        alt="Senzei technology flowchart showing how AI transforms health data into personalized daily actions" 
                        className="max-w-full h-auto rounded-lg shadow-md" 
                      />
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="px-4 py-2 text-sm font-medium text-senzei-navy border border-senzei-taupe/30 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                      disabled={activeStep === steps.length - 1}
                      className="px-4 py-2 text-sm font-medium bg-senzei-orange text-white rounded-lg hover:bg-senzei-orange/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* What Makes Senzei Unique - Two Column Layout */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-senzei-navy text-center mb-8">
            {t('dataToAction.unique.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Unique Points */}
            <div className="space-y-6">
              {uniquePoints.map((point: any, index: number) => (
                <Card key={index} className="border border-senzei-taupe/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-senzei-navy mb-3">{point.title}</h4>
                    <p className="text-senzei-navy/70 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Column - iPhone Mock */}
            <div className="flex justify-center">
              <img 
                src={dailyBriefingImage}
                alt="iPhone showing Senzei daily briefing with personalized health recommendations"
                className="max-w-xs md:max-w-sm h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataToActionSection;
