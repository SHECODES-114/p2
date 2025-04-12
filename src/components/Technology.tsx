
import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "WebXR", "Three.js", "Progressive Web App"]
    },
    {
      category: "Backend",
      items: ["Python", "TensorFlow", "AWS", "Blockchain"]
    },
    {
      category: "AI & ML",
      items: ["Object Recognition", "Material Classification", "Predictive Analytics"]
    },
    {
      category: "AR/VR",
      items: ["WebXR", "Unity Modules", "3D Visualization", "Interactive Models"]
    },
    {
      category: "Blockchain",
      items: ["Smart Contracts", "NFT Minting", "Energy-Efficient Chain"]
    },
    {
      category: "Integration",
      items: ["IoT Sensors", "Smart City APIs", "B2B Networks"]
    }
  ];
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by <span className="gradient-text">Advanced Technology</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive tech stack combines cutting-edge solutions across multiple domains to create a powerful, scalable platform for waste management innovation.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {technologies.map((tech, index) => (
              <div key={index} className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 gradient-text">{tech.category}</h3>
                <ul className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-regeni-green flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-regeni-purple/5 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-regeni-green/5 rounded-full blur-3xl -z-0" />
        </div>
        
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Technology Partners & Integrations</h3>
            <p className="text-gray-600">Working with industry leaders to build a sustainable future</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <TechBadge>TensorFlow</TechBadge>
            <TechBadge>AWS</TechBadge>
            <TechBadge>Unity</TechBadge>
            <TechBadge>WebXR</TechBadge>
            <TechBadge>Ethereum</TechBadge>
            <TechBadge>Python</TechBadge>
            <TechBadge>React</TechBadge>
            <TechBadge>Smart City API</TechBadge>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <Badge className="px-4 py-2 bg-white text-gray-800 border border-gray-200 text-sm hover:bg-gray-50">
    {children}
  </Badge>
);

export default Technology;
