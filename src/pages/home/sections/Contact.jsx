import React from "react";
import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMailto = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Construct the mailto link
    const mailtoLink = `mailto:Michael_standerfer@aol.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\n\n${message}\n`
    )}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className="mt-20">
      <p className="flex flex-col items-center mb-8 text-[2rem] text-[#494949] font-bold">Contact Us</p>
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <img
            src="./src/assets/images/Logo.jpeg"
            alt="Henrrike Quarshie"
            className="h-[40vh] lg:h-[100vh] w-full object-cover"
          />
        </div>
        <div className="p-8 w-full lg:w-1/2 bg-[#18486c]">
        <p className="text-l font-bold text-white mb-2">Contact Engineer</p>
        <p className="text-[2rem] font-bold text-white mb-6">Get In Touch</p>
        <form onSubmit={handleMailto} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1"></label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-[25rem] border-[0.5px] border-[#EDF2FA] p-2 rounded font-semibold bg-white caret-white text-black placeholder-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1"></label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-[25rem] border-[0.5px] p-2 rounded font-semibold bg-white caret-white text-white placeholder-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1"></label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-[25rem] border-[0.5px] p-2 rounded font-semibold bg-white caret-white text-white placeholder-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1"></label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-[25rem] border-[0.5px] p-2 rounded font-semibold bg-white caret-white text-white placeholder-black focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-[10rem] border-2 bg-gray-900 border-gray-900 text-white py-3 rounded font-semibold hover:bg-[#23272b] hover:border-[#23272b]"
          >
            Send message
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
