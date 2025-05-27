import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t, language } = useTranslation();
  
  const handleJoinWaitlist = () => {
    const url = language === 'de' 
      ? "https://tally.so/r/w4yxaB" 
      : "https://tally.so/r/3EYEM4";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Conditional image source based on language
  const heroImageSrc = language === 'de' 
    ? "/lovable-uploads/615d72c3-4c54-4308-adc4-5445165f1e59.png" 
    : "/lovable-uploads/a0002470-2c16-4c31-a2c2-b789a075a8fd.png";
  
  return (
    <section className="min-h-[90vh] flex items-center pt-16 overflow-hidden bg-senzei-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="py-20 bg-senzei-navy rounded-xl shadow-lg p-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              {t('hero.title')} <span 
                className="text-senzei-orange" 
                dangerouslySetInnerHTML={{ __html: t('hero.titleHighlight') }}
              />
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-lg mb-4">
              {t('hero.description')}
            </p>
            <p className="text-white/80 mb-6">
              {t('hero.subtitle')}
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-senzei-orange hover:bg-senzei-orange/90 text-white rounded-full px-8"
                onClick={handleJoinWaitlist}
              >
                {t('hero.cta')}
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center reveal">
            <div className="absolute w-72 h-72 bg-senzei-orange/20 rounded-full filter blur-3xl"></div>
            <img 
              src={heroImageSrc} 
              alt="Senzei App Preview" 
              className="relative z-10 max-w-full h-auto md:max-w-[80%] lg:max-w-[75%] rounded-xl shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
