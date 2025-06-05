
import { useTranslation } from "@/hooks/useTranslation";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
        </div>

        {/* Feature Comparison - Mobile Cards (hidden on desktop) */}
        <div className="md:hidden mb-16">
          <h3 className="text-xl font-bold text-senzei-navy text-center mb-6">
            {t('comparison.title')}
          </h3>
          <div className="space-y-4">
            {features.map((feature: any, index: number) => (
              <Card key={index} className="border border-senzei-taupe/20 bg-white shadow-lg">
                <CardContent className="p-4">
                  <h4 className="font-bold text-senzei-navy mb-3 text-sm">
                    {feature.feature}
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-senzei-orange/10 p-3 rounded-lg">
                      <div className="font-semibold text-senzei-navy text-xs mb-1">
                        {t('comparison.headers.senzei')}
                      </div>
                      <div className="text-senzei-navy text-sm">
                        {feature.senzei}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-semibold text-senzei-navy text-xs mb-1">
                        {t('comparison.headers.others')}
                      </div>
                      <div className="text-senzei-navy/70 text-sm">
                        {feature.others}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feature Comparison Table - Desktop (hidden on mobile) */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-senzei-navy hover:bg-senzei-navy">
                  <TableHead className="text-white font-semibold w-1/3 py-4 px-6">
                    {t('comparison.headers.feature')}
                  </TableHead>
                  <TableHead className="text-white font-semibold w-1/3 py-4 px-6">
                    {t('comparison.headers.senzei')}
                  </TableHead>
                  <TableHead className="text-white font-semibold w-1/3 py-4 px-6">
                    {t('comparison.headers.others')}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature: any, index: number) => (
                  <TableRow 
                    key={index} 
                    className={`border-b border-senzei-taupe/20 hover:bg-senzei-taupe/5 ${
                      index % 2 === 0 ? 'bg-senzei-taupe/5' : 'bg-white'
                    }`}
                  >
                    <TableCell className="font-semibold text-senzei-navy py-4 px-6 w-1/3">
                      {feature.feature}
                    </TableCell>
                    <TableCell className="text-senzei-navy bg-senzei-orange/10 py-4 px-6 w-1/3">
                      {feature.senzei}
                    </TableCell>
                    <TableCell className="text-senzei-navy/70 py-4 px-6 w-1/3">
                      {feature.others}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
