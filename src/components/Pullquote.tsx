
import { useTranslation } from "@/hooks/useTranslation";
import { Quote } from "lucide-react";

interface PullquoteProps {
  quoteKey: string;
}

const Pullquote = ({ quoteKey }: PullquoteProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gradient-to-r from-senzei-navy to-senzei-navy/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-senzei-orange" />
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed">
            "{t(`pullquotes.${quoteKey}`)}"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Pullquote;
