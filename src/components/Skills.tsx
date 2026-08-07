'use client';
import ScrollReveal from './ScrollReveal';
import { skills, skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <ScrollReveal>
        <h2 className="section-title gradient-text">Skills & Technologies</h2>
        
        <div className="skills-container">
          {skillCategories.map(category => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills.filter(s => s.category === category).map(skill => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
