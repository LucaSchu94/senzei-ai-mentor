
import { Hrv, SleepDuration, Training, EnergyLevel } from "lucide-react";

const AISnapshot = () => {
  return (
    <section className="py-20 bg-[#0f1627] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8 text-center text-senzei-orange">AI SNAPSHOT</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Hrv className="text-green-500 w-6 h-6" />
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
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full" style={{ width: "30%" }}></div>
                </div>
                <span className="text-xl">3/10</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Training className="text-green-500 w-6 h-6" />
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
              <EnergyLevel className="text-orange-400 w-6 h-6" />
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
