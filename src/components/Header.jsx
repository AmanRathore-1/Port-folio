import { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <div className="profile-picture">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5F9pk0y5VAHPtNriYCvg2P4oFnars7Qdgpg&s" 
              alt="Aman Rathore" 
              className="profile-img"
            />
          </div>
          <div className="logo">Aman Rathore</div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">👤</span>
            About
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">💼</span>
            Projects
          </a>
          <a href="#resume" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">📄</span>
            Resume
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">✉️</span>
            Connect
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header