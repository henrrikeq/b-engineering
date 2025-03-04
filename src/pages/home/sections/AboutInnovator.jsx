import React, { useState } from "react";

const AboutInnovator = () => {


  return (
    <div className="flex flex-col md:flex-row h-[100vh] mt-20 md:mt-40 md:ml-20 mr-7">
      {/* Image Section */}
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <img
          src="./src/assets/images/about.jpeg"
          alt="About Img"
          className=" md:h-[100vh] lg:h-[90vh] w-full md:w-[38vw] object-cover lg:ml-0 ml-6"
        />
      </div>

      {/* Text Section */}
      <div className="mr-36 md:w-1/2 px-4 m-3 lg:m-8 w-full md:m-8">
        <p className="text-[#f97a2b] text-[16px] font-extrabold mb-3">
          Meet the Innovator
        </p>
        <p className="text-[1.5rem] md:text-[1.8rem] font-bold mb-5 text-[#494949]">
          Quality and Affordable Constructor
        </p>

        {/* Displayed Text */}
        <div className="mb-4 lg:w-[85%] md:w-[30vw] w-[87vw] h-auto lg:h-[25vh] md:h-[30vh] rounded-md text-gray-500 font-semibold">
          <p className="m-">At the heart of Buabey Engineering is Micheal Sebuabe, a visionary engineer dedicated to transforming palm oil production in Ghana. Based in Mankessim, Central Region, Micheal recognized the challenges faced by local farmers and processors—inefficiency, high labor costs, and outdated equipment slowing down production.

            With a passion for problem-solving and a deep understanding of agricultural machinery, he founded Buabey Engineering to provide simple, efficient, and durable solutions tailored to the needs of the palm oil industry. Through expert welding and innovative machine designs, Micheal is helping businesses enhance productivity, reduce manual labor, and improve overall output.

            His mission is clear: to revolutionize palm oil processing with affordable, high-quality machinery, ensuring that Ghana’s agricultural sector continues to grow and thrive.</p>
        </div>

      </div>
    </div>
  );
};

export default AboutInnovator;
