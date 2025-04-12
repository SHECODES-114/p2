
import React from "react";
import { 
  Braces, 
  Camera, 
  Layers, 
  Recycle, 
  Share2, 
  Smartphone, 
  Sparkles, 
  BarChart3,
  Database
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Recognition",
      description: "Advanced machine learning models trained on diverse materials for accurate waste classification.",
      icon: <Braces className="text-regeni-purple" />
    },
    {
      title: "Real-Time Scanning",
      description: "Instantly identify and classify waste materials using your smartphone camera.",
      icon: <Camera className="text-regeni-purple" />
    },
    {
      title: "Augmented Reality",
      description: "Visualize upcycling concepts in real-world environments before implementation.",
      icon: <Smartphone className="text-regeni-purple" />
    },
    {
      title: "EcoNFTs Rewards",
      description: "Earn blockchain-based tokens for recycling efforts and completing eco-challenges.",
      icon: <Sparkles className="text-regeni-purple" />
    },
    {
      title: "Multi-Sector Support",
      description: "Solutions for household, agricultural, industrial, and medical waste streams.",
      icon: <Layers className="text-regeni-purple" />
    },
    {
      title: "Impact Tracking",
      description: "Monitor your environmental impact with detailed analytics and visualizations.",
      icon: <BarChart3 className="text-regeni-purple" />
    },
    {
      title: "Data Aggregation",
      description: "Comprehensive waste data collection and classification system.",
      icon: <Database className="text-regeni-purple" />
    },
    {
      title: "Circular Economy",
      description: "Connect with B2B networks to promote material reuse and recycling.",
      icon: <Share2 className="text-regeni-purple" />
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features That <span className="gradient-text">Make a Difference</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our integrated platform combines cutting-edge technologies to transform waste management across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden group hover-scale">
              <CardContent className="pt-6">
                <div className="mb-4 p-3 bg-regeni-lightpurple rounded-xl inline-block">
                  {React.cloneElement(feature.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
