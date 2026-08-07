'use client';
import { useState } from 'react';
import { profileData } from '@/data/profile';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image-ring"></div>
            {!imageError ? (
              <img 
                src="/profile.jpeg" 
                alt={profileData.name} 
                className="profile-img"
                onError={(e) => {
                  if (e.currentTarget.src.endsWith('/profile.jpeg')) {
                    e.currentTarget.src = '/images/profile.jpeg';
                  } else {
                    setImageError(true);
                  }
                }}
              />
            ) : (
              <div className="profile-placeholder">
                {profileData.name ? profileData.name.charAt(0) : 'U'}
              </div>
            )}
          </div>
        </div>
        
        <h1 className="hero-name gradient-text">{profileData.name}</h1>
        <h2 className="hero-title">{profileData.title}</h2>
        <p className="hero-subtitle">{profileData.bio}</p>
        
        <div className="hero-buttons">
          <button className="cta-button primary" onClick={() => handleScrollTo('projects')}>
            View Projects
          </button>
          <button className="cta-button secondary" onClick={() => handleScrollTo('contact')}>
            Contact Me
          </button>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      <div className="particle particle-6"></div>
    </section>
  );
}
