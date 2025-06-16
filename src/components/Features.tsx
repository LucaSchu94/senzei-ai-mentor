
import { Activity, Bell, Calendar, Heart } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Bell className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-purple-orange"
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-pink-orange"
    },
    {
      icon: <Activity className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-green-orange"
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-blue-orange"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-senzei-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-senzei-navy/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-6">
            {t('features.title')}
          </h2>
          <p className="text-lg text-senzei-navy/70 max-w-2xl mx-auto leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-senzei-orange/30 reveal transform hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-center">
                <div className={`w-16 h-16 rounded-2xl ${features[index].gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {features[index].icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-senzei-navy mb-4 text-center">
                {t(`features.items.${index}.title`)}
              </h3>
              <p className="text-senzei-navy/70 text-center leading-relaxed">
                {t(`features.items.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
