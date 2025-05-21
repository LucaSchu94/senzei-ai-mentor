
import { Activity, Bell, Calendar, Heart } from "lucide-react";

const features = [
  {
    icon: <Bell className="h-10 w-10 text-senzei-orange" />,
    title: "AI-powered daily briefings",
    description: "Get personalized insights on your mood, sleep, training, and focus – all in one clear daily briefing."
  },
  {
    icon: <Heart className="h-10 w-10 text-senzei-orange" />,
    title: "Smart data integration",
    description: "Connect your wearables and health apps for a complete picture of your physical and mental state."
  },
  {
    icon: <Activity className="h-10 w-10 text-senzei-orange" />,
    title: "Actionable recommendations",
    description: "Receive clear, specific actions to improve your recovery, performance, and overall well-being."
  },
  {
    icon: <Calendar className="h-10 w-10 text-senzei-orange" />,
    title: "Progress tracking",
    description: "Watch your health markers improve over time with intuitive, minimalist tracking."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-4">Core Features</h2>
          <p className="text-lg text-senzei-navy/70 max-w-2xl mx-auto">
            No complex dashboards – just clarity, structure, and progress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl hover:shadow-md transition-all duration-300 bg-white border border-senzei-taupe/30 hover:border-senzei-orange/30 reveal"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-senzei-navy mb-2">{feature.title}</h3>
              <p className="text-senzei-navy/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
