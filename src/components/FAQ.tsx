
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Senzei?",
    answer: "Senzei is your personal AI-powered high performance mentor. It connects your daily data, habits, and biomarkers with artificial intelligence to deliver clear, personalized recommendations for improved health and performance."
  },
  {
    question: "How does it work?",
    answer: "Senzei connects your data, analyzes patterns, and delivers smart, clear recommendations for your day. It integrates with your existing health apps and wearables to provide a comprehensive view of your health status."
  },
  {
    question: "When does the beta start?",
    answer: "Sign up now – beta users will be notified first! Join our waitlist to be among the first to experience Senzei and help shape the product."
  },
  {
    question: "What data can Senzei integrate with?",
    answer: "Senzei can integrate with various data sources including sleep trackers, heart rate monitors, activity trackers, and manual inputs for mood, nutrition, and more."
  },
  {
    question: "Is my data secure with Senzei?",
    answer: "Absolutely. We take data privacy and security very seriously. All your personal health data is encrypted and stored securely, and you maintain full control over what data you share with us."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full reveal">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-senzei-taupe/30">
                <AccordionTrigger className="text-lg font-medium text-senzei-navy py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-senzei-navy/80 pb-4">
                  {faq.answer}
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
