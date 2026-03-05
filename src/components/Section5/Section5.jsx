import React from 'react'
import Page5Content from './Page5Content'

const Section5 = () => {
  return (
    <div className='w-full'>

      <Page5Content />

      {/* Footer */}
      <footer className='bg-gray-900 text-white text-center py-6 mt-10'>

        <p className='text-sm'>
          © {new Date().getFullYear()} Kartik Porwal. All Rights Reserved.
        </p>

      </footer>

    </div>
  )
}

export default Section5
