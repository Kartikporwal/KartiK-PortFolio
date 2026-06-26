import React from 'react'
import { Code2, Rocket, Briefcase, GraduationCap} from 'lucide-react'

const About = () => {
  return (
      <section id='about'
      className='bg-[#09090B] text-white py-24 px-6'>

        <div className='max-w-7xl mx-auto'>

          <div className='text-center'>
            <h2 className='text-5xl font-bold'>
              About <span className='text-blue-500'>Me</span>
            </h2>

            <p className='text-gray-400 mt-4 text-lg'>
              Get to know more about me, my journey and my passion for software
           development.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-16 mt-20 items-center'>

            <div>
              <h3 className='text-3xl font-bold mb-6'>
                Passionate Full Stack Developer 🚀
              </h3>

              <p className='text-gray-400 leading-8 text-lg'>
                Hello! I'm <span className="text-white font-semibold">Kartik Porwal</span>,
              a Computer Science Engineering student and passionate Full Stack
              Developer specializing in the MERN Stack.
              </p>

              <p className='text-gray-400 leading-8 mt-6 text-lg'>
                 I enjoy building responsive, secure and scalable web applications
              using React, Node.js, Express.js and MongoDB. My focus is on
              writing clean code, designing efficient backend systems and
              creating intuitive user experiences.
              </p>
                 <p className="text-gray-400 leading-8 mt-6 text-lg">
              I continuously improve my skills by building real-world projects
              and exploring modern technologies. My goal is to contribute to
              impactful software products while growing as a Software Engineer.
            </p>
            </div>

            {/* right side */}

            <div className='grid grid-cols-2 gap-6'>

              <div className='bg-[#16161d] rounded-2xl p-8 text-center hover:scale-105 transition'>
                <Code2 className="mx-auto text-blue-500" size={45} />
                <h3 className='mt-4 text-3xl font-bold'>15+</h3>
                <p className='text-gray-400 mt-2'>Technologies</p>
              </div>
              <div className="bg-[#16161d] rounded-2xl p-8 text-center hover:scale-105 transition">
              <Rocket className="mx-auto text-pink-500" size={45} />
              <h3 className="mt-4 text-3xl font-bold">5+</h3>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>
              <div className="bg-[#16161d] rounded-2xl p-8 text-center hover:scale-105 transition">
              <Briefcase className="mx-auto text-purple-500" size={45} />
              <h3 className="mt-4 text-3xl font-bold">MERN</h3>
              <p className="text-gray-400 mt-2">Specialization</p>
            </div>
              <div className="bg-[#16161d] rounded-2xl p-8 text-center hover:scale-105 transition">
              <GraduationCap className="mx-auto text-green-500" size={45} />
              <h3 className="mt-4 text-3xl font-bold">B.Tech</h3>
              <p className="text-gray-400 mt-2">Computer Science</p>
            </div>
            </div>
          </div>
        </div>

      </section>
  )
}

export default About

