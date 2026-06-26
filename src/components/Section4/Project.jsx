import React from 'react'

const Project = ({projects}) => {
  return (
      <section id='projects'
      className='bg-[#09090B] text-white py-24 px-6'>

        <div className='max-w-7xl mx-auto'>

          <div className='text-center'>
             <h2 className='text-5xl font-bold'>
              My <span className='text-blue-500'>Projects</span>
             </h2>

             <p className='text-gray-400 mt-4 text-lg'>
               A collection of projects that showcase my skills in full-stack web development.
             </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>

            {projects.map((project,index) => (

              <div key={index}
               className='bg-[#16161d] rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300'>

                <div className='p-6'>
                   <h3 className='text-2xl font-bold'>
                    {project.title}
                   </h3>
                   <p className='text-gray-400 mt-4'>
                    {project.description}
                   </p>

                   {/* <div className='flex flex-wrap gap-2 mt-6'>
                    {project.tech.map((item,i) => (
                      <span key={i}
                      className='bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm'>
                        {item}
                      </span>
                    ))}
                   </div> */}
                </div>
               </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Project
