import React, { useState } from "react";
import {Menu, X} from "lucide-react" 

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
            className="text-2xl text-white"
          >
           {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-[#16161d]/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col p-4">
        
              <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              🏠 Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              👨‍💻 About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              ⚡ Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              🚀 Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              📩 Contact
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Contact Me
            </a>
        </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;

