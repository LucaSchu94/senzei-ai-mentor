import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pullquote from "@/components/Pullquote";
import Features from "@/components/Features";
import DataToActionSection from "@/components/DataToActionSection";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import AISnapshot from "@/components/AISnapshot";
import Comparison from "@/components/Comparison";
import Evolution from "@/components/Evolution";
import { useTranslation } from "@/hooks/useTranslation";

const Index = () => {
  const { t, language } = useTranslation();

  useEffect(() => {
    // Update the document title based on language
    const title = language === 'de' 
      ? "Senzei - Ihr KI-gestützter Gesundheitsmentor"
      : "Senzei - Your AI-powered health mentor";
    document.title = title;
    
    // Update favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "/lovable-uploads/500b3356-3e36-4164-a120-b51cd2745231.png";
    }
  }, [language]);

  return (
    <div className="min-h-screen">
      <RevealOnScroll />
      <Navbar />
      <Hero />
      <Pullquote quoteKey="decisions" />
      <Features />
      <Pullquote quoteKey="clarity" />
      <DataToActionSection />
      <Pullquote quoteKey="action" />
      <About />
      <AISnapshot />
      <Comparison />
      <Evolution />
      <Pullquote quoteKey="integration" />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
