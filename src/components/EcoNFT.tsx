
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Leaf, 
  Landmark, 
  ShoppingBag,
  ArrowRight
} from "lucide-react";

const EcoNFT = () => {
  const benefits = [
    {
      icon: <Award size={24} />,
      title: "Recognition",
      description: "Get recognized for your environmental efforts with verifiable digital proof."
    },
    {
      icon: <Landmark size={24} />,
      title: "Value",
      description: "Trade, collect, or redeem EcoNFTs for sustainable goods and services."
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Rewards",
      description: "Access exclusive eco-friendly products and partnership offers."
    },
    {
      icon: <Leaf size={24} />,
      title: "Impact",
      description: "Contribute to real-world initiatives like tree planting and ocean cleanup."
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-regeni-purple/5 to-regeni-green/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="bg-gradient-to-br from-regeni-purple to-regeni-green p-1 rounded-xl">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-xl font-bold gradient-text">EcoNFT #1289</div>
                        <div className="text-sm text-gray-500">Series 2025</div>
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="EcoNFT Example" 
                        className="w-full h-auto rounded-lg mb-3"
                      />
                      <div className="text-sm text-gray-600">
                        <div className="mb-1">Recycled: 25kg plastic waste</div>
                        <div className="mb-1">Carbon Offset: 75kg CO₂</div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="text-xs text-gray-500">Minted: April 10, 2025</div>
                          <div className="text-xs font-medium text-regeni-purple">Verified ✓</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-1 rounded-xl">
                  <div className="bg-white rounded-lg p-3 h-full flex flex-col">
                    <div className="text-sm font-bold text-amber-600">Cleanup Champion</div>
                    <img 
                      src="https://images.unsplash.com/photo-1618477202872-5e7c84905d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Mini EcoNFT" 
                      className="w-full h-auto rounded my-2"
                    />
                    <div className="text-xs text-gray-600 mt-auto">
                      <div className="flex justify-between">
                        <span>Beach cleanup</span>
                        <span className="text-amber-600">+5 Trees</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-1 rounded-xl">
                  <div className="bg-white rounded-lg p-3 h-full flex flex-col">
                    <div className="text-sm font-bold text-blue-600">Water Guardian</div>
                    <img 
                      src="https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Mini EcoNFT" 
                      className="w-full h-auto rounded my-2"
                    />
                    <div className="text-xs text-gray-600 mt-auto">
                      <div className="flex justify-between">
                        <span>River protection</span>
                        <span className="text-blue-600">+10 Credits</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">EcoNFTs</span>: Blockchain-Powered Rewards
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Transform environmental actions into digital assets with our unique blockchain-based reward system that provides tangible benefits while making a real-world impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="p-2 bg-regeni-lightpurple rounded-lg inline-block mb-4 text-regeni-purple">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-regeni-purple hover:bg-regeni-purple/90 text-white">
              Learn About EcoNFTs <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoNFT;
