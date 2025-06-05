
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const CTA = () => {
  const { t, language } = useTranslation();
  
  const handleJoinWaitlist = () => {
    const url = language === 'de' 
      ? "https://tally.so/r/w4yxaB" 
      : "https://tally.so/r/3EYEM4";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-senzei-navy to-senzei-navy/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-lg text-white/80 mb-8">
            {t('cta.description')}
          </p>
          <div className="mb-4">
            <p className="text-senzei-orange font-semibold text-lg">
              {t('hero.betaOffer')}
            </p>
          </div>
          <Button 
            size="lg" 
            className="bg-senzei-orange hover:bg-senzei-orange/90 text-white rounded-full px-10 py-6 text-lg"
            onClick={handleJoinWaitlist}
          >
            {t('cta.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
