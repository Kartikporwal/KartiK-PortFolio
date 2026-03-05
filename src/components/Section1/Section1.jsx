import React from 'react'

import Navbar from './Navbar'
import Left from './Left'
import Page1Content from './Page1Content'

const Section1 = () => {
  return (
    <div className='w-full h-screen bg-gray-300'>
        <Navbar />
         
        <Page1Content />
    </div>
  )
}

export default Section1
