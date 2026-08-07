'use client';
import ScrollReveal from './ScrollReveal';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <ScrollReveal>
        <h2 className="section-title gradient-text">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} className="timeline-item-wrapper">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
                <div className="timeline-content">
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                  <span className="exp-duration">{exp.duration}</span>
                  <p className="exp-description">{exp.description}</p>
                  <div className="exp-tags">
                    {exp.techStack.map((tag: string) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
