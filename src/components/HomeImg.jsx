import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../img/krishna.png";

const HomeImg = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      {/* Mobile: full-screen hero image */}
      <section className="md:hidden w-full h-[100svh] min-h-screen flex items-center justify-center bg-neutral-900">
        <img
          src={img}
          alt="Portrait"
          className="max-h-[85vh] w-auto object-contain drop-shadow-xl"
          data-aos="fade-up"
        />
      </section>

      {/* Desktop+: fixed left panel, half width, full height */}
      <aside
        className="hidden md:flex fixed inset-y-0 left-0 w-1/2 bg-neutral-900 border-r border-neutral-800 items-center justify-center"
        data-aos="fade-right"
      >
        <img
          src={img}
          alt="Portrait"
          className="max-h-[90vh] w-auto object-contain drop-shadow-2xl"
        />
      </aside>
    </>
  );
};

export default HomeImg;
