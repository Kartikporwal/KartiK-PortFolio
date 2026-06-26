import React, { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md borber-b border-gray-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">

        <h1 className="text-3xl font-bold">
          <span className="text-blue-500">Kartik</span>
          <span className="text-purple-500">Porwal.dev</span></h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 bg-[#17171b] px-8 py-4 rounded-full border border-gray-700">
          <a href="#home" className="text-white hover:text-pink-400">Home</a>
          <a href="#about" className="text-white hover:text-pink-400">About</a>
          <a href="#skills" className="text-white hover:text-pink-400">Skills</a>
          <a href="#projects" className="text-white hover:text-pink-400">Projects</a>
          <a href="#contact" className="text-white hover:text-pink-400">Contact</a>
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

          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="bg-pink-500 w-full text-center font-semibold px-4 py-2">Contact Me</a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;

