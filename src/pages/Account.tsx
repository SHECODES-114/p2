
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, History, Leaf, Medal, Star, TrendingUp } from "lucide-react";

const Account = () => {
  // Mock user data - in a real app, this would come from a backend
  const user = {
    name: "Alex Johnson",
    email: "alex.j@example.com",
    joinedDate: "January 15, 2025",
    ecoPoints: 785,
    nextLevel: 1000,
    currentLevel: "Eco Enthusiast",
    nextLevelName: "Eco Champion",
    scanHistory: [
      { 
        date: "April 10, 2025", 
        material: "Plastic bottle (PET)", 
        points: 5,
        status: "Recycled" 
      },
      { 
        date: "April 8, 2025", 
        material: "Glass container", 
        points: 10,
        status: "Creative Reuse" 
      },
      { 
        date: "April 5, 2025", 
        material: "Cardboard packaging", 
        points: 3,
        status: "Recycled" 
      },
      { 
        date: "April 2, 2025", 
        material: "Aluminum can", 
        points: 5,
        status: "Recycled" 
      },
      { 
        date: "March 30, 2025", 
        material: "Electronics (e-waste)", 
        points: 25,
        status: "Proper Disposal" 
      },
    ],
    achievements: [
      {
        name: "First Scan",
        description: "Completed your first waste scan",
        icon: <Star className="h-5 w-5 text-regeni-gold" />,
        date: "January 16, 2025"
      },
      {
        name: "Recycling Rookie",
        description: "Recycled 10 items",
        icon: <Leaf className="h-5 w-5 text-regeni-green" />,
        date: "February 5, 2025"
      },
      {
        name: "Creative Genius",
        description: "Submitted 5 creative reuse ideas",
        icon: <Medal className="h-5 w-5 text-regeni-gold" />,
        date: "March 12, 2025"
      },
    ]
  };

  // Calculate progress to next level
  const progressPercentage = (user.ecoPoints / user.nextLevel) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 gradient-text">
            My Account
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* User Profile Card */}
            <div className="glass-card p-6 lg:col-span-1">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-regeni-lightpurple flex items-center justify-center text-regeni-purple mb-4">
                  <span className="text-3xl font-bold">{user.name.charAt(0)}</span>
                </div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">Member since {user.joinedDate}</p>
              </div>
              
              <Separator className="my-4" />
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Level: {user.currentLevel}</span>
                  <span className="text-sm text-gray-600">{user.ecoPoints} / {user.nextLevel} points</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">
                  {user.nextLevel - user.ecoPoints} more points to reach {user.nextLevelName}
                </p>
              </div>
              
              <div className="bg-regeni-lightgreen rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-regeni-darkblue">Total Eco Impact</h3>
                  <TrendingUp className="h-4 w-4 text-regeni-green" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div>
                    <p className="text-2xl font-bold text-regeni-green">12</p>
                    <p className="text-xs text-gray-600">kg CO₂ Saved</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-regeni-green">35</p>
                    <p className="text-xs text-gray-600">Items Recycled</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* History Section */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <History className="mr-2 h-5 w-5 text-regeni-purple" />
                    Scan History
                  </h2>
                </div>
                
                <div className="overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">Material</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3">Points</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {user.scanHistory.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">{item.date}</td>
                            <td className="px-4 py-3 text-sm font-medium">{item.material}</td>
                            <td className="px-4 py-3 text-sm">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                item.status === "Recycled" 
                                  ? "bg-blue-100 text-blue-800" 
                                  : item.status === "Creative Reuse" 
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-green-100 text-green-800"
                              }`}>
                                {item.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm font-semibold text-regeni-green">
                              +{item.points}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {/* Achievements Section */}
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <Award className="mr-2 h-5 w-5 text-regeni-purple" />
                  <h2 className="text-xl font-semibold">Achievements</h2>
                </div>
                
                <div className="space-y-4">
                  {user.achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-3 rounded-lg border border-gray-100 bg-white hover:shadow-sm transition-shadow"
                    >
                      <div className="mr-4 p-2 bg-regeni-lightpurple rounded-full">
                        {achievement.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-900">{achievement.name}</h3>
                        <p className="text-sm text-gray-500">{achievement.description}</p>
                      </div>
                      <div className="text-xs text-gray-400">
                        {achievement.date}
                      </div>
                    </div>
                  ))}
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

export default Account;
