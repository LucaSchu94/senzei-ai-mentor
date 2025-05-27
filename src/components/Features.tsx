
import { Activity, Bell, Calendar, Heart } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Features = () => {
  const { t } = useTranslation();
  
  const icons = [
    <Bell className="h-10 w-10 text-senzei-orange" />,
    <Heart className="h-10 w-10 text-senzei-orange" />,
    <Activity className="h-10 w-10 text-senzei-orange" />,
    <Calendar className="h-10 w-10 text-senzei-orange" />
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-4">{t('features.title')}</h2>
          <p className="text-lg text-senzei-navy/70 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl hover:shadow-md transition-all duration-300 bg-white border border-senzei-taupe/30 hover:border-senzei-orange/30 reveal"
            >
              <div className="mb-4">{icons[index]}</div>
              <h3 className="text-xl font-bold text-senzei-navy mb-2">{t(`features.items.${index}.title`)}</h3>
              <p className="text-senzei-navy/70">{t(`features.items.${index}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
