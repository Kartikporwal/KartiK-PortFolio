import React from 'react'

const Project = ({ projects }) => {
  return (
    <section id="projects" className='w-full bg-gray-300 px-4 sm:px-10 md:px-20 py-16 scroll-mt-24'>

      <h1 className='text-3xl sm:text-4xl font-bold text-center text-pink-300'>
        Projects
      </h1>

      {projects.map((project, index) => (
        <div
          key={index}
          className='w-full max-w-6xl mx-auto bg-gray-900 mt-10 rounded-3xl p-6 sm:p-8 md:p-10'
        >

          <div className='text-white'>

            <h1 className='text-xl sm:text-2xl font-semibold text-gray-300 text-center'>
              {project.title}
            </h1>

            <p className='font-medium mt-4 text-sm sm:text-base text-gray-200'>
              {project.description}
            </p>

            <h2 className='text-xl sm:text-2xl md:text-3xl font-serif mt-6 text-gray-300 text-center'>
              Tech Stack
            </h2>

            <p className='text-sm sm:text-base md:text-lg font-medium text-center mt-2'>
              {project.tech}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6 font-bold underline justify-center items-center'>
              <a
                href={project.live}
                className='hover:text-pink-400 transition'
              >
                View Live
              </a>

              <a
                href={project.github}
                className='hover:text-blue-400 transition'
              >
                Github Repo.
              </a>
            </div>

          </div>

        </div>
      ))}

    </section>
  )
}

export default Project