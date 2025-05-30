import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslation";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Navbar = () => {
  const { t, language } = useTranslation();
  const { scrollDirection, isAtTop } = useScrollDirection();
  
  const handleJoinWaitlist = () => {
    const url = language === 'de' ? "https://tally.so/r/w4yxaB" : "https://tally.so/r/3EYEM4";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Determine if navbar should be visible
  const isVisible = isAtTop || scrollDirection === 'up';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        <a href="#" className="flex items-center">
          <img alt="Senzei Logo" src="/lovable-uploads/36e93789-c927-47ca-a517-ccd7609e6fc4.png" className="h-[100px] w-200 object-contain" />
        </a>
        <div className="hidden md:flex space-x-8 text-base">
          <a href="#features" className="text-senzei-navy/80 hover:text-senzei-navy transition-colors">{t('nav.features')}</a>
          <a href="#about" className="text-senzei-navy/80 hover:text-senzei-navy transition-colors">{t('nav.about')}</a>
          <a href="#faq" className="text-senzei-navy/80 hover:text-senzei-navy transition-colors">{t('nav.faq')}</a>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSelector />
          <Button className="bg-senzei-orange hover:bg-senzei-orange/90 text-white" onClick={handleJoinWaitlist}>
            {t('nav.joinBeta')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
