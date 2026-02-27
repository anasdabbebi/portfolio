import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  fr: {
    // Navbar
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact'
    },
    // Hero
    hero: {
      greeting: 'Bonjour, je suis',
      title: 'Développeur Full Stack MERN & Spécialiste ERP',
      description: 'Passionné par la création d\'applications web modernes, performantes et sécurisées. Expert en React, Node.js, Express, MongoDB et Odoo.',
      viewProjects: 'Voir mes projets',
      contactMe: 'Me contacter'
    },
    // About
    about: {
      title: 'À propos de moi',
      intro: 'Je suis un <strong>développeur Full Stack passionné</strong>, spécialisé dans le développement d\'applications web modernes et de solutions ERP. Avec une solide expérience technique, je crée des solutions performantes et adaptées aux besoins réels des entreprises.',
      expertise: 'Mon expertise couvre l\'ensemble du cycle de développement, de la conception à la mise en production. Je travaille principalement avec la stack <strong>MERN (MongoDB, Express, React, Node.js)</strong> et j\'ai une expérience approfondie avec <strong>Odoo</strong> pour les systèmes ERP.',
      projects: 'J\'ai développé des systèmes de gestion complets incluant des applications de <strong>suivi de tickets</strong>, <strong>gestion client</strong>, <strong>facturation PDF automatisée</strong> et <strong>contrôle d\'accès basé sur les rôles (RBAC)</strong>.',
      goal: 'Mon objectif est de devenir un <strong>expert en architecture logicielle</strong> et en systèmes d\'information, en continuant d\'apprendre et d\'améliorer mes compétences.',
      frontend: 'Frontend',
      backend: 'Backend',
      erp: 'ERP',
      devops: 'DevOps & Outils'
    },
    // Skills
    skills: {
      title: 'Compétences',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps & Outils',
      other: 'Autres compétences'
    },
    // Projects
    projects: {
      title: 'Projets',
      features: 'Fonctionnalités:',
      code: 'Code',
      demo: 'Demo'
    },
    // Experience
    experience: {
      title: 'Expérience',
      yearsExp: 'Années d\'expérience',
      projectsDone: 'Projets réalisés',
      techMastered: 'Technologies maîtrisées',
      passion: 'Passion'
    },
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Discutons de votre projet',
      description: 'Je suis disponible pour des missions freelance, des collaborations ou simplement pour échanger sur des projets techniques.',
      name: 'Votre nom',
      email: 'Votre email',
      subject: 'Sujet',
      message: 'Votre message',
      send: 'Envoyer le message',
      sending: 'Envoi...',
      success: 'Message envoyé avec succès! Je vous répondrai rapidement.',
      error: 'Erreur lors de l\'envoi. Veuillez réessayer.',
      location: 'Localisation'
    },
    // Footer
    footer: {
      madeWith: 'Conçu et développé avec',
      using: 'en utilisant React',
      rights: 'Tous droits réservés.'
    }
  },
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact'
    },
    // Hero
    hero: {
      greeting: 'Hi, I\'m',
      title: 'Full Stack MERN Developer & ERP Specialist',
      description: 'Passionate about creating modern, high-performance, and secure web applications. Expert in React, Node.js, Express, MongoDB, and Odoo.',
      viewProjects: 'View my projects',
      contactMe: 'Contact me'
    },
    // About
    about: {
      title: 'About me',
      intro: 'I am a <strong>passionate Full Stack developer</strong>, specialized in developing modern web applications and ERP solutions. With solid technical experience, I create high-performance solutions tailored to real business needs.',
      expertise: 'My expertise covers the entire development cycle, from design to production. I mainly work with the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong> and have extensive experience with <strong>Odoo</strong> for ERP systems.',
      projects: 'I have developed complete management systems including <strong>ticket tracking</strong> applications, <strong>CRM</strong>, <strong>automated PDF invoicing</strong>, and <strong>role-based access control (RBAC)</strong>.',
      goal: 'My goal is to become an <strong>expert in software architecture</strong> and information systems, while continuing to learn and improve my skills.',
      frontend: 'Frontend',
      backend: 'Backend',
      erp: 'ERP',
      devops: 'DevOps & Tools'
    },
    // Skills
    skills: {
      title: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps & Tools',
      other: 'Other skills'
    },
    // Projects
    projects: {
      title: 'Projects',
      features: 'Features:',
      code: 'Code',
      demo: 'Demo'
    },
    // Experience
    experience: {
      title: 'Experience',
      yearsExp: 'Years of experience',
      projectsDone: 'Projects completed',
      techMastered: 'Technologies mastered',
      passion: 'Passion'
    },
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s discuss your project',
      description: 'I am available for freelance missions, collaborations, or simply to discuss technical projects.',
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Your message',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Message sent successfully! I will reply quickly.',
      error: 'Error sending message. Please try again.',
      location: 'Location'
    },
    // Footer
    footer: {
      madeWith: 'Designed and developed with',
      using: 'using React',
      rights: 'All rights reserved.'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
