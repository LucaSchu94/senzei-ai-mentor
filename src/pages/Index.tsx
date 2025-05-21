
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Senzei - Your AI-powered health mentor";
  }, []);

  return (
    <div className="min-h-screen">
      <RevealOnScroll />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
