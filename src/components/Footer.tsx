
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white py-12 border-t border-senzei-taupe/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold text-senzei-navy">Senzei</Link>
            <p className="mt-2 text-sm text-senzei-navy/70">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 md:mt-0">
            <div>
              <h4 className="font-medium text-senzei-navy mb-3">{t('footer.links')}</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">{t('footer.navigation.home')}</Link></li>
                <li><a href="#features" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">{t('footer.navigation.features')}</a></li>
                <li><a href="#about" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">{t('footer.navigation.about')}</a></li>
                <li><a href="#faq" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">{t('footer.navigation.faq')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-senzei-navy mb-3">{t('footer.connect')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@senzei.ai" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">{t('footer.contact.email')}</a></li>
                <li><a href="#" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">{t('footer.contact.twitter')}</a></li>
                <li><a href="#" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">{t('footer.contact.linkedin')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-senzei-navy mb-3">{t('footer.legal')}</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy-policy" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">{t('footer.legalLinks.privacy')}</Link></li>
                <li><Link to="/terms-of-service" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">{t('footer.legalLinks.terms')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-senzei-taupe/20 text-center text-sm text-senzei-navy/60">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
