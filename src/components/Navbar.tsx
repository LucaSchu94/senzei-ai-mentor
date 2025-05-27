import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslation";
const Navbar = () => {
  const {
    t,
    language
  } = useTranslation();
  const handleJoinWaitlist = () => {
    const url = language === 'de' ? "https://tally.so/r/w4yxaB" : "https://tally.so/r/3EYEM4";
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-0">
        <a href="#" className="flex items-center">
          <img alt="Senzei Logo" src="/lovable-uploads/36e93789-c927-47ca-a517-ccd7609e6fc4.png" className="h-[125px] w-200 object-cover" />
        </a>
        <div className="hidden md:flex space-x-8 text-sm">
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
    </nav>;
};
export default Navbar;