import React from "react";
import Discription from "../components/Discription";
import HomeImg from "../components/HomeImg";


const Home = () => {

  

  return (
    <div className="h-screen bg-black">
      <div className="md:flex lg:flex xl:flex md:justify-around lg:justify-around xl:justify-around">
        <div className="pt-4 flex flex-col justify-center ">
          <Discription></Discription>
        </div>
        <div className="pt-10 flex flex-col justify-center items-center ">
          <HomeImg></HomeImg>
        </div>
      </div>
    </div>
  );
};

export default Home;
