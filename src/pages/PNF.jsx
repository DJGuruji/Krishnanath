import React from "react";
import img1 from "../img/cube.jpeg";

const NotFound = () => {
  return (
     <div className="h-screen w-full text-yellow-300 flex justify-center items-center" style={{backgroundImage: `url(${img1})`}}>
      <div>
        <span className="text-9xl font-sans">4😎4</span>
        <h1 className="text-3xl p-5 text-center">Sorry Dude !!!</h1>
        <h1 className="text-3xl text-center">Page Not Found </h1>
      </div>
     </div>
  );
};

export default NotFound;
