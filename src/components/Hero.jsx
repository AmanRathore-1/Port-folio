import './Hero.css'

const Hero = () => {
  const techIcons = [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', delay: '0s', x: '8%', y: '25%' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', delay: '0.5s', x: '88%', y: '20%' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', delay: '1s', x: '12%', y: '65%' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', delay: '1.5s', x: '85%', y: '70%' },
    { name: 'JWT', icon: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg', delay: '2s', x: '92%', y: '45%' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', delay: '2.5s', x: '15%', y: '40%' },
    { name: 'API', icon: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png', delay: '3s', x: '82%', y: '32%' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', delay: '3.5s', x: '20%', y: '80%' },
  ]

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      
      {/* Floating Tech Icons */}
      <div className="floating-icons">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className="tech-icon"
            style={{
              left: tech.x,
              top: tech.y,
              animationDelay: tech.delay
            }}
          >
            <div className="icon-wrapper">
              <img src={tech.icon} alt={tech.name} className="icon-image" />
            </div>
            <span className="icon-label">{tech.name}</span>
          </div>
        ))}
      </div>

      <div className="hero-container">
        <h1 className="hero-title">Aman Rathore</h1>
        <p className="hero-subtitle">Backend Developer | API Engineer | System Architect</p>
        <p className="hero-description">
          I build scalable backend systems, robust APIs, and secure server-side applications.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#resume" className="btn btn-secondary">Download Resume</a>
        </div>
      </div>
    </section>
  )
}

export default Hero