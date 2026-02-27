import React from 'react';
import { FaCode, FaServer, FaCogs, FaRocket } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t, language } = useLanguage();

  const highlights = [
    {
      icon: <FaCode />,
      title: t('about.frontend'),
      description: 'React, JavaScript ES6+, HTML5, CSS3, Responsive Design'
    },
    {
      icon: <FaServer />,
      title: t('about.backend'),
      description: 'Node.js, Express, REST APIs, MongoDB, PostgreSQL'
    },
    {
      icon: <FaCogs />,
      title: t('about.erp'),
      description: language === 'fr' ? 'Odoo: Installation, Personnalisation, Modules custom' : 'Odoo: Installation, Customization, Custom Modules'
    },
    {
      icon: <FaRocket />,
      title: t('about.devops'),
      description: language === 'fr' ? 'Docker, GitHub, CI/CD, Déploiement cloud' : 'Docker, GitHub, CI/CD, Cloud Deployment'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span> {t('about.title')}
        </h2>

        <div className="about-content">
          <div className="about-text">
            <p dangerouslySetInnerHTML={{ __html: t('about.intro') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.expertise') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.projects') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.goal') }} />
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
