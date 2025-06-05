
import { useTranslation } from "@/hooks/useTranslation";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Comparison = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Access array data directly from translations
  const userQuotes = translations[language].comparison.userQuotes.quotes;
  const solutions = translations[language].comparison.solutions.items;
  const features = translations[language].comparison.features;

  return (
    <section id="comparison" className="py-20 bg-senzei-taupe/5 reveal">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-6">
            {t('comparison.title')}
          </h2>
        </div>

        {/* User Quotes Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-senzei-navy text-center mb-8">
            {t('comparison.userQuotes.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {userQuotes.map((quote: string, index: number) => (
              <Card key={index} className="border border-senzei-taupe/20 bg-white">
                <CardContent className="p-6">
                  <p className="text-senzei-navy/80 italic text-center">
                    {quote}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How Senzei Solves These Pain Points */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-senzei-navy text-center mb-8">
            {t('comparison.solutions.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution: any, index: number) => (
              <Card key={index} className="border border-senzei-orange/20 bg-senzei-orange/5 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-senzei-navy mb-3 text-center">
                    {solution.title}
                  </h4>
                  <p className="text-senzei-navy/70 text-sm leading-relaxed text-center">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg">
            <thead>
              <tr className="bg-senzei-navy text-white">
                <th className="py-4 px-6 text-left font-semibold">
                  {t('comparison.headers.feature')}
                </th>
                <th className="py-4 px-6 text-left font-semibold">
                  {t('comparison.headers.senzei')}
                </th>
                <th className="py-4 px-6 text-left font-semibold">
                  {t('comparison.headers.others')}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature: any, index: number) => (
                <tr 
                  key={index} 
                  className={`border-b border-senzei-taupe/20 ${
                    index % 2 === 0 ? 'bg-senzei-taupe/5' : 'bg-white'
                  }`}
                >
                  <td className="py-4 px-6 font-semibold text-senzei-navy">
                    {feature.feature}
                  </td>
                  <td className="py-4 px-6 text-senzei-navy bg-senzei-orange/10">
                    {feature.senzei}
                  </td>
                  <td className="py-4 px-6 text-senzei-navy/70">
                    {feature.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
