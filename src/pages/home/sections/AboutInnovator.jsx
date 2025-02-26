import React, { useState } from "react";

const AboutInnovator = () => {

  const content = {
    mission:
      "Our mission is to provide top-notch legal care and ensure justice for all our clients with integrity and professionalism.",
    vision:
      "Our vision is to be the leading legal care provider globally, setting standards of excellence in advocacy and service.",
    value:
      "Our values are rooted in transparency, commitment, and unwavering dedication to achieving justice for our clients.",
  };

  const [activeText, setActiveText] = useState(content.mission); // Default text is "Our Mission"
  const [activeButton, setActiveButton] = useState("mission"); // Tracks which button is active

  return (
    <div className="flex flex-col md:flex-row h-[100vh] mt-20 md:mt-40 md:ml-20 mr-7">
      {/* Image Section */}
      <div className="flex justify-center md:justify-start lg:ml-40 w-full md:w-1/2">
        <img
          src="./assets/image/staff-1.jpg"
          alt="About Img"
          className=" md:h-[100vh] lg:h-[90vh] w-full md:w-[38vw] object-cover lg:ml-0 ml-6"
        />
      </div>

      {/* Text Section */}
      <div className="mr-36 md:w-1/2 px-4 m-3 lg:m-8 w-full md:m-8">
        <p className="text-[#ffa62b] text-[16px] font-extrabold mb-3">
          Welcome to Buabe-Engineering
        </p>
        <p className="text-[1.5rem] md:text-[1.8rem] font-bold mb-5 text-[#494949]">
          Quality and Affordable Constructor
        </p>

        {/* Buttons */}
        {/* <div className="space-y-2 lg:space-x-2 md:space-x-2 my-4 text-[#494949] lg:flex-row lg:w-[90%]">
          <button
            className={`border-[0.5px] py-2 lg:w-[30%] md:w-[27%] w-full rounded font-bold ${activeButton === "mission"
                ? "bg-[#AFA939] border-[#AFA939] text-white"
                : ""
              }`}
            onClick={() => {
              setActiveText(content.mission);
              setActiveButton("mission");
            }}
          >
            Our Mission
          </button>
          <button
            className={`border-[0.5px] py-2 lg:w-[30%] md:w-[27%] w-full rounded font-bold ${activeButton === "vision"
                ? "bg-[#AFA939] border-[#AFA939] text-white"
                : ""
              }`}
            onClick={() => {
              setActiveText(content.vision);
              setActiveButton("vision");
            }}
          >
            Our Vision
          </button>
          <button
            className={`border-[0.5px] py-2 lg:w-[30%] md:w-[27%] w-full  rounded font-bold ${activeButton === "value"
                ? "bg-[#AFA939] border-[#AFA939] text-white"
                : ""
              }`}
            onClick={() => {
              setActiveText(content.value);
              setActiveButton("value");
            }}
          >
            Our Value
          </button>
        </div> */}

        {/* Displayed Text */}
        <div className="mb-4 border-[0.5px] lg:w-[85%] md:w-[30vw] w-[87vw] h-auto lg:h-[25vh] md:h-[30vh] rounded-md bg-[#F8F9FA] text-gray-500 font-semibold">
          <p className="m-5">{activeText}</p>
        </div>

        {/* Experience Text */}
        <div className="flex justify-center md:justify-start">
          <p className="font-extrabold text-[20px] border-2 py-4 lg:w-[60%] md:w-[92%] w-[86vw] mt-4  flex justify-center lg:-ml-12 lg:mt-10 md:-ml-6 bg-[#ffa62b] border-[#ffa62b] text-[#494949]">
            40 Years of Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInnovator;
