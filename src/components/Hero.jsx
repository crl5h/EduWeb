import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";
import logo2 from "../assets/logot.png"
import logo3 from "../assets/Vector.png"

import TypewriterText from "./TyperWriterAnimate";

const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger animation after a delay
    const animationTimeout = setTimeout(() => {
      setIsAnimating(true);
    }, 200); // Adjust the delay as needed

    return () => {
      clearTimeout(animationTimeout); // Cleanup to prevent memory leaks
    };
  }, []);

  return (
    <div className="bg-transparent text-black min-h-[90vh] flex items-center justify-center">
      <div className="text-center">
        <img src={logo3} alt="Logo" className="mx-auto h-24" />

        {/* {isAnimating ? (
          <h1 className="text-4xl font-bold mt-4">
            Learning Today
            
          </h1>
        ) : (
          <h1 className="text-4xl font-bold mt-4">Leading Tommorow</h1>
        )} */}
        <TypewriterText />
      </div>
    </div>
  );
};

export default Hero;
