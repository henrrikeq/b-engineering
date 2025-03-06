import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen/index";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="h-20"> {/* Add height here to create space for the fixed navbar */}
      <div className="flex justify-between items-center h-20 bg-white text-black fixed top-0 w-full px-6 z-50 shadow-sm">
        <nav className="flex items-center gap-2">
          <Link to="/">
            <img src="https://res.cloudinary.com/dxggbrrre/image/upload/v1741271461/Logo_zacepf.jpg" alt="Logo" className="h-8 w-8 rounded-full" />
          </Link>
          <p className="text-lg font-bold">Buabey-Engineering</p>
        </nav>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600 cursor-pointer transition-colors" onClick={handleLinkClick}>Home</Link>
          <Link to="/aboutproduct" className="hover:text-blue-600 cursor-pointer transition-colors" onClick={handleLinkClick}>About</Link>
          <Link to="/aboutinnovator" className="hover:text-blue-600 cursor-pointer transition-colors" onClick={handleLinkClick}>Innovator</Link>
          <Link to="/showcase" className="hover:text-blue-600 cursor-pointer transition-colors" onClick={handleLinkClick}>Services</Link>
          <Link to="/contact" className="hover:text-blue-600 cursor-pointer transition-colors" onClick={handleLinkClick}>Contact</Link>
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
          <Link to="/" className="hover:text-blue-600 cursor-pointer transition-colors" onClick={handleLinkClick}>Home</Link>
          <Link to="/aboutproduct" className="hover:text-blue-600 cursor-pointer transition-colors" onClick={handleLinkClick}>About</Link>
          <Link to="/aboutinnovator" className="hover:text-blue-600 cursor-pointer transition-colors" onClick={handleLinkClick}>Innovator</Link>
          <Link to="/showcase" className="hover:text-blue-600 cursor-pointer transition-colors" onClick={handleLinkClick}>Services</Link>
          <Link to="/contact" className="hover:text-blue-600 cursor-pointer transition-colors" onClick={handleLinkClick}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;