import React, { useState, useEffect } from "react";
import Discription from "../components/Discription";
import HomeImg from "../components/HomeImg";
import "aos/dist/aos.css";
import AOS from "aos";
import ThreeBackground from "../components/ThreeBackground";
import BackgroundToggle from "../components/BackgroundToggle";
import { useBackground } from "../context/BackgroundContext";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { showBackground, bgOpacity } = useBackground();

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-neutral-100 relative overflow-x-hidden">
      {/* Optional background */}
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}

      {/* Main content container - responsive flex layout */}
      <main className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 py-12 lg:py-20">
        {/* Image Section */}
        <div className="flex-shrink-0" data-aos="fade-right">
          <HomeImg />
        </div>

        {/* Description Section */}
        <div className="flex-1 max-w-3xl" data-aos="fade-left">
          <Discription />
        </div>
      </main>

      {/* Background toggle */}
      {mounted && <BackgroundToggle />}
    </div>
  );
};

export default Home;
