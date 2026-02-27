import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setStatus({ type: 'success', message: t('contact.success') });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: t('contact.error') });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'anasdabbebi7@gmail.com',
      link: 'mailto:anas.dabbebi@email.com'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'in/anas-dabbebi',
      link: 'https://www.linkedin.com/in/anas-dabbebi/'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'github.com/anasdabbebi',
      link: 'https://github.com/anasdabbebi'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t('contact.location'),
      value: 'Tunisie',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">05.</span> {t('contact.title')}
        </h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>{t('contact.subtitle')}</h3>
            <p>
              {t('contact.description')}
            </p>

            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <div className="contact-details">
                    <span className="contact-title">{item.title}</span>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t('contact.name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t('contact.email')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder={t('contact.subject')}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder={t('contact.message')}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? t('contact.sending') : (
                <>
                  <FaPaperPlane /> {t('contact.send')}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
