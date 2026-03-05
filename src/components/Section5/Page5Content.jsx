import React from 'react'
import LeftT from './LeftT'
import RightT from './RightT'

const Page5Content = () => {
  return (
    <section id="contact" className='w-full bg-gray-300 px-4 sm:px-10 md:px-20 py-16 scroll-mt-24'>

      <h1 className='font-bold text-3xl sm:text-4xl text-center text-blue-400 mb-10'>
        Contact Me
      </h1>

      <div className='flex flex-col md:flex-row gap-10 justify-center items-start'>

        <LeftT />
        <RightT />

      </div>

    </section>
  )
}

export default Page5Content


