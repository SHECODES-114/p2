
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Camera, BarChart3, Leaf, BadgeDollarSign, Recycle, ShieldCheck } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <Camera className="h-10 w-10 text-regeni-green" />,
      title: "AI-Powered Material Recognition",
      description: "Instantly identify different waste materials using our advanced machine learning algorithms trained on diverse datasets."
    },
    {
      icon: <Recycle className="h-10 w-10 text-regeni-green" />,
      title: "Creative Reuse Suggestions",
      description: "Receive personalized ideas for reusing and upcycling your waste materials, complete with visual guides."
    },
    {
      icon: <BadgeDollarSign className="h-10 w-10 text-regeni-green" />,
      title: "EcoNFT Rewards",
      description: "Earn unique digital tokens for your recycling efforts and creative contributions to our community."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-regeni-green" />,
      title: "Impact Dashboard",
      description: "Track your environmental impact with detailed analytics on carbon emissions saved and waste diverted from landfills."
    },
    {
      icon: <Leaf className="h-10 w-10 text-regeni-green" />,
      title: "Eco-Challenges",
      description: "Participate in community challenges to boost your recycling efforts and earn exclusive rewards."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-regeni-green" />,
      title: "Blockchain Verification",
      description: "All recycling activities are securely verified and recorded using blockchain technology for transparency."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 gradient-text">
            RegeniScan Features
          </h1>
          
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <p className="text-gray-700">
              Discover how RegeniScan is transforming waste management with our innovative features
              that combine cutting-edge technology with practical sustainability solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuresList.map((feature, index) => (
              <div key={index} className="glass-card p-6 transition-transform hover:scale-105">
                <div className="flex flex-col items-center text-center mb-2">
                  <div className="mb-4 p-3 bg-regeni-lightpurple rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-regeni-darkblue mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto glass-card p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center text-regeni-darkblue">Ready to Get Started?</h2>
            <p className="text-center text-gray-700 mb-6">
              Join our growing community of eco-conscious individuals and organizations making a difference.
            </p>
            <div className="flex justify-center">
              <a href="/scan" className="bg-regeni-green hover:bg-regeni-green/90 text-white px-6 py-3 rounded-lg font-medium text-center">
                Try Scanning Now
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
