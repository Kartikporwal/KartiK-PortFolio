import React, { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-500">
          KARTIK PORWAL
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg font-semibold text-gray-700">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#skills" className="hover:text-pink-500">Skills</a>
          <a href="#projects" className="hover:text-pink-500">Projects</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 text-lg font-semibold text-gray-700">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;

