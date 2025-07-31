import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
// import AdditionalFeatures from "@/components/AdditionalFeatures";
import DemoCTA from "@/components/DemoCTA";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a2235] to-[#111827] text-white">
      <Navbar />
      <Hero />
      <FeaturesSection />
      {/* <AdditionalFeatures /> */}
      <DemoCTA />
      <HowItWorks />
      <FAQSection />
      <Footer />
      
    </main>
  );
}