import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-[90vh] flex items-center pt-16 overflow-hidden bg-gradient-to-b from-white to-senzei-taupe/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="py-20 bg-gradient-to-br from-senzei-navy to-senzei-navy/90 text-white">
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/500b3356-3e36-4164-a120-b51cd2745231.png" alt="Senzei Logo" className="h-12 mr-2" />
            </div>
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
          <div className="relative flex justify-center items-center reveal">
            <div className="absolute w-72 h-72 bg-senzei-orange/20 rounded-full filter blur-3xl"></div>
            <img src="/lovable-uploads/a0002470-2c16-4c31-a2c2-b789a075a8fd.png" alt="Senzei App Preview" className="relative z-10 max-w-full h-auto md:max-w-[80%] lg:max-w-[75%] rounded-xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;