import React from 'react'
import Left from './Left'
import Right from './Right'

const Page1Content = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-between py-35'>
      <Left />
      <Right />

    </div>
  )
}

export default Page1Content
