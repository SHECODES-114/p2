
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Loader2, Send, RefreshCw, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface AIResponse {
  text: string;
  imageUrl: string | null;
  videoLinks?: VideoLink[];
}

interface VideoLink {
  title: string;
  url: string;
}

const Scan = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [userQuery, setUserQuery] = useState("");
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startScan = async () => {
    setIsScanning(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      setIsScanning(false);
    }
  };

  const stopScan = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);
  };

  const captureScan = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        
        context.drawImage(
          videoRef.current,
          0,
          0,
          videoRef.current.videoWidth,
          videoRef.current.videoHeight
        );
        
        // In a real app, we would send this image to a server for analysis
        // For now, we'll simulate a scan result
        const mockMaterials = [
          "Plastic bottle (PET)",
          "Aluminum can",
          "Glass container",
          "Cardboard packaging",
          "Food waste",
          "Electronics (e-waste)"
        ];
        
        setScanResult(mockMaterials[Math.floor(Math.random() * mockMaterials.length)]);
        stopScan();
      }
    }
  };

  const handleAiQuery = async () => {
    if (!userQuery.trim() || !scanResult) return;
    
    setIsLoading(true);
    
    // Simulate AI response with a delay
    setTimeout(() => {
      const responses = {
        "Plastic bottle (PET)": "This PET plastic bottle can be recycled into new bottles, clothing, or carpeting. Please ensure it's clean and dry before recycling. Currently, PET is one of the most widely recycled plastics globally.",
        "Aluminum can": "Aluminum cans are 100% recyclable and can be recycled infinitely without quality degradation. Recycling aluminum uses 95% less energy than producing new aluminum from raw materials.",
        "Glass container": "Glass is 100% recyclable and can be recycled endlessly without loss in quality. Recycling glass reduces related air pollution by 20% and water pollution by 50%.",
        "Cardboard packaging": "Cardboard is highly recyclable and biodegradable. It can be recycled 5-7 times before fibers become too short. Remove any plastic or wax coatings before recycling.",
        "Food waste": "Food waste can be composted to create nutrient-rich soil. Composting food waste reduces methane emissions from landfills and returns nutrients to the earth.",
        "Electronics (e-waste)": "E-waste contains valuable materials that can be recovered, including precious metals. However, it also contains hazardous materials and should be taken to specialized e-waste recycling centers."
      };
      
      const imageUrls = {
        "Plastic bottle (PET)": "https://storage.googleapis.com/pai-images/b8ceec0680304f16aa5f94c8c40f0b5e.jpeg",
        "Aluminum can": "https://storage.googleapis.com/pai-images/e5c42a30e40943bd8c0c1fe5da4643c6.jpeg",
        "Glass container": "https://storage.googleapis.com/pai-images/f9c47f92a2ce4aa28a95fa897434ce8a.jpeg",
        "Cardboard packaging": "https://storage.googleapis.com/pai-images/b49651c15a404dffb1dd8ef9d9c5973e.jpeg",
        "Food waste": "https://storage.googleapis.com/pai-images/c9a1d76dad4749169be597e9d1f2f42d.jpeg",
        "Electronics (e-waste)": "https://storage.googleapis.com/pai-images/c2dae67495174b428e631d8425a769cf.jpeg"
      };
      
      // Video links based on material type
      const videoLinks = {
        "Plastic bottle (PET)": [
          { title: "How to Properly Recycle Plastic Bottles", url: "https://www.youtube.com/watch?v=I_fUpP-hq3A" },
          { title: "DIY Crafts with Plastic Bottles", url: "https://www.youtube.com/watch?v=GXZJlBR9v0U" }
        ],
        "Aluminum can": [
          { title: "Recycling Process for Aluminum Cans", url: "https://www.youtube.com/watch?v=KmMP67eC2tg" },
          { title: "Creative Ways to Reuse Aluminum Cans", url: "https://www.youtube.com/watch?v=xn7ZKkjW5Gk" }
        ],
        "Glass container": [
          { title: "Glass Recycling Process Explained", url: "https://www.youtube.com/watch?v=6R8YObQbE88" },
          { title: "Upcycling Glass Jars - DIY Projects", url: "https://www.youtube.com/watch?v=LMT3d9m5Wgg" }
        ],
        "Cardboard packaging": [
          { title: "Creative Cardboard Recycling Ideas", url: "https://www.youtube.com/watch?v=9JUzhyJFRRo" },
          { title: "How Cardboard is Recycled", url: "https://www.youtube.com/watch?v=Pla06PGIJpE" }
        ],
        "Food waste": [
          { title: "Beginners Guide to Composting", url: "https://www.youtube.com/watch?v=znajCAfZJSI" },
          { title: "Reducing Food Waste at Home", url: "https://www.youtube.com/watch?v=c7UW8SoGhm8" }
        ],
        "Electronics (e-waste)": [
          { title: "Why Electronics Recycling is Important", url: "https://www.youtube.com/watch?v=d-YJqZUBt8c" },
          { title: "What Happens to E-waste?", url: "https://www.youtube.com/watch?v=ITwYEpywjEU" }
        ]
      };
      
      const baseResponse = responses[scanResult as keyof typeof responses] || 
        "I don't have specific information about this material. Generally, it's best to check your local recycling guidelines.";
      
      // Generate response based on user query
      let customResponse;
      let selectedVideos;
      
      if (userQuery.toLowerCase().includes("video") || userQuery.toLowerCase().includes("watch") || userQuery.toLowerCase().includes("how to")) {
        customResponse = `Here are some helpful videos about handling ${scanResult}:`;
        selectedVideos = videoLinks[scanResult as keyof typeof videoLinks] || [];
      } else if (userQuery.toLowerCase().includes("recycle")) {
        customResponse = baseResponse + " For recycling, check if your local facility accepts this material and follow their guidelines.";
        selectedVideos = videoLinks[scanResult as keyof typeof videoLinks] || [];
      } else if (userQuery.toLowerCase().includes("reuse")) {
        customResponse = `You can creatively reuse this ${scanResult} in various DIY projects. For example, plastic bottles can be turned into planters, bird feeders, or even decorative items.`;
        selectedVideos = videoLinks[scanResult as keyof typeof videoLinks] || [];
      } else if (userQuery.toLowerCase().includes("impact") || userQuery.toLowerCase().includes("environment")) {
        customResponse = `Properly handling ${scanResult} has significant environmental benefits. Each recycled item reduces landfill waste and conserves natural resources.`;
        selectedVideos = videoLinks[scanResult as keyof typeof videoLinks] || [];
      } else {
        customResponse = baseResponse;
        selectedVideos = videoLinks[scanResult as keyof typeof videoLinks] || [];
      }
      
      setAiResponse({
        text: customResponse,
        imageUrl: imageUrls[scanResult as keyof typeof imageUrls] || null,
        videoLinks: selectedVideos
      });
      
      setIsLoading(false);
    }, 1500);
  };

  const resetScan = () => {
    setScanResult(null);
    setAiResponse(null);
    setUserQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 gradient-text">
            Scan Waste Material
          </h1>
          
          <div className="max-w-2xl mx-auto glass-card p-6 mb-8">
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
              {!isScanning && !scanResult && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-16 w-16 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500">Camera preview will appear here</p>
                  </div>
                </div>
              )}
              
              {scanResult && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                  <div className="text-center p-4 bg-white/90 rounded-lg">
                    <h3 className="text-lg font-semibold text-regeni-purple mb-1">Scan Result</h3>
                    <p className="text-regeni-darkblue text-lg">{scanResult}</p>
                  </div>
                </div>
              )}
              
              <video 
                ref={videoRef}
                className={`w-full h-full object-cover ${isScanning ? 'block' : 'hidden'}`}
                autoPlay
                playsInline
              />
              <canvas ref={canvasRef} className="hidden" />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {!isScanning && !scanResult && (
                <Button 
                  onClick={startScan}
                  className="bg-regeni-purple hover:bg-regeni-purple/90 text-white"
                >
                  <Camera className="mr-2 h-4 w-4" /> Start Scanning
                </Button>
              )}
              
              {isScanning && (
                <>
                  <Button 
                    onClick={captureScan}
                    className="bg-regeni-green hover:bg-regeni-green/90 text-white"
                  >
                    Capture
                  </Button>
                  <Button 
                    onClick={stopScan}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                </>
              )}
              
              {scanResult && (
                <Button 
                  onClick={resetScan}
                  variant="outline"
                  className="border-regeni-purple text-regeni-purple"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Scan Again
                </Button>
              )}
            </div>
          </div>
          
          {scanResult && (
            <div className="max-w-2xl mx-auto glass-card p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-regeni-darkblue">
                Ask RegeniScan About This Material
              </h2>
              
              <div className="mb-4">
                <div className="flex gap-2">
                  <Input
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    placeholder="Ask about recycling, reuse ideas, environmental impact, or videos..."
                    className="flex-grow"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAiQuery();
                    }}
                  />
                  <Button
                    onClick={handleAiQuery}
                    disabled={isLoading || !userQuery.trim()}
                    className="bg-regeni-purple hover:bg-regeni-purple/90 text-white"
                  >
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              {aiResponse && (
                <div className="bg-regeni-lightpurple/50 rounded-lg p-4">
                  <p className="text-gray-700 mb-4">{aiResponse.text}</p>
                  
                  {aiResponse.imageUrl && (
                    <div className="rounded-lg overflow-hidden mb-4">
                      <img 
                        src={aiResponse.imageUrl} 
                        alt="AI visualization" 
                        className="w-full h-auto"
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center italic">
                        AI-generated visualization of creative reuse concept
                      </p>
                    </div>
                  )}
                  
                  {aiResponse.videoLinks && aiResponse.videoLinks.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-regeni-darkblue font-semibold flex items-center gap-2 mb-3">
                        <Youtube className="text-red-600" /> 
                        Helpful Videos
                      </h3>
                      <div className="space-y-2">
                        {aiResponse.videoLinks.map((video, index) => (
                          <a 
                            key={index} 
                            href={video.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 p-2 bg-white rounded-md hover:bg-regeni-lightpurple transition-colors"
                          >
                            <Youtube className="h-5 w-5 text-red-600 flex-shrink-0" />
                            <span className="text-regeni-darkblue">{video.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Scan;
