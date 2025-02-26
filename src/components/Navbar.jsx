import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroMidpoint = window.innerHeight / 2;
      setIsScrolled(window.scrollY > heroMidpoint);

      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    // Debounce function
    let debounceTimeout;
    const debounceScroll = () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(handleScroll, 50); 
    };

    window.addEventListener("scroll", debounceScroll);

    // Cleanup
    return () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      window.removeEventListener("scroll", debounceScroll);
    };
  }, []);

  const handleFreeConsultationClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full overflow-x-hidden md:bg-[#000000] md:-mt-5 lg:bg- lg:mt-2">
      <div
        className={`w-full h-[6rem] flex justify-between items-center transition-all duration-300 ease-in-out ${
          isScrolled
            ? "fixed top-0 bg-white text-black shadow-lg z-50"
            : "relative bg-transparent text-white"
        }`}
      >
        <div className="flex flex-col justify-center ml-4 md:ml-10 lg:ml-40 items-center">
          <p className="text-[20px] font-extrabold ">B-ENGINEERING</p>
        </div>

        {/* Hamburger Menu for small and medium screens */}
        <div className="flex items-center mr-4 sm:block md:block lg:hidden md:pr-8">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links for Large Screens (hidden on small and medium screens) */}
        <div className="hidden lg:flex gap-10 text-[16px] font-semibold ml-10">
          {[ 
            "home", "about", "services", "case-studies", 
            "attorneys", "blog", "contact"
          ].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`hover:text-[#AFA939] ${activeSection === section ? "border-b-2 border-[#AFA939]" : ""}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, " ")}
            </a>
          ))}
        </div>

        {/* Free Consultation Button for Large Screens */}
        
      </div>

      {/* Mobile and Medium Menu (only shown on small and medium screens) */}
      {isMenuOpen && (
        <div className="flex flex-col items-center bg-white md:bg-[#000000] md:text-white text-black shadow-lg z-50 w-full sm:block md:block lg:hidden">
          {[ 
            "home", "about", "services", "case-studies", 
            "attorneys", "blog", "contact"
          ].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`py-4 px-6 text-[18px] hover:text-[#AFA939] ${
                activeSection === section ? "border-b-2 border-[#AFA939]" : ""
              }`}
              onClick={toggleMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, " ")}
            </a>
          ))}
          <button
            onClick={() => {
              handleFreeConsultationClick();
              toggleMenu();
            }}
            className="border-2 px-4 py-2 font-semibold bg-[#AFA939] border-[#AFA939] text-white hover:bg-[#8c8305] hover:border-[#8c8305] my-4 rounded-md transition duration-300"
          >
            Free Consultation
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
