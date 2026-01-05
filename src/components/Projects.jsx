import { Github } from 'lucide-react'
import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'Blog app (backend)',
      description: 'A secure and scalable backend for a blog platform that handles user authentication, post creation, and data management using RESTful APIs. Built with Node.js, Express, and MongoDB, it supports JWT-based auth, input validation, and efficient CRUD operations.',
      tech: 'Node.js + Express + MongoDB',
      tags: ['Backend', 'API', 'Jwt','Validators'],
      github: 'https://github.com/AmanRathore-1/blog_Login.git',
      icon: '🔔'
    },
    {
      title: 'personal_ai_chatbot',
      description: 'A lightweight AI-powered chatbot backend that handles user queries, manages conversations, and integrates secure APIs for intelligent responses. Designed for scalability, clean architecture, and easy integration into web or chat platforms.',
      tech: 'Node.js + JWT + MongoDB',
      tags: ['GroqApi', 'MongoDb', 'FullStack'],
      github: 'https://github.com/AmanRathore-1/personal_ai_chatbot.git',
      demo: '#',
      icon: '🔐'
    },
    {
      title: ' Python_Discord_bot',
      description: 'A feature-rich Discord bot built with Python that automates moderation, sends welcome messages, and supports custom commands using an event-driven architecture. Designed for reliability, secure configuration, and real-time server interaction.',
      tech: 'Node.js + Discord.js',
      tags: ['Real-time', 'Discord.js', 'Chat','Python'],
      github: 'https://github.com/AmanRathore-1/Python_Discord_bot.git',
      icon: '💬'
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-bg-overlay"></div>
      
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Building scalable solutions with modern technologies and best practices
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="project-card-inner">
                <div className="project-header">
                  <div className="project-icon">
                    <span className="project-emoji">{project.icon}</span>
                  </div>
                  <div className="project-number">0{index + 1}</div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-tech">
                  <span className="tech-icon">⚙️</span>
                  {project.tech}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link github-link">
                    <Github size={16} />
                    GitHub
                  </a>
                </div>

                {hoveredIndex === index && (
                  <div className="project-glow"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects