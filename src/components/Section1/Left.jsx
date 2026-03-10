import React from 'react'

const Left = () => {
  return (
    <div className='w-full md:w-1/2 flex items-center justify-center p-6 md:p-10'>

      <div className='max-w-xl text-center md:text-left'>

        <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight'>
          Hi, I'm <span className='text-pink-500'>Kartik Porwal</span>
        </h1>

        <marquee>
         <p className='text-xl sm:text-2xl font-semibold text-indigo-500 mt-4'>
🚀 Aspiring Software Engineer | 💻 Full Stack Developer | ⚛️ MERN Stack Developer | 🔐 Web Authentication
</p>
        </marquee>

        <p className='text-gray-600 text-base sm:text-lg mt-6 leading-relaxed'>
          I build practical and scalable web applications. Full-Stack Developer focused on 
          clean architecture, secure backend systems, and maintainable user interfaces.
        </p>

        <div className='mt-8 flex gap-4 justify-center md:justify-start'>

          <a href="#projects">
            <button className='bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition'>
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className='border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-700 transition'>
              Contact Me
            </button>
          </a>

        </div>

      </div>

    </div>
  )
}

export default Left
