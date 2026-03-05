import React from 'react'
import { Linkedin, Instagram, Twitter, Mail, Github } from 'lucide-react'

const LeftT = () => {
  return (
    <div className='w-full md:w-1/2 rounded-2xl p-6 sm:p-10 bg-gray-900 text-white'>

      <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left'>
        Connect Me
      </h1>

      <div className='flex flex-wrap justify-center md:justify-start gap-4 text-2xl'>

        <a
          className="border-2 p-3 rounded-lg hover:bg-blue-500 transition"
          href="https://www.linkedin.com/in/kartik-porwal-688302304"
          target="_blank"
        >
          <Linkedin />
        </a>

        <a
          className="border-2 p-3 rounded-lg hover:bg-pink-500 transition"
          href="https://www.instagram.com/_kartik_porwal_?igsh=MTdmNXZhZ3A4aTVu"
          target="_blank"
        >
          <Instagram />
        </a>

        <a
          className="border-2 p-3 rounded-lg hover:bg-sky-500 transition"
          href="https://x.com/kart6542"
          target="_blank"
        >
          <Twitter />
        </a>

        <a
          className="border-2 p-3 rounded-lg hover:bg-red-500 transition"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=porwalkartik14@gmail.com"
          target="_blank"
        >
          <Mail />
        </a>

        <a
          className="border-2 p-3 rounded-lg hover:bg-gray-500 transition"
          href="https://github.com/Kartikporwal"
          target="_blank"
        >
          <Github />
        </a>

      </div>

    </div>
  )
}

export default LeftT
