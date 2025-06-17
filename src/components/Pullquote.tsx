
import { useTranslation } from "@/hooks/useTranslation";
import { Quote } from "lucide-react";

interface PullquoteProps {
  quoteKey?: string;
  customText?: string;
}

const Pullquote = ({ quoteKey, customText }: PullquoteProps) => {
  const { t } = useTranslation();

  const displayText = customText || (quoteKey ? t(`pullquotes.${quoteKey}`) : "");
  const isDecisionsQuote = quoteKey === 'decisions';

  return (
    <section className={`py-12 ${isDecisionsQuote ? 'bg-transparent -mt-20 relative z-20' : 'bg-gradient-to-r from-senzei-orange to-senzei-orange/90'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-white" />
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed">
            "{displayText}"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Pullquote;
