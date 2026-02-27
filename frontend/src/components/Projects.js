import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: 'RepAppBuro - Gestion Atelier Réparation',
      description: 'Application MERN complète de gestion d\'atelier de réparation : création et suivi des fiches (tickets RAD-001…), gestion clients/stock/facturation, suivi public, interface admin avec rôles.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      features: ['Suivi tickets', 'Gestion clients', 'Facturation', 'Rôles admin'],
      github: 'https://github.com/anasdabbebi/RepAppBuro',
      demo: '#',
      image: '🛠️'
    },
    {
      title: 'Travel-Booking MERN',
      description: 'Application web de réservation de voyages permettant de rechercher et filtrer des vols, hébergements et transferts (taxi). API REST sécurisée avec authentification.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      features: ['Recherche vols', 'Réservation hébergements', 'Transferts taxi', 'Filtres avancés'],
      github: 'https://github.com/anasdabbebi/Travel-Booking-MERN-Stack-js',
      demo: '#',
      image: '✈️'
    },
    {
      title: 'Customer Services Management',
      description: 'Système de gestion de services client avec TypeScript, offrant une interface moderne pour le suivi et la gestion des demandes clients.',
      tech: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      features: ['Gestion tickets', 'Suivi demandes', 'Dashboard', 'Analytics'],
      github: 'https://github.com/anasdabbebi/custumor-services-managment',
      demo: '#',
      image: '👥'
    },
    {
      title: 'FarmDigital - Plateforme Agriculture',
      description: 'Plateforme full-stack d\'agriculture avec Node.js, Express, React et MySQL. Marketplace, offres d\'emploi, carte interactive, authentification et design responsive.',
      tech: ['React', 'Node.js', 'Express', 'MySQL'],
      features: ['Marketplace', 'Offres emploi', 'Carte interactive', 'Auth utilisateurs'],
      github: 'https://github.com/anasdabbebi/FarmDigital',
      demo: '#',
      image: '🌾'
    },
    {
      title: 'Facturation PDF Automatisée',
      description: 'Système de génération automatique de factures PDF avec modèles personnalisables, calcul de TVA et archivage sécurisé.',
      tech: ['Node.js', 'PDFKit', 'MongoDB', 'React'],
      features: ['Templates personnalisés', 'Calcul TVA', 'Envoi automatique', 'Archive sécurisée'],
      github: 'https://github.com/anasdabbebi',
      demo: '#',
      image: '📄'
    },
    {
      title: 'Odoo ERP Personnalisé',
      description: 'Installation et personnalisation complète d\'Odoo avec modules custom pour inventaire, ventes et comptabilité adaptés aux PME.',
      tech: ['Odoo', 'Python', 'PostgreSQL', 'XML'],
      features: ['Modules custom', 'Workflows automatisés', 'Rapports', 'Intégrations API'],
      github: 'https://github.com/anasdabbebi',
      demo: '#',
      image: '🏢'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span> {t('projects.title')}
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>{t('projects.features')}</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> {t('projects.code')}
                  </a>
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> {t('projects.demo')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
