import React from 'react';
import { 
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaDatabase, FaPython, FaCogs 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiJavascript, SiTypescript, SiPostgresql, 
  SiTailwindcss, SiHtml5, SiCss3, SiGithub 
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
        { name: 'HTML5', icon: <SiHtml5 />, level: 95 },
        { name: 'CSS3', icon: <SiCss3 />, level: 90 },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: 80 },
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 88 },
        { name: 'Express', icon: <SiExpress />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70 },
        { name: 'REST APIs', icon: <FaDatabase />, level: 90 },
        { name: 'Python', icon: <FaPython />, level: 75 },
      ]
    },
    {
      title: t('skills.devops'),
      skills: [
        { name: 'Docker', icon: <FaDocker />, level: 80 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'GitHub', icon: <SiGithub />, level: 90 },
        { name: 'Odoo ERP', icon: <FaCogs />, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span> {t('skills.title')}
        </h2>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="other-skills">
          <h3>{t('skills.other')}</h3>
          <div className="tags">
            <span className="tag">RBAC</span>
            <span className="tag">JWT Authentication</span>
            <span className="tag">PDF Invoicing</span>
            <span className="tag">Ticket Management</span>
            <span className="tag">CRM</span>
            <span className="tag">Responsive Design</span>
            <span className="tag">REST API</span>
            <span className="tag">Agile/Scrum</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
