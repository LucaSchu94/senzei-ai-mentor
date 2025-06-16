
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
    <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-senzei-orange/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            {t('cta.description')}
          </p>
          <div className="mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 inline-block">
              <p className="text-senzei-orange font-semibold text-lg">
                {t('hero.betaOffer')}
              </p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-senzei-navy hover:bg-white/90 rounded-full px-12 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
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
