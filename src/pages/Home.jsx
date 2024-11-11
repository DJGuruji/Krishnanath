import React from "react";
import Discription from "../components/Discription";
import HomeImg from "../components/HomeImg";

import "aos/dist/aos.css";


const Home = () => {

  return (
    <div className="h-[100vh] bg-black" >
      <div className="md:flex lg:flex xl:flex md:justify-around lg:justify-around xl:justify-around">
      
        <div className="pt-10 flex  justify-center items-center pl-5 ">
          <HomeImg></HomeImg>
        </div>
        <div className="pb-5 flex flex-col justify-center items-center">
          <Discription></Discription>
        </div>
      </div>
    </div>
  );
};

export default Home;
