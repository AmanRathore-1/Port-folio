import { Award, Briefcase, Download, FileText, GraduationCap } from 'lucide-react'
import { useState } from 'react'
import './Resume.css'

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false)

 const handleDownload = () => {
  setIsDownloading(true)

  setTimeout(() => {
    setIsDownloading(false)

    // Open resume in new tab
    window.open('/Aman_Rathore_Resume.pdf', '_blank')
  }, 600)
}


  const highlights = [
    {
      icon: <Briefcase size={24} />,
      title: '1 Years Experience',
      description: 'Backend Development & API Design'
    },
    {
      icon: <Award size={24} />,
      title: '15+ Projects',
      description: 'Completed with best of my ability'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Tech Stack',
      description: 'MERN, Node.js, MongoDB, Express'
    }
  ]

  const skills = [
    'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 
    'REST API', 'GraphQL', 'JWT', 'Socket.IO',
    'React', 'TypeScript', 'Redis', 'Docker'
  ]

  return (
    <section id="resume" className="resume">
      <div className="resume-bg-overlay"></div>
      
      <div className="resume-container">
        <div className="resume-header">
          <h2 className="section-title">Resume</h2>
          <p className="resume-subtitle">
            Download my resume to learn more about my experience, skills, and achievements
          </p>
        </div>

        {/* Highlights Section */}
        <div className="resume-highlights">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{highlight.icon}</div>
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Preview */}
        {/* <div className="skills-preview">
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-tags">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div> */}

        {/* Download Section */}
        <div className="resume-download-section">
          <div className="download-card">
            <div className="download-icon-wrapper">
              <FileText size={48} className="document-icon" />
              <div className="icon-glow"></div>
            </div>
            
            <h3 className="download-title">Professional Resume</h3>
            <p className="download-description">
              Get the complete overview of my professional experience, projects, and technical expertise in a well-structured PDF format.
            </p>

            <button 
              className={`download-btn ${isDownloading ? 'downloading' : ''}`}
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <>
                  <div className="spinner"></div>
                  Downloading...
                </>
              ) : (
                <>
                  <Download size={20} />
                  Download Resume
                </>
              )}
            </button>

            <div className="download-info">
              <span className="file-info">📄 PDF Format</span>
              <span className="file-info">📊 2 Pages</span>
              <span className="file-info">🔄Updated Jan 2026</span>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        {/* <div className="resume-cta">
          <p className="cta-text">Interested in working together?</p>
          <a href="#contact" className="cta-btn">
            Let's Connect
            <span className="cta-arrow">→</span>
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default Resume