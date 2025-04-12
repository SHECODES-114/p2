
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";

const Deposit = () => {
  const depositPoints = [
    {
      name: "RegeniScan Collection Center - Downtown",
      address: "123 Main Street, Downtown",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      materials: "Plastic, Glass, Electronics, Paper"
    },
    {
      name: "EcoHub Recycling Point",
      address: "456 Green Avenue, Westside",
      hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-4PM",
      materials: "All recyclables, Hazardous waste"
    },
    {
      name: "Community Recycle Station",
      address: "789 Park Road, Northside",
      hours: "24/7 Access",
      materials: "Paper, Plastic, Aluminum cans"
    },
    {
      name: "Industrial Materials Recovery",
      address: "101 Factory Lane, Industrial District",
      hours: "Mon-Fri: 7AM-8PM",
      materials: "Industrial waste, Large appliances, Construction materials"
    },
    {
      name: "University Recycling Center",
      address: "University Campus, Building E",
      hours: "Mon-Fri: 8AM-5PM",
      materials: "Paper, Electronics, Laboratory waste (special handling)"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 gradient-text">
            RegeniScan Collection Points
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-center text-gray-700 mb-8">
              Drop off your recyclables at any of our collection points and earn RegeniScan reward points.
              Our facilities are equipped to handle various types of waste materials safely and efficiently.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {depositPoints.map((point, index) => (
                <div key={index} className="glass-card p-6 transition-transform hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-regeni-lightpurple rounded-full">
                      <MapPin className="h-6 w-6 text-regeni-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-regeni-darkblue mb-2">{point.name}</h3>
                      <p className="text-gray-700 mb-2"><strong>Address:</strong> {point.address}</p>
                      <p className="text-gray-700 mb-2"><strong>Hours:</strong> {point.hours}</p>
                      <p className="text-gray-700"><strong>Materials:</strong> {point.materials}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto glass-card p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Can't find a location near you?</h2>
            <p className="text-gray-700 mb-6">
              We're constantly expanding our network of collection points. Let us know if you'd like to 
              request a new collection point in your area or if you'd like to host one.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-regeni-purple hover:bg-regeni-purple/90 text-white px-6 py-3 rounded-lg font-medium"
            >
              Request a Collection Point
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deposit;
