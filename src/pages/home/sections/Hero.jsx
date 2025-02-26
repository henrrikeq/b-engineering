import React from "react";
import Navbar from "../../../components/Navbar";

const Hero = () => {
  return (
    <div className="img pt-5">
      
      <div className=" flex flex-col justify-center items-center md:items-start flex-grow w-full">
        <div className="flex flex-col m-4 md:m-10 lg:ml-36 lg:mt-16 w-full max-w-lg space-y-6 px-4 mt-36">
          <p className="text-[#AFA939] text-[14px] font-extrabold text-left">
            WELCOME TO PRO-ATTORNEY
          </p>
          <p className="text-white text-[3rem] md:text-[3rem] lg:text-[3rem] font-bold leading-tight text-left">
            Attorneys Fighting For Your{" "}
            {/* <span className="text-[#AFA939]">
              < TypingEffect
                text={["Custody.", "Rights.", "Case."]}
                speed={120}
                eraseDelay={2000}
              />
            </span> */}
          </p>
          <p className="text-[14px] md:text-[16px] text-[#969696] font-semibold leading-relaxed text-left">
            We have helped thousands of people to get relief from disputes and wrongful denials. Now they trust Pro-attorneys.
          </p>
          <div className="flex items-center justify-start border-2 px-5 py-2 text-white font-semibold bg-[#AFA939] border-[#AFA939] w-[12rem] md:w-[14rem] rounded-md mt-4 hover:bg-[#8c8305] hover:border-[#8c8305] transition duration-300">
            <p>Get Legal Advice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
