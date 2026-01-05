import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'Webhook Processing System',
      description: 'Scalable webhook handler with retry logic, queue management, and dynamic notification system. Built for high-volume webhook processing with error handling and monitoring.',
      tech: 'Node.js + Express + MongoDB',
      tags: ['Backend', 'API', 'Webhooks'],
      github: '#',
      demo: '#',
      icon: '🔔'
    },
    {
      title: 'Auth & User Service',
      description: 'Complete JWT authentication system with OTP verification, refresh token rotation, and secure session management. Includes role-based access control.',
      tech: 'Node.js + JWT + MongoDB',
      tags: ['Security', 'Auth', 'Backend'],
      github: '#',
      demo: '#',
      icon: '🔐'
    },
    {
      title: 'Real-time Chat Application',
      description: 'Real-time messaging platform with Socket.IO, featuring private rooms, file sharing, and message history. Optimized for low latency communication.',
      tech: 'Node.js + Socket.IO + Redis',
      tags: ['Real-time', 'WebSocket', 'Chat'],
      github: '#',
      demo: '#',
      icon: '💬'
    },
    // {
    //   title: 'E-commerce REST API',
    //   description: 'Comprehensive REST API for e-commerce platform with payment integration, inventory management, and order tracking. Built with scalability in mind.',
    //   tech: 'Node.js + Express + PostgreSQL',
    //   tags: ['API', 'E-commerce', 'Backend'],
    //   github: '#',
    //   demo: '#',
    //   icon: '🛒'
    // }
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
                  <a href={project.demo} className="project-link demo-link">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>

                {hoveredIndex === index && (
                  <div className="project-glow"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="view-all-section">
          <p className="view-all-text">Want to see more?</p>
          <a href="https://github.com/yourusername" className="view-all-btn">
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default Projects