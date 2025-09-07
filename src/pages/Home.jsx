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
      {/* Optional background (kept, but the overall look is classic/clean) */}
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}

      {/* Fixed image panel (desktop) + full-screen hero (mobile) */}
      <HomeImg />

      {/* Content area: shifts right on desktop to make room for fixed image */}
      <main className="relative z-10 px-6 py-10 md:py-16 md:ml-[50vw]">
        <div className="max-w-3xl mx-auto">
          <section data-aos="fade-left">
            <Discription />
          </section>
        </div>
      </main>

      {/* Classic, minimal—no decorative blobs; keep the toggle if you want the 3D bg */}
      {mounted && <BackgroundToggle />}
    </div>
  );
};

export default Home;
