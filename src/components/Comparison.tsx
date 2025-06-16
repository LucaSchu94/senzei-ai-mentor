
import { useTranslation } from "@/hooks/useTranslation";
import { Check, X } from "lucide-react";

const Comparison = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-senzei-navy reveal">
            {t('comparison.title')}
          </h2>

          {/* User Quotes Section */}
          <div className="mb-16 reveal">
            <h3 className="text-2xl font-bold mb-8 text-senzei-navy text-center">
              {t('comparison.userQuotes.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {t('comparison.userQuotes.quotes').map((quote: string, index: number) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-300">
                  <p className="text-gray-700 italic">{quote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="mb-16 reveal">
            <h3 className="text-2xl font-bold mb-8 text-senzei-navy text-center">
              {t('comparison.solutions.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {t('comparison.solutions.items').map((item: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="bg-senzei-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-senzei-orange" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-senzei-navy">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto reveal">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-senzei-navy border-b">
                    {t('comparison.headers.feature')}
                  </th>
                  <th className="text-left p-4 font-semibold text-senzei-orange border-b">
                    {t('comparison.headers.senzei')}
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-600 border-b">
                    {t('comparison.headers.others')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t('comparison.features').map((feature: any, index: number) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-senzei-navy">{feature.feature}</td>
                    <td className="p-4 text-gray-700">
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-senzei-orange mt-0.5 flex-shrink-0" />
                        <span>{feature.senzei}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">
                      <div className="flex items-start gap-3">
                        <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>{feature.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
