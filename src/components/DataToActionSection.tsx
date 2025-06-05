
import { useTranslation } from "@/hooks/useTranslation";
import { Card, CardContent } from "@/components/ui/card";

const DataToActionSection = () => {
  const { t } = useTranslation();

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
              src="/lovable-uploads/a0002470-2c16-4c31-a2c2-b789a075a8fd.png"
              alt="Data flow visualization showing how Senzei transforms health data into daily actions"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t('dataToAction.howItWorks.steps').map((step: any, index: number) => (
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

        {/* What Makes Senzei Unique */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-senzei-navy text-center mb-8">
            {t('dataToAction.unique.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t('dataToAction.unique.points').map((point: any, index: number) => (
              <Card key={index} className="border border-senzei-taupe/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-senzei-navy mb-3">{point.title}</h4>
                  <p className="text-senzei-navy/70 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Privacy Assurance */}
        <div className="bg-senzei-taupe/10 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-senzei-navy mb-4">
            {t('dataToAction.privacy.title')}
          </h3>
          <p className="text-senzei-navy/80 max-w-2xl mx-auto">
            {t('dataToAction.privacy.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataToActionSection;
