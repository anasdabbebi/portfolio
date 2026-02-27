import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: 'home', name: t('nav.home') },
    { id: 2, link: 'about', name: t('nav.about') },
    { id: 3, link: 'skills', name: t('nav.skills') },
    { id: 4, link: 'projects', name: t('nav.projects') },
    { id: 5, link: 'experience', name: t('nav.experience') },
    { id: 6, link: 'contact', name: t('nav.contact') },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Dev</span>
          <span className="logo-slash">/</span>
          <span className="logo-bracket">&gt;</span>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          {links.map(({ id, link, name }) => (
            <li key={id} className="nav-item">
              <Link
                to={link}
                smooth
                duration={500}
                className="nav-link"
                onClick={() => setNav(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
          <FaGlobe size={16} />
          <span>{language.toUpperCase()}</span>
        </button>

        <div className="hamburger" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
