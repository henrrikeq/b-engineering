import React from "react";

const Contact = () => {
  return (
    <div className="mt-20">
      <p>Contact Us</p>
      <div className="flex flex-col lg:flex-row">
      <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
        <img
          src="./src/assets/images/Logo.jpeg"
          alt="Henrrike Quarshie"
          className="h-[40vh] lg:h-[100vh] w-full object-cover"
        />
      </div>
      </div>
    </div>
  );
};

export default Contact;
