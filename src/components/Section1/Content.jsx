import { ArrowRight, Github, Linkedin, Mail} from 'lucide-react'
import React from 'react'


const Content = () => {
  return (
     <section id='home'
     className='min-h-screen flex items-center justify-center px-6'>
      
      <div className='max-w-5xl mx-auto text-center'>

        <div className='inline-block px-6 py-2 rounded-full bg-white text-black font-semibold'>
            🚀 Full Stack Web Developer
        </div>

        <h1 className='mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight'>
            Hi, I'm{" "}
            <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                Kartik Porwal
            </span>
        </h1>

        <h2 className='mt-8 text-2xl sm:text-3xl text-gray-400 font-semibold'>
            Building Modern & Scalable Web Application
        </h2>

        <p className='mt-6 text-lg text-white'>
            React • Node.js • Express.js • MongoDB • JavaScript • Tailwind CSS
        </p>

        <p className='mt-10 text-lg text-gray-400 leading-8 max-w-3xl mx-auto'>
        Full Stack Developer specializing in the MERN Stack.
          <br />
          I build responsive, scalable and secure web applications with clean
          architecture, modern UI and optimized backend solutions.
        </p>

        <div className='mt-12 flex flex-wrap justify-center gap-5'>

            <a 
            href="#projects"
            className='flex items-center gap-2 bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition'>
                View Projects
                 <ArrowRight size={20} />
            </a>

            <a 
            href="#contact"
            className='border border-gray-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition'>
                Contact Me
            </a>
            <div className="flex gap-4">

      <a
    href="/KARTIK_RESUME.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
  >
    Resume
  </a>
        </div>
        </div>

        <div className='flex justify-center gap-8 mt-10 text-gray-400'>

            <a
            href="https://github.com/Kartikporwal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/kartik-porwal-688302304"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Linkedin size={30} />
          </a>

          <a
            href="mailto:porwalkartik14@gmail.com"
            className="hover:text-red-500 transition"
          >
            <Mail size={30} />
          </a>
        </div>
      </div>
     </section>
  )
}

export default Content
