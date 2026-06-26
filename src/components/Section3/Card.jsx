import React from 'react'
import { Code2,Server, Database, Wrench } from 'lucide-react'

const Card = ({skills}) => {
  return (
     <section id='skills'
     className='bg-[#09090B] text-white py-24 px-6'>
      <div className='max-w-7xl mx-auto'>

        <div className='text-center'>

          <h2 className='text-5xl font-bold'>
            My <span className='text-blue-500'>Skills</span>
          </h2>
           <p className="text-gray-400 mt-4 text-lg">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 mt-20'>

          <div className='bg-[#16161d] rounded-3xl p-8 hover:scale-[1.02] transition'>

            <div className='flex items-center gap-4 mb-6'>
               <Code2 size={35} className="text-blue-500" />
              <h3 className="text-3xl font-bold">Frontend</h3>
            </div>

            <div className='flex flex-wrap gap-4'>
               {skills[0].items.map((item,index) => (
               <span
               key={index}
               className='bg-gray-800 px-5 py-2 rounded-full text-gray-300 hover:bg-pink-500 hover:text-white transition'>
                {item}
               </span>
             ))}
              
            </div>
          </div>

          <div className='bg-[#16161d] rounded-3xl p-8 hover:scale-[1.02] transition'>

            <div className='flex items-center gap-4 mb-6'>
                <Server size={35} className="text-green-500" />
              <h3 className="text-3xl font-bold">Backend</h3>
            </div>

            <div className='flex flex-wrap gap-4'>
             {skills[1].items.map((item,index) => (
               <span
               key={index}
               className='bg-gray-800 px-5 py-2 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition'>
                {item}
               </span>
             ))}
            </div>
          </div>

          <div className='bg-[#16161d] rounded-3xl p-8 hover:scale-[1.02] transition'>

            <div className='flex items-center gap-4 mb-6'>
                 <Database size={35} className="text-pink-500" />
              <h3 className="text-3xl font-bold">Database</h3>
            </div>

            <div className='flex flex-wrap gap-4'>
              {skills[2].items.map((item,index) => (
               <span
               key={index}
               className='bg-gray-800 px-5 py-2 rounded-full text-gray-300 hover:bg-yellow-500 hover:text-white transition'>
                {item}
               </span>
             ))}
            </div>
          </div>

          <div className='bg-[#16161d] rounded-3xl p-8 hover:scale-[1.02] transition'>

            <div className='flex items-center gap-4 mb-6'>
               <Wrench size={35} className="text-yellow-400" />
              <h3 className="text-3xl font-bold">Tools</h3>
            </div>

            <div className='flex flex-wrap gap-4'>
                {skills[3].items.map((item,index) => (
               <span
               key={index}
               className='bg-gray-800 px-5 py-2 rounded-full text-gray-300 hover:bg-green-500 hover:text-white transition'>
                {item}
               </span>
             ))}
            </div>
          </div>
        </div>
      </div>


     </section>
  )
}

export default Card








