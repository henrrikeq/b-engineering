import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  
  return (
    <div>
      <div className="flex justify-between items-center h-20 bg-white text-black fixed w-full px-6 z-50">
        <nav className="flex items-center gap-2">
          <img src="./src/assets/images/Logo.jpeg" alt="Logo" className="h-8 w-8 rounded-full" />
          <p className="text-lg font-bold">Buabey-Engineering</p>
        </nav>
        <nav className="flex items-center gap-4">
          <p className="hidden sm:block">Home</p>
          <p className="hidden sm:block">About</p>
          <p className="hidden sm:block">Innovator</p>
          <p className="hidden sm:block">Services</p>
          <p className="hidden sm:block">Contact</p>
          
        </nav>
      </div>

    </div>
  );
};

export default Navbar;
