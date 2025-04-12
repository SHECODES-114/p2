
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import EcoNFT from "@/components/EcoNFT";
import Technology from "@/components/Technology";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <EcoNFT />
        <Technology />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
