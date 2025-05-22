
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1A1F2C]/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/5a0116a1-f22f-49f6-ba2f-6360e98ea4aa.png" 
            alt="Senzei Logo" 
            className="h-10"
          />
        </a>
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
        </div>
        <Button className="bg-senzei-orange hover:bg-senzei-orange/90 text-white">
          Join Beta
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
