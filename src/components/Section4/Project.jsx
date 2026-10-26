
import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

const Project = ({ projects = [] }) => {
  return (
    <section
      id="projects"
      className="text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            A collection of projects that showcase my skills
            in full-stack web development.
          </p>
        </div>

        {/* Vertical Project Layout */}
        <div className="flex flex-col gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6
              bg-[#16161d] border border-gray-800 rounded-2xl
              overflow-hidden p-5 
              transition duration-300"
            >

              {/* Project Image */}
              <div className="w-full md:w-64 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 md:h-full min-h-48
                  object-cover rounded-xl"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col flex-1">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech?.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-400
                      px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2
                    bg-gray-800 px-5 py-2 rounded-lg
                    hover:bg-gray-700 transition"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2
                    bg-blue-600 px-5 py-2 rounded-lg
                    hover:bg-blue-700 transition"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Project
