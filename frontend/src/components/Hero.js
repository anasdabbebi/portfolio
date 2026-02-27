import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-particles"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">{t('hero.greeting')}</p>
          <h1 className="hero-name">
            <span className="name-highlight">Anas Dabbebi</span>
          </h1>
          <h2 className="hero-title">
            {t('hero.title')}
          </h2>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          
          <div className="hero-buttons">
            <Link to="projects" smooth duration={500} className="btn btn-primary">
              {t('hero.viewProjects')}
            </Link>
            <Link to="contact" smooth duration={500} className="btn btn-outline">
              {t('hero.contactMe')}
            </Link>
          </div>

          <div className="hero-social">
            <a href="https://github.com/anasdabbebi" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/anas-dabbebi/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:anas.dabbebi@example.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-container">
            <img 
              src="/profile.jpg" 
              alt="Anas Dabbebi" 
              className="profile-image"
              onError={(e) => {
                e.target.src = 'https://avatars.githubusercontent.com/u/154029822?v=4';
              }}
            />
          </div>
          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-body">
              <pre>
                <code>
{`const developer = {
  name: "Anas Dabbebi",
  skills: [
    "React", "Node.js",
    "Express", "MongoDB",
    "Odoo", "Docker"
  ],
  passion: "Building solutions",
  available: true
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <Link to="about" smooth duration={500} className="scroll-indicator">
        <FaArrowDown className="bounce" />
      </Link>
    </section>
  );
};

export default Hero;
