
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const handleJoinWaitlist = () => {
    window.open("https://tally.so/r/3EYEM4", "_blank", "noopener,noreferrer");
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold text-senzei-navy">SENZEI</span>
        </a>
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#features" className="text-senzei-navy/80 hover:text-senzei-navy transition-colors">Features</a>
          <a href="#about" className="text-senzei-navy/80 hover:text-senzei-navy transition-colors">About</a>
          <a href="#faq" className="text-senzei-navy/80 hover:text-senzei-navy transition-colors">FAQ</a>
        </div>
        <Button 
          className="bg-senzei-orange hover:bg-senzei-orange/90 text-white"
          onClick={handleJoinWaitlist}
        >
          Join Beta
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
