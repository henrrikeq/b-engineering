import React from "react";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const Contact = () => {

  return (
    <div className="mt-20">
      <p className="flex flex-col items-center mb-8 text-[2rem] text-[#494949] font-bold">Contact Us</p>
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <img
            src="https://res.cloudinary.com/dxggbrrre/image/upload/v1741359745/istockoil_e4g4vu.jpg"
            alt="Henrrike Quarshie"
            className="h-[35vh]  ml-20 object-cover"
          />
        </div>
        {/* <div className="p-8 w-full lg:w-1/2 bg-[#18486c]">
          <p className="text-l font-bold text-white mb-2">Contact Engineer</p>
          <p className="text-[2rem] font-bold text-white mb-6">Get In Touch</p>
          <div className="w-full md:w-[13rem] mb-8 md:mb-0">
            <p className="text-[20px] font-semibold mb-8 text-[#F2F2F3] mt-1">
              Have a Question?
            </p>
            <div>
              <div className="flex gap-5 text-[#F2F2F3] mb-3">
                <p className="pt-1.5">
                  <IoLocationSharp />
                </p>
                <p className="text-white font-semibold">
                  29 ABABIO TAKOR LN,
                  CM-0376-9144
                </p>
              </div>
              <div className="flex gap-5 text-[#F2F2F3] font-semibold mb-3">
                <p className="pt-1.5">
                  <BsTelephoneFill />
                </p>
                <div className="flex flex-col">
                  <p>0536978573</p>
                  <p>0559569906</p>
                  <p>0242251621</p>
                  <p>0208359057</p>
                </div>
              </div>

            </div>
          </div>
        </div> */}
        
      </div>
    </div>
  );
};

export default Contact;

