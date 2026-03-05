import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/Section5/Section5'

const App = () => {

  const skills = [
    {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "EJS", "React JS"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API", "JWT"]
  },
  {
    title: "Database & Tools",
    items: ["MongoDB", "MySQL", "Git", "GitHub", "Postman","Render","Vercel"]
  }
]
   const projects = [
    {
      title: "🚀 DevCollab – Developer Collaboration Platform",
      description:
        "Built a full-stack collaboration platform that allows developers to discover projects and contribute together. Integrated GitHub authentication and real-time discussions to improve developer collaboration.",
      tech: "React.js | Node.js | Express.js | MongoDB | GitHub OAuth | Socket.io",
      github: "",
      live: ""
    },
    {
      title: "🛒 Scatch – E-Commerce Web Application",
      description:
        "Developed a full-stack e-commerce platform with secure user authentication, product management, and shopping cart functionality.",
      tech: "Node.js | Express.js | MongoDB | EJS | Tailwind CSS",
      github: "https://github.com/Kartikporwal/Scatch",
      live: ""
    },
    {
      title: "📝 Notes / Task Management App",
      description:
        "Created a task management web application that allows users to add, update, and delete tasks efficiently.",
      tech: "Node.js | Express.js | EJS | Tailwind CSS | MongoDB",
      github: "https://github.com/Kartikporwal/Notes",
      live: ""
    }
  ]
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 skills={skills}/>
      <Section4 projects={projects}/>
      <Section5 />
    </div>
  )
}

export default App
