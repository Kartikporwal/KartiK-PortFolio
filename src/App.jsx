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
      items: ["HTML", "CSS", "JavaScript (ES6+)", "React JS", "Tailwind CSS"]
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST API", "JWT"]
    },
    {
      title: "Database & Tools",
      items: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"]
    }
  ]

  const projects = [
    {
      title: "🚀 DevCollab – Developer Collaboration Platform",
      image: "/images/devcollab.png",
      description:
        "Built a full-stack collaboration platform that allows developers to discover projects and contribute together. Integrated GitHub authentication and real-time discussions to improve developer collaboration.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "GitHub OAuth", "Socket.io"],
      github: "https://github.com/Kartikporwal/DevCollab-client",
      live: ""
    },
    {
      title: "🎯 GoalCraft – Interview Experience Sharing Platform",
      image: "/images/goalcraft.png",
      description:
        "Developed a full-stack platform where students can share interview experiences, browse company-wise interview questions, and help others prepare for placements. Implemented secure authentication, search, filtering, and role-based features for an engaging user experience.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      github: "https://github.com/DheerajRay-01/goal-craft",
      live: ""
    },
    {
      title: "🛒 Scatch – E-Commerce Web Application",
      image: "/images/scatch.png",
      description:
        "Built a full-stack e-commerce web application featuring secure user authentication, product management, shopping cart, and order processing. Designed a responsive and user-friendly interface using EJS and Tailwind CSS, while implementing CRUD operations, session-based authentication, and MongoDB for efficient data management.",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Tailwind CSS"],
      github: "https://github.com/Kartikporwal/Scatch",
      live: ""
    },
    {
      title: "🎨 CreativeX – Creative Agency Website",
      image: "/images/CreativeX.png",
      description:
        "Built a responsive creative agency website featuring Home, About, Services, Contact, Login, and SignUp pages. Designed a modern and user-friendly interface using React.js, Vite, and Tailwind CSS. Backend integration with Node.js, Express.js, and MongoDB can support user authentication and contact form submissions.",
      tech: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Kartikporwal/Template_Project",
      live: ""
    }
  ]

  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 skills={skills} />
      <Section4 projects={projects} />
      <Section5 />
    </div>
  )
}

export default App

