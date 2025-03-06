import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center h-20 bg-white text-black fixed w-full px-6 z-50 shadow-sm">
        <nav className="flex items-center gap-2">
          <img src="./src/assets/images/Logo.jpeg" alt="Logo" className="h-8 w-8 rounded-full" />
          <p className="text-lg font-bold">Buabey-Engineering</p>
        </nav>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <p className="hover:text-blue-600 cursor-pointer transition-colors">Home</p>
          <p className="hover:text-blue-600 cursor-pointer transition-colors">About</p>
          <p className="hover:text-blue-600 cursor-pointer transition-colors">Innovator</p>
          <p className="hover:text-blue-600 cursor-pointer transition-colors">Services</p>
          <p className="hover:text-blue-600 cursor-pointer transition-colors">Contact</p>
        </nav>
        
        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="24" 
              height="24" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-black"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-white shadow-md z-40 py-4 px-6 flex flex-col space-y-4 border-t">
          <p className="hover:text-blue-600 cursor-pointer transition-colors">Home</p>
          <p className="hover:text-blue-600 cursor-pointer transition-colors">About</p>
          <p className="hover:text-blue-600 cursor-pointer transition-colors">Innovator</p>
          <p className="hover:text-blue-600 cursor-pointer transition-colors">Services</p>
          <p className="hover:text-blue-600 cursor-pointer transition-colors">Contact</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;