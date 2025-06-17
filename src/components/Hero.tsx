
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

  const heroImage = language === 'de' 
    ? "/lovable-uploads/lovable-uploads_hero-de.png" 
    : "/lovable-uploads/lovable-uploads_hero-eng.png";
  
  return (
    <section className="flex items-start pt-16 overflow-hidden bg-gradient-primary relative pb-32">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-senzei-orange/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-senzei-orange/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
          <div className="py-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
                {t('hero.title')} <span 
                  className="text-senzei-orange drop-shadow-lg" 
                  dangerouslySetInnerHTML={{ __html: t('hero.titleHighlight') }}
                />
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-lg mb-4 leading-relaxed">
                {t('hero.description')}
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="mb-6">
                <div className="bg-senzei-orange/20 backdrop-blur-sm rounded-2xl p-4 border border-senzei-orange/30">
                  <p className="text-senzei-orange font-semibold text-lg">
                    {t('hero.betaOffer')}
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-senzei-orange hover:bg-senzei-orange/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={handleJoinWaitlist}
                >
                  {t('hero.cta')}
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center reveal">
            <div className="absolute w-80 h-80 bg-white/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="relative z-10 flex justify-center transform hover:scale-105 transition-transform duration-300">
              <img 
                src={heroImage} 
                alt="Senzei App Preview" 
                className="max-w-full h-auto md:max-w-[80%] lg:max-w-[75%] rounded-3xl shadow-2xl border border-white/20" 
              />
            </div>
          </div>
        </div>
        {/* --- Clean blockquote section --- */}
        <div className="w-full flex flex-col items-center mt-8">
          <blockquote className="text-2xl sm:text-3xl font-bold italic text-white drop-shadow-lg text-center">
            Senzei – Your AI powered health mentor
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hero;
