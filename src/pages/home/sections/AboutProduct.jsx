import React from "react";
import { PiBuildingOffice } from "react-icons/pi";

import { BsArrowRightShort } from "react-icons/bs";

const AboutProduct = () => {
  const cardData = [
    {
      icon: <PiBuildingOffice />,
      title: "Fight for Justice",
      description:
        "Seeking justice in the world is a significant emotional and investment when we follow this call.",
      hoverIcon: <BsArrowRightShort />,
    },
    {
      icon: <PiBuildingOffice />,
      title: "Build Strong Cases",
      description:
        "We prepare strong cases by gathering all the necessary information and presenting it convincingly.",
      hoverIcon: <BsArrowRightShort />,
    },
    {
      icon: <PiBuildingOffice />,
      title: "Expert Legal Advice",
      description:
        "Our team provides expert legal advice to help you navigate complex legal challenges with ease.",
      hoverIcon: <BsArrowRightShort />,
    },
  ];

  // Smooth scroll to the "contact" section
  const handleFreeConsultationClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col md:flex-col lg:flex-row">
        {/* Left Section */}
        <div className="lg:ml-32 ml-0 md:ml-0 md:w-[43rem] lg:w-1/3 p-4 md:pl-12 md:pt-12 mb-6 md:mb-0">
          <p className="text-[#AFA939] text-sm font-extrabold">Services</p>
          <p className="text-3xl font-extrabold mt-2 text-[#494949]">
            Why Select Us?
          </p>
          <p className="text-base mt-5 text-[#9B9B9B] font-semibold">
          Our firm stands out for its commitment to excellence, client-focused approach, and extensive expertise in various areas of law. We prioritize clear communication, trusted advice, and relentless pursuit of justice to achieve results that truly make a difference in our clients' lives.
          </p>
          <button
            onClick={handleFreeConsultationClick}
            className="border-2 px-4 py-3 text-white bg-[#AFA939] border-[#AFA939] mt-6 rounded-sm font-semibold hover:bg-[#8c8305] hover:border-[#8c8305]"
          >
            Free Consultation
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-full flex flex-col items-center mb-10 ml- mr-">
          {/* Top Bar */}
          <div className="border-2 bg-[#AFA939] border-[#AFA939] h-[130vh] md:h-32 w-full md:w-[93vw] lg:w-[56vw]">
            {/* This div's height is extended only on small screens */}
          </div>

          {/* Card Section */}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-7 md:gap-7 text-[#494949] -mt-[242%] md:-mt-20">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bs relative flex flex-col items-center border-2 lg:h-[20rem] lg:w-56 w-80 md:h-[21rem] md:w-48 bg-white border-white shadow-md rounded-[3px] p-4 group mt-6"
              >
                {/* Main Box Content */}
                <p className="text-[30px] mt-1 border-2 px-7 py-7 bg-[#F2F2F2] border-[#F2F2F2] rounded-full font-bold mb-3 text-[#AFA939]">
                  {card.icon}
                </p>
                <p className="text-[18px] font-semibold mb-2">{card.title}</p>
                <p className="w-44 text-center text-[#9B9B9B]">
                  {card.description}
                </p>

                {/* Hover Effect Icon */}
                <div className="absolute bottom-[-1.5rem] border-2 py-3 px-3 rounded-full bg-[#AFA939] border-[#AFA939] opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition duration-300">
                  <p className="text-[20px] text-white">{card.hoverIcon}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutProduct;
