import './About.css'

const About = () => {
  // Tech stack data with SVG/Image icons matching the reference
  const languages = [
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
  ]

  const webDev = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'NextJs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    // { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'RestAPI', icon: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png' },
    { name: 'ExpressJs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'SocketIO', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
    { name: 'MUI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    // { name: 'GSAP', icon: 'https://greensock.com/uploads/set_resources_2/e3470c97623c019d3db0652b8f8fdc7c_gsap-greensock-icon.svg' },
    // { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' }
  ]

  const databases = [
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
  ]

  const tools = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    // { name: 'Cloudinary', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudinary/cloudinary-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Cursor', icon: 'https://cursor.sh/brand/icon.svg' },
    { name: 'Other', icon: 'https://cdn-icons-png.flaticon.com/512/1091/1091888.png' }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="about-intro">
          I have a passion for developing robust scalable backend systems with a focus on
          performance, security, and efficiency.
        </p>

        {/* Languages Section */}
        <div className="tech-category">
          <h3 className="category-title">
            <span className="category-arrow">➜</span>
            Languages
          </h3>
          <div className="tech-grid">
            {languages.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Web Development Section */}
        <div className="tech-category">
          <h3 className="category-title">
            <span className="category-arrow">➜</span>
            Web Development
          </h3>
          <div className="tech-grid">
            {webDev.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Database Section */}
        <div className="tech-category">
          <h3 className="category-title">
            <span className="category-arrow">➜</span>
            Database
          </h3>
          <div className="tech-grid">
            {databases.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools/Software Section */}
        <div className="tech-category">
          <h3 className="category-title">
            <span className="category-arrow">➜</span>
            Tools/Software/Others
          </h3>
          <div className="tech-grid">
            {tools.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="info-section">
          <h3 className="section-subtitle">What I Do</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <span className="icon-emoji">🚀</span>
              </div>
              <h3 className="skill-title">Backend Development</h3>
              <p className="skill-description">
                Building scalable RESTful APIs with Node.js, Express.js, and implementing secure authentication using JWT tokens. Expertise in MongoDB database design and optimization.
              </p>
              <div className="skill-tech-list">
                <span className="mini-tech">Node.js</span>
                <span className="mini-tech">Express</span>
                <span className="mini-tech">MongoDB</span>
                <span className="mini-tech">JWT</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <span className="icon-emoji">⚡</span>
              </div>
              <h3 className="skill-title">API Development</h3>
              <p className="skill-description">
                Designing and developing efficient REST APIs with proper error handling, validation, and documentation. Experience with Socket.IO for real-time communication.
              </p>
              <div className="skill-tech-list">
                <span className="mini-tech">REST API</span>
                <span className="mini-tech">Socket.IO</span>
                <span className="mini-tech">Postman</span>
              </div>
            </div>

      
          </div>
        </div>
      </div>
    </section>
  )
}

export default About