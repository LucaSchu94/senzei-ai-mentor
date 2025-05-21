
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-16 overflow-hidden bg-gradient-to-b from-white to-senzei-taupe/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-senzei-navy">
              Your AI-powered <span className="gradient-text">health mentor</span>
            </h1>
            <p className="text-lg md:text-xl text-senzei-navy/80 max-w-lg">
              Senzei connects your daily data, habits, and biomarkers with artificial intelligence – delivering clear, personalized recommendations for high performance, recovery, and smart health.
            </p>
            <p className="text-senzei-navy/70">
              No confusing dashboards, no complexity – just focus, structure, and real results.
            </p>
            <div className="pt-4">
              <Button size="lg" className="bg-senzei-orange hover:bg-senzei-orange/90 text-white rounded-full px-8">
                Join the Beta Waitlist →
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-senzei-orange/20 rounded-full filter blur-3xl"></div>
            <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-senzei-taupe/30 w-full max-w-md">
              <div className="text-senzei-navy font-medium mb-3">Today's AI Briefing</div>
              <h3 className="text-2xl font-bold text-senzei-navy mb-4">Good morning, Alex</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <p>Your HRV is higher than yesterday (+8%)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <p>Sleep quality was average (6.8/10)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <p>Recovery status: 85% (Good)</p>
                </div>
                <div className="mt-6 p-4 bg-senzei-navy/5 rounded-lg">
                  <div className="font-medium mb-2">Recommendation:</div>
                  <p className="text-senzei-navy/80">Ideal day for moderate training. Focus on hydration as your biomarkers indicate slight dehydration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
