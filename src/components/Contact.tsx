'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { profileData } from '@/data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! I will get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <ScrollReveal>
        <h2 className="section-title gradient-text">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Talk</h3>
            <p className="contact-text">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <span>{profileData.email}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <span>{profileData.location}</span>
              </div>
            </div>
            <div className="social-links-contact">
              {profileData.socials.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link-icon">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="submit-button gradient-bg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
