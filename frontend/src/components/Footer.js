import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Dev</span>
          <span className="logo-slash">/</span>
          <span className="logo-bracket">&gt;</span>
        </div>

        <div className="footer-social">
          <a href="https://github.com/anasdabbebi" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/anas-dabbebi/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="mailto:anas.dabbebi@email.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-text">
          <p>
            {t('footer.madeWith')} <FaHeart className="heart" /> {t('footer.using')}
          </p>
          <p className="copyright">
            © {currentYear} Anas Dabbabi. {t('footer.rights')}
          </p>
        </div>

        <Link to="home" smooth duration={500} className="back-to-top">
          <FaArrowUp />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
