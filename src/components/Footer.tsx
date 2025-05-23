
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-senzei-taupe/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold text-senzei-navy">Senzei</Link>
            <p className="mt-2 text-sm text-senzei-navy/70">
              Your AI-powered health mentor
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 md:mt-0">
            <div>
              <h4 className="font-medium text-senzei-navy mb-3">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">Home</Link></li>
                <li><a href="#features" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">Features</a></li>
                <li><a href="#about" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">About</a></li>
                <li><a href="#faq" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-senzei-navy mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@senzei.ai" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">info@senzei.ai</a></li>
                <li><a href="#" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">Twitter</a></li>
                <li><a href="#" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-senzei-navy mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy-policy" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-senzei-navy/70 hover:text-senzei-orange transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-senzei-taupe/20 text-center text-sm text-senzei-navy/60">
          <p>© 2025 Senzei. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
