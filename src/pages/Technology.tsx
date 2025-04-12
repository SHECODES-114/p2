
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Layers, Database, Eye, Fingerprint, Network } from "lucide-react";

const Technology = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 gradient-text">
            Our Technology
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-gray-700 text-center mb-8">
              RegeniScan leverages cutting-edge technologies to create an intelligent, 
              multi-sector waste management system that redefines how we handle waste materials.
            </p>
            
            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-regeni-darkblue">Core Technologies</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-regeni-lightpurple rounded-full shrink-0">
                    <Cpu className="h-6 w-6 text-regeni-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-regeni-darkblue mb-2">Artificial Intelligence</h3>
                    <p className="text-gray-700">
                      Our advanced machine learning models are trained on diverse datasets of waste materials, 
                      allowing RegeniScan to accurately identify and classify various types of waste. 
                      The AI system continually improves through user feedback and new data inputs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-regeni-lightpurple rounded-full shrink-0">
                    <Eye className="h-6 w-6 text-regeni-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-regeni-darkblue mb-2">Augmented Reality</h3>
                    <p className="text-gray-700">
                      RegeniScan uses AR technology to superimpose creative reuse concepts onto real-world environments, 
                      allowing users to visualize upcycling ideas before implementation. This immersive experience 
                      helps users make informed decisions about waste reuse.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-regeni-lightpurple rounded-full shrink-0">
                    <Fingerprint className="h-6 w-6 text-regeni-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-regeni-darkblue mb-2">Blockchain & EcoNFTs</h3>
                    <p className="text-gray-700">
                      We utilize blockchain technology to create immutable records of recycling activities and 
                      to mint EcoNFTs as digital proof of action. This ensures transparency and accountability 
                      while gamifying sustainable behaviors through collectible tokens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-regeni-darkblue">Technical Architecture</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-regeni-lightpurple rounded-full shrink-0">
                    <Layers className="h-6 w-6 text-regeni-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-regeni-darkblue mb-2">Frontend</h3>
                    <p className="text-gray-700">
                      Built with React, our responsive frontend provides users with an intuitive interface 
                      for scanning waste, exploring reuse ideas, monitoring impact, and tracking EcoNFT rewards. 
                      The UI is optimized for both desktop and mobile devices.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-regeni-lightpurple rounded-full shrink-0">
                    <Database className="h-6 w-6 text-regeni-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-regeni-darkblue mb-2">Backend</h3>
                    <p className="text-gray-700">
                      Our backend is developed in Python for efficient waste data aggregation and classification. 
                      We deploy TensorFlow for object recognition and material prediction, with robust APIs 
                      connecting all system components.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-regeni-lightpurple rounded-full shrink-0">
                    <Network className="h-6 w-6 text-regeni-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-regeni-darkblue mb-2">Infrastructure</h3>
                    <p className="text-gray-700">
                      Hosted on AWS, our cloud infrastructure ensures high scalability and system resilience 
                      across high-usage scenarios. The modular architecture allows for seamless integration with 
                      emerging smart city frameworks and IoT-enabled collection systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Technology;
