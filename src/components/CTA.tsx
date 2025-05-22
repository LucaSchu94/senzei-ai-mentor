
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-senzei-navy to-senzei-navy/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/36e85ed4-3d57-46de-b0c1-7ffdb9f7bd97.png" 
              alt="Senzei Logo" 
              className="h-16 object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to unlock your next level of performance?</h2>
          <p className="text-lg text-white/80 mb-8">
            Join our beta waitlist and be among the first to experience Senzei's AI-powered health mentoring.
          </p>
          <Button size="lg" className="bg-senzei-orange hover:bg-senzei-orange/90 text-white rounded-full px-10 py-6 text-lg">
            Join the Beta Waitlist →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
