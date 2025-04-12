
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 gradient-text">
            About RegeniScan
          </h1>
          
          <div className="max-w-3xl mx-auto glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-regeni-darkblue">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              RegeniScan was founded with a simple yet powerful mission: to revolutionize waste management 
              across all sectors. By leveraging cutting-edge technologies such as AI, augmented reality, 
              and blockchain, we aim to transform how individuals, businesses, and communities view and 
              handle waste.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-regeni-darkblue">Our Vision</h2>
            <p className="text-gray-700 mb-6">
              We envision a world where waste is no longer seen as something to discard but as a valuable 
              resource to be reused, recycled, and regenerated. Our platform empowers users to make informed 
              decisions about waste disposal and provides creative solutions for upcycling and reusing materials.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-regeni-darkblue">Our Team</h2>
            <p className="text-gray-700 mb-4">
              RegeniScan brings together experts in environmental science, artificial intelligence, 
              blockchain technology, and sustainable design. Our diverse team is united by a shared 
              commitment to environmental stewardship and technological innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-regeni-lightpurple mx-auto flex items-center justify-center">
                  <span className="text-regeni-purple text-2xl font-bold">JD</span>
                </div>
                <h3 className="mt-2 font-medium">Jamie Doe</h3>
                <p className="text-sm text-gray-500">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-regeni-lightpurple mx-auto flex items-center justify-center">
                  <span className="text-regeni-purple text-2xl font-bold">AR</span>
                </div>
                <h3 className="mt-2 font-medium">Alex Rivera</h3>
                <p className="text-sm text-gray-500">CTO</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-regeni-lightpurple mx-auto flex items-center justify-center">
                  <span className="text-regeni-purple text-2xl font-bold">SL</span>
                </div>
                <h3 className="mt-2 font-medium">Sam Lee</h3>
                <p className="text-sm text-gray-500">Head of Sustainability</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
