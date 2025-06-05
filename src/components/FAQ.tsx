
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/hooks/useTranslation";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-4">{t('faq.title')}</h2>
          </div>

          <Accordion type="single" collapsible className="w-full reveal">
            {Array.from({ length: 8 }).map((_, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-senzei-taupe/30">
                <AccordionTrigger className="text-lg font-medium text-senzei-navy py-4">
                  {t(`faq.items.${index}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-senzei-navy/80 pb-4">
                  {t(`faq.items.${index}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
