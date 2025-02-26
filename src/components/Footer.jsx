import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#222831] py-12 mt-20">
      <div className="flex flex-col md:flex-row text-white justify-center items-start md:items-start px-4 md:px-0">
  <div className="w-full md:w-[16rem] mb-8 md:mb-0 md:mr-5">
    <p className="text-[1.5rem] font-extrabold mb-8 text-[#FFFFFF]">
      PRO-ATTORNEY
    </p>
    
    <p className="text-base mt-8 text-gray-400 font-semibold">
    Choose us for our unwavering commitment to your case, expert legal knowledge, and a track record of delivering successful, client-focused results.
    </p>
    <div className="flex gap-5 mt-12">
      <p className="flex justify-center items-center text-[20px] border-2 w-9 h-9 rounded-full bg-[#2D333C] border-[#2D333C]">
        <FaTwitter />
      </p>
      <p className="flex justify-center items-center text-[20px] border-2 w-9 h-9 rounded-full bg-[#2D333C] border-[#2D333C]">
        <FaFacebookF />
      </p>
      <p className="flex justify-center items-center text-[20px] border-2 w-9 h-9 rounded-full bg-[#2D333C] border-[#2D333C]">
        <FaInstagram />
      </p>
    </div>
  </div>
  <div className="w-full md:w-[15rem] mb-8 md:mb-0 md:ml-6">
    <p className="text-[20px] font-semibold mb-8 text-[#F2F2F3] mt-1">
      Practice Areas
    </p>
    <div className="font-semibold text-[#F2F2F3]">
      {[
        "Family Law",
        "Business Law",
        "Insurance Law",
        "Criminal Law",
        "Drug Offenses",
        "Fire accident",
        "Employment Law",
        "Property Law",
      ].map((area, index) => (
        <div key={index} className="flex gap-3 mb-3">
          <p className="text-[12px] pt-1.5">
            <FaChevronRight />
          </p>
          <p>{area}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="w-full md:w-[13rem] mb-8 md:mb-0">
    <p className="text-[20px] font-semibold mb-8 text-[#F2F2F3] mt-1">
      Have a Question?
    </p>
    <div>
      <div className="flex gap-5 text-[#F2F2F3] mb-3">
        <p className="pt-1.5">
          <IoLocationSharp />
        </p>
        <p className="text-gray-400 font-semibold">
          100 wood street London, 
          EC2V 7AN, UK
        </p>
      </div>
      <div className="flex gap-5 text-[#F2F2F3] font-semibold mb-3">
        <p className="pt-1.5">
          <BsTelephoneFill />
        </p>
        <p>+44 20 3885 0518</p>
      </div>
      <div className="flex gap-5 text-[#F2F2F3] font-semibold mt-5">
        <p className="pt-1 text-[18px]">
          <IoIosMail />
        </p>
        <p>Michael_standerfer@aol.com</p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-[15rem] md:ml-10 pl-6">
    <p className="text-[20px] font-semibold mb-8 text-[#F2F2F3] mt-1">
      Business Hours
    </p>
    <p className="text-[#AFA939] mb-3">Opening Days:</p>
    <p className="font-semibold">Monday - Fridays: 9am to 20pm</p>
    <p className="font-semibold">Saturday: 9am-17pm</p>
  </div>
</div>
<div className="mt-12 text-center text-gray-300 text-md font-semibold">
  Copyright&copy;{new Date().getFullYear()} ProAttorney. All Rights Reserved.
</div>

    </div>
  );
};

export default Footer;
