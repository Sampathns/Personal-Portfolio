'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { projects } from '@/data/projects';

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="projects-section">
      <ScrollReveal>
        <h2 className="section-title gradient-text">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image-placeholder">
                {project.image && !imageErrors[project.id] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  <span className="project-placeholder-text">{project.title.charAt(0)}</span>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.techStack.map((tag: string) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
