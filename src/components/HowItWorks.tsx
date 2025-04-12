
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Camera,
  Cpu,
  Lightbulb,
  Award,
  ArrowRight,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Scan Waste Items",
      description: "Use the RegeniScan app to scan and identify waste materials through our advanced AI recognition system.",
      icon: <Camera size={32} />,
      color: "bg-regeni-purple/10 text-regeni-purple"
    },
    {
      id: 2,
      title: "AI Classification",
      description: "Our machine learning models analyze and classify materials, providing optimal disposal or reuse recommendations.",
      icon: <Cpu size={32} />,
      color: "bg-regeni-green/10 text-regeni-green"
    },
    {
      id: 3,
      title: "Explore Solutions",
      description: "Browse creative reuse ideas or find optimal recycling routes. Use AR to visualize concepts in real-world settings.",
      icon: <Lightbulb size={32} />,
      color: "bg-amber-100 text-amber-600"
    },
    {
      id: 4,
      title: "Earn EcoNFTs",
      description: "Get rewarded with blockchain-based tokens for verified recycling efforts and eco-friendly actions.",
      icon: <Award size={32} />,
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How <span className="gradient-text">RegeniScan</span> Works
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Our intuitive process makes sustainable waste management accessible to everyone, from individuals to large organizations.
            </p>
            
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.id} className="flex gap-5">
                  <div className={`flex-shrink-0 w-14 h-14 ${step.color} rounded-xl flex items-center justify-center`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <span className="text-gray-400 mr-2">0{step.id}</span> {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button className="bg-regeni-purple hover:bg-regeni-purple/90 text-white">
                Try RegeniScan <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-regeni-green/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-regeni-purple/10 rounded-full blur-3xl -z-10" />
            
            <div className="p-2 bg-white rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="RegeniScan App Demo" 
                className="rounded-xl w-full h-auto"
              />

              {/* AR Visualization Mockup */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-regeni-lightpurple p-4 rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="AR Visualization" 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="bg-regeni-lightgreen p-4 rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558389186-438424b00880?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="AR Visualization" 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
