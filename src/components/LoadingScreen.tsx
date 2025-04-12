
import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      // Allow time for fade-out animation before removing component
      setTimeout(onLoadingComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="text-4xl font-bold gradient-text mb-4">RegeniScan</div>
        <p className="text-regeni-purple">Revolutionizing Waste Management</p>
        <div className="mt-4 w-16 h-1 bg-regeni-green mx-auto rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
