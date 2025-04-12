
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-regeni-purple to-regeni-green">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Waste Management?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of individuals and organizations already making a difference with RegeniScan's innovative waste management solution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-regeni-purple hover:bg-white/90 px-8">
              Get Started <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8"
            >
              Download App <Download size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <StatItem value="10K+" label="Active Users" />
            <StatItem value="250+" label="Business Partners" />
            <StatItem value="50K+" label="Tons Recycled" />
            <StatItem value="2.5K+" label="Trees Planted" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-3xl font-bold text-white">{value}</div>
    <div className="text-white/80">{label}</div>
  </div>
);

export default CallToAction;
