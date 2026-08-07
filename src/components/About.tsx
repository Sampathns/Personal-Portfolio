'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { profileData } from '@/data/profile';

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="about-section">
      <ScrollReveal>
        <h2 className="section-title gradient-text">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-area">
            <div className="about-image-wrapper">
              {!imgError ? (
                <img
                  src="/profile.jpeg"
                  alt={profileData.name}
                  className="about-profile-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="about-image-placeholder">
                  <span className="about-icon">👨‍💻</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="about-text-area">
            <p className="about-bio">{profileData.longBio || profileData.bio}</p>
            
            <div className="about-stats">
              <div className="stat-card">
                <h3 className="stat-value">2+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-value">10+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-value">10+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
