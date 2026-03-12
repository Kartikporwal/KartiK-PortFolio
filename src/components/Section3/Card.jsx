import React from 'react'

const Card = ({ skills }) => {
  return (
    <section id="skills" className='w-full px-4 sm:px-10 md:px-20 py-16 scroll-mt-24 bg-gray-300 '>
  

      <h1 className='text-3xl sm:text-4xl font-bold text-center text-blue-500'>
        Skills
      </h1>
      <div className='max-w-6xl mx-auto mt-5'>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>

          {skills.map((skill, index) => (
            <div
              key={index}
              className='p-5 rounded-xl bg-black/40 border border-white/10'
            >

              <h4 className='text-indigo-100 mb-3 font-bold text-center text-3xl'>
                {skill.title}
              </h4>

              <div className='flex flex-wrap gap-2 bg-gray-400 border-2 border-black rounded-2xl p-10'>

                {skill.items.map((item, i) => (
                <span
  key={i}
  className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md 
  text-black rounded-full border border-white/20 
  hover:bg-blue-500 hover:border-blue-500 
  transition duration-300 font-semibold"
>
  {item}
</span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Card







