
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
          <span className="text-blue-500">Kartik</span>
          <span className="text-purple-500">Porwal.dev</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 bg-[#17171b] px-6 lg:px-8 py-3 rounded-full font-semibold border border-gray-700">

          <a href="#home" className="text-white hover:text-pink-400 transition">Home</a>
          <a href="#about" className="text-white hover:text-pink-400 transition">About</a>
          <a href="#skills" className="text-white hover:text-pink-400 transition">Skills</a>
          <a href="#projects" className="text-white hover:text-pink-400 transition">Projects</a>
          <a href="#contact" className="text-white hover:text-pink-400 transition">Contact</a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#16161d] border-t border-gray-700 shadow-xl">

          <div className="flex flex-col p-4 gap-2">

            <a href="#home" onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white">
              🏠 Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white">
              👨‍💻 About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white">
              ⚡ Skills
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white">
              🚀 Projects
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white">
              📩 Contact
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="mt-2 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold">
              Contact Me
            </a>

          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;


