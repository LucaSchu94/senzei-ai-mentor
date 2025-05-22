
import { Button } from "@/components/ui/button";

const CTA = () => {
  const handleJoinWaitlist = () => {
    window.open("https://tally.so/r/3EYEM4", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-senzei-navy to-senzei-navy/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to unlock your next level of performance?</h2>
          <p className="text-lg text-white/80 mb-8">
            Join our beta waitlist and be among the first to experience Senzei's AI-powered health mentoring.
          </p>
          <Button 
            size="lg" 
            className="bg-senzei-orange hover:bg-senzei-orange/90 text-white rounded-full px-10 py-6 text-lg"
            onClick={handleJoinWaitlist}
          >
            Join the Beta Waitlist →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
