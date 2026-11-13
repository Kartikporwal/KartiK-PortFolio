
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

const Content = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-12 scroll-mt-20"
    >

      <div className="w-full max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-white text-black text-xs sm:text-sm font-semibold">
          🚀 Full Stack Web Developer
        </div>

        {/* Heading */}
        <h1 className="mt-5 sm:mt-8 text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Kartik Porwal
          </span>
        </h1>

        {/* Sub Heading */}
        <h2 className="mt-4 sm:mt-6 text-lg sm:text-2xl lg:text-3xl text-gray-400 font-semibold">
          Building Modern & Scalable Web Application
        </h2>

        {/* Skills */}
        <p className="mt-4 text-xs sm:text-base text-white leading-7">
          React.js • Node.js • Express.js • MongoDB • MySQL • JavaScript • Tailwind CSS
        </p>

        {/* Description */}
        <p className="mt-5 sm:mt-8 text-sm sm:text-base lg:text-lg text-gray-400 leading-7 sm:leading-8 max-w-3xl mx-auto">
          Full Stack Developer specializing in the MERN Stack.
          <br className="hidden sm:block" />
          I build responsive, scalable and secure web applications with clean
          architecture, modern UI and optimized backend solutions.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-3 sm:gap-5">

          <a
            href="#projects"
            className="flex items-center gap-2 bg-white text-black px-5 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-semibold hover:scale-105 transition"
          >
            View Projects
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="border border-gray-600 text-white px-5 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>

          <a
            href="/Kartik Porwal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-200 transition"
          >
            Resume
          </a>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 sm:gap-8 mt-8 sm:mt-10 text-gray-400">

          <a
            href="https://github.com/Kartikporwal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={25} />
          </a>

          <a
            href="https://www.linkedin.com/in/kartik-porwal-688302304"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Linkedin size={25} />
          </a>

          <a
            href="mailto:porwalkartik14@gmail.com"
            className="hover:text-red-500 transition"
          >
            <Mail size={25} />
          </a>

        </div>

      </div>

    </section>
  );
};

export default Content;

