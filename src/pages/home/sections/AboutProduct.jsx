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
    <div className="w-full h-[80vh]">
      <div className="flex flex-col md:flex-col lg:flex-row">
        {/* Left Section */}
        <div className="lg:ml-32 ml-0 md:ml-0 md:w-[43rem] lg:w-1/3 p-4 md:pl-12 md:pt-12 mb-6 md:mb-0">
          <p className="text-[#f97a2b] text-sm font-extrabold">Services</p>
          <p className="text-3xl font-extrabold mt-2 text-[#494949]">
            About Us
          </p>
          <p className="text-base mt-5 text-[#9B9B9B] font-semibold">
           We specialize in precision welding and fabrication of high-quality agricultural machinery for the palm oil industry. With years of experience in engineering and metalwork, we design and build durable, efficient, and reliable machines that enhance productivity and streamline palm oil and vegetable oil processing. With a focus on innovation and accessibility, it seeks support to scale production, optimize machinery performance, and expand its reach to farmers and processors.
          </p>
          
        </div>
        <div>
          <div className="mt-6">
            <img src="https://res.cloudinary.com/dxggbrrre/image/upload/v1741357969/machine_hupdcs.jpg" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutProduct;
