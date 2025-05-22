
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import AISnapshot from "@/components/AISnapshot";
import CaseExample from "@/components/CaseExample";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Senzei - Your AI-powered health mentor";
    
    // Update favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "/lovable-uploads/500b3356-3e36-4164-a120-b51cd2745231.png";
    }
  }, []);

  return (
    <div className="min-h-screen">
      <RevealOnScroll />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <AISnapshot />
      <CaseExample />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
