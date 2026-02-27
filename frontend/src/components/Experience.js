import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

const Experience = () => {
  const { t, language } = useLanguage();

  const experiences = language === 'fr' ? [
    {
      type: 'work',
      title: 'Développeur Full Stack',
      company: 'Projets Freelance & Personnel',
      period: '2023 - Présent',
      description: [
        'Développement d\'applications web complètes avec React et Node.js',
        'Création de systèmes de gestion (tickets, CRM, facturation)',
        'Intégration et personnalisation de solutions Odoo ERP',
        'Mise en place de pipelines CI/CD avec Docker et GitHub Actions'
      ]
    },
    {
      type: 'work',
      title: 'Développeur Backend',
      company: 'Projets ERP',
      period: '2022 - 2023',
      description: [
        'Développement de modules Odoo personnalisés',
        'Création d\'APIs REST pour intégrations tierces',
        'Gestion de bases de données PostgreSQL et MongoDB',
        'Implémentation de systèmes d\'authentification sécurisés'
      ]
    },
    {
      type: 'education',
      title: 'Formation Continue',
      company: 'Auto-formation & Certifications',
      period: '2021 - Présent',
      description: [
        'Maîtrise de la stack MERN (MongoDB, Express, React, Node.js)',
        'Certification Odoo - Développeur fonctionnel et technique',
        'Formation Docker et pratiques DevOps',
        'Veille technologique continue et projets personnels'
      ]
    }
  ] : [
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Freelance & Personal Projects',
      period: '2023 - Present',
      description: [
        'Development of complete web applications with React and Node.js',
        'Creation of management systems (tickets, CRM, invoicing)',
        'Integration and customization of Odoo ERP solutions',
        'Setting up CI/CD pipelines with Docker and GitHub Actions'
      ]
    },
    {
      type: 'work',
      title: 'Backend Developer',
      company: 'ERP Projects',
      period: '2022 - 2023',
      description: [
        'Development of custom Odoo modules',
        'Creation of REST APIs for third-party integrations',
        'PostgreSQL and MongoDB database management',
        'Implementation of secure authentication systems'
      ]
    },
    {
      type: 'education',
      title: 'Continuous Learning',
      company: 'Self-training & Certifications',
      period: '2021 - Present',
      description: [
        'Mastery of MERN stack (MongoDB, Express, React, Node.js)',
        'Odoo Certification - Functional and Technical Developer',
        'Docker training and DevOps practices',
        'Continuous technology watch and personal projects'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">04.</span> {t('experience.title')}
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.type}`}>
              <div className="timeline-icon">
                {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-stats">
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">{t('experience.yearsExp')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">{t('experience.projectsDone')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">{t('experience.techMastered')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">{t('experience.passion')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
