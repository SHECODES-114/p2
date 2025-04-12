
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-20 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-regeni-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-regeni-green/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-regeni-lightpurple text-regeni-purple font-medium text-sm mb-6">
            <Sparkles size={16} className="mr-1" />
            <span>Revolutionizing Waste Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Transforming Waste</span> Into Value With AI & Blockchain
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            RegeniScan combines AI, Augmented Reality, and Blockchain technology to revolutionize how we manage waste across all sectors, from household to industrial.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/scan">
              <Button size="lg" className="bg-regeni-purple hover:bg-regeni-purple/90 text-white px-8 py-6">
                Get Started
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-regeni-purple text-regeni-purple hover:bg-regeni-purple/10 px-8 py-6"
            >
              Learn More <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="mt-12 relative">
            <div className="glass-card overflow-hidden rounded-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="RegeniScan Platform Interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-regeni-purple/20 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
