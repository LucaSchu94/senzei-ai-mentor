
import { ActivitySquare, Heart, CircleDot, CircleUser } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const AISnapshot = () => {
  return (
    <section className="py-20 bg-[#0f1627] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/d763392c-59d1-4d16-901b-8973a1d57461.png" 
          alt="Senzei AI Snapshot background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto reveal">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/500b3356-3e36-4164-a120-b51cd2745231.png" 
              alt="Senzei Logo" 
              className="h-16 mb-2"
            />
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center text-senzei-orange">AI SNAPSHOT</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <ActivitySquare className="text-green-500 w-6 h-6" />
              <span className="text-xl">HRV</span>
              <span className="ml-auto text-xl">5.4 h</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-orange-400">
                <div className="flex flex-col gap-1">
                  <div className="h-1 w-5 bg-orange-400 rounded"></div>
                  <div className="h-1 w-5 bg-orange-400 rounded"></div>
                  <div className="h-1 w-5 bg-orange-400 rounded"></div>
                </div>
              </div>
              <span className="text-xl">Sleep Quality</span>
              <div className="ml-auto flex items-center gap-2">
                <Progress value={30} className="w-32 h-2 bg-gray-700" />
                <span className="text-xl">3/10</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Heart className="text-green-500 w-6 h-6" />
              <span className="text-xl">Training</span>
              <span className="ml-auto text-xl">0 min - rest day</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-orange-400 w-6 h-6 flex items-center justify-center">
                <span className="text-2xl">☹</span>
              </div>
              <span className="text-xl">Glucose</span>
              <span className="ml-auto text-xl">Stable</span>
            </div>
            
            <div className="flex items-center gap-4">
              <CircleDot className="text-orange-400 w-6 h-6" />
              <span className="text-xl">Energy Level</span>
              <span className="ml-auto text-xl">Exhausted</span>
            </div>
          </div>
          
          <div className="my-10 border-t border-gray-700"></div>
          
          <h3 className="text-2xl text-senzei-orange mb-6">Today your recovery needs extra support.</h3>
          
          <ul className="space-y-6 list-disc pl-6">
            <li className="text-lg">
              Schedule a 20-minute yoga session before noon to boost circulation and calm your mind.
            </li>
            <li className="text-lg">
              Practice box-breathing (4x4x4x4) for 5 minutes after lunch to help reduce stress.
            </li>
            <li className="text-lg">
              Prioritize an early bedtime and avoid caffeine after 2 pm. Hydrate regularly and keep screens off 1 hour before sleep.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AISnapshot;
