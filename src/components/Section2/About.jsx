import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-8 md:px-16 bg-zinc-100">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-pink-400">
          About Me
        </h1>

        <p className="text-center mt-10 text-gray-700 text-base sm:text-lg leading-relaxed">

          Hello! I'm <span className="font-semibold">Kartik Porwal</span>, a passionate Full Stack Developer and Computer Science student with a strong interest in building modern web applications.

          <br />

          I specialize in the <span className="font-semibold">MERN stack (MongoDB, Express.js, React.js, Node.js)</span> and enjoy developing scalable, user-focused digital products.

          <br />

          I focus on writing clean, maintainable code and designing efficient backend systems while creating responsive and intuitive user interfaces.

          <br /><br />

          Through hands-on projects like collaborative platforms and real-time web applications, I continuously improve my problem-solving and development skills.

          <br /><br />

          My goal is to contribute to impactful software solutions, collaborate with talented developers, and grow as a professional software engineer.

        </p>

      </div>

    </section>
  )
}

export default About
