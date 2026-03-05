import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-white shadow-md fixed top-0 left-0 z-50'>

      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>

        {/* Logo */}
        <h1 className='text-2xl font-bold text-pink-500'>
          KARTIK PORWAL
        </h1>

        {/* Menu */}
        <div className='hidden md:flex gap-10 text-lg font-semibold text-gray-700'>

          <a href="#home" className='hover:text-pink-500 transition'>Home</a>
          <a href="#about" className='hover:text-pink-500 transition'>About</a>
          <a href="#skills" className='hover:text-pink-500 transition'>Skills</a>
          <a href="#projects" className='hover:text-pink-500 transition'>Projects</a>
          <a href="#contact" className='hover:text-pink-500 transition'>Contact</a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar

