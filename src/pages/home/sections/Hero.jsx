import React from "react";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="img pt-5 flex justify-center items-center min-h-screen">

      <div className="flex flex-col justify-center items-center w-full px-4">
        <div className="flex flex-col items-center text-center m-4 md:m-10 lg:mt-16 w-full max-w-2xl space-y-6 px-4">
          <p className="border-[1.5px] rounded-full w-[10rem] border-[#f97a2b]"></p>
          
          {/* Adjusted Text for Centering */}
          <div className="text-white text-[3rem] font-bold leading-tight space-y-2">
            <p>PRECISION WELDING FOR</p>
            <p>EFFICIENT PALM OIL PROCESSING</p>
          </div>

          <div className="flex items-center justify-center border-2 px-5 py-3 text-[#3d424a] font-extrabold text-[13px] bg-[#f97a2b] border-[#f97a2b] w-[12rem] md:w-[14rem] mt-4 hover:bg-[#f97a2b] hover:border-[#f97a2b] transition duration-300">
            <Link to="/contact">REQUEST A QUOTE</Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
