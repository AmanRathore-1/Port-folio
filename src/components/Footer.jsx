import { ArrowUp, Github, Heart, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/AmanRathore-1', label: 'GitHub' },
   { 
  icon: <Linkedin size={30} />, 
  url: 'https://www.linkedin.com/in/aman-rathore-0435632b4', 
  label: 'LinkedIn' 
},
    // { icon: <Twitter size={20} />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:amanrathore3271@gmail.com', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="footer">
      <div className="footer-bg-overlay"></div>
      
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <h3 className="footer-brand">Aman Rathore</h3>
            <p className="footer-tagline">
              Backend Developer crafting scalable solutions with modern technologies
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={16} />
                <a href="mailto:amanrathore3271@gmail.com" className="contact-link">
                  amanrathore3271@gmail.com
                </a>
              </li>
              <li>
                <Github size={16} />
                <a href="github.com/AmanRathore-1" className="contact-link" target="_blank" rel="noopener noreferrer">
                  github.com/AmanRathore-1
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p className="footer-text">
            © {currentYear} Aman Rathore. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={14} className="heart-icon" /> using React & Node.js
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  )
}

export default Footer