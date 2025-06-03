
import { useTranslation } from "@/hooks/useTranslation";
import Footer from "@/components/Footer";

const Imprint = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-8">
            {t('imprint.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-senzei-taupe/10 p-8 rounded-xl">
              <h2 className="text-xl font-semibold text-senzei-navy mb-4">
                {t('imprint.companyInfo')}
              </h2>
              <div className="text-senzei-navy/80 space-y-2">
                <p className="font-medium">Senzei</p>
                <p>c/o IP-Management #5678</p>
                <p>Ludwig-Erhard-Str. 18</p>
                <p>20459 Hamburg</p>
                <p>Deutschland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Imprint;
