
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CaseExample = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-4">See Senzei in Action</h2>
            <p className="text-lg text-senzei-navy/70 mb-10">
              A snapshot of how Senzei transforms your health data into actionable insights
            </p>
          </div>
          
          <div className="reveal">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-senzei-taupe/30">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src="/lovable-uploads/a0002470-2c16-4c31-a2c2-b789a075a8fd.png" 
                  alt="Senzei AI Snapshot Example" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseExample;
