import React from "react";
import { PiBuildingOffice } from "react-icons/pi";

import { BsArrowRightShort } from "react-icons/bs";

const AboutProduct = () => {
  const cardData = [
    {
      icon: <PiBuildingOffice />,
      title: "Quality Craftsmanship",
      description:
        "We use advanced welding techniques and high-grade materials to ensure every machine is built to last.",
      hoverIcon: <BsArrowRightShort />,
    },
    {
      icon: <PiBuildingOffice />,
      title: "Innovation & Efficiency",
      description:
        "Our designs prioritize performance, helping farmers and processors maximize output while minimizing downtime.",
      hoverIcon: <BsArrowRightShort />,
    },
    {
      icon: <PiBuildingOffice />,
      title: "Tailored Solutions",
      description:
        "We work closely with our clients to provide custom welding and fabrication services that meet their specific needs.",
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
          <p className="text-[#f97a2b] text-sm font-extrabold">Services</p>
          <p className="text-3xl font-extrabold mt-2 text-[#494949]">
            About Us
          </p>
          <p className="text-base mt-5 text-[#9B9B9B] font-semibold">
           We specialize in precision welding and fabrication of high-quality agricultural machinery for the palm oil industry. With years of experience in engineering and metalwork, we design and build durable, efficient, and reliable machines that enhance productivity and streamline palm oil processing.
          </p>
          
        </div>

        {/* Right Section */}
        <div className="md:w-full flex flex-col items-center mb-10 ml- mr-">
          {/* Top Bar */}
          <div className="border-2 bg-[#f97a2b] border-[#f97a2b] h-[130vh] md:h-32 w-full md:w-[93vw] lg:w-[56vw]">
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
                <p className="text-[30px] mt-1 border-2 px-7 py-7 bg-[#F2F2F2] border-[#F2F2F2] rounded-full font-bold mb-3 text-[#f97a2b]">
                  {card.icon}
                </p>
                <p className="text-[18px] font-semibold mb-2">{card.title}</p>
                <p className="w-44 text-center text-[#9B9B9B]">
                  {card.description}
                </p>

                {/* Hover Effect Icon */}
                <div className="absolute bottom-[-1.5rem] border-2 py-3 px-3 rounded-full bg-[#f97a2b] border-[#f97a2b] opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition duration-300">
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
