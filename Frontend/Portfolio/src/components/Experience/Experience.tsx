import React from 'react';
import { Calendar } from 'lucide-react';
import type { Experience as ExperienceType } from '../../types/portfolio.types';

interface ExperienceProps {
  experience: ExperienceType;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      <div className="container">
        <div className="experience-card">
          <div className="card-header">
            <div>
              <h3 className="card-title">{experience.title}</h3>
              <p className="card-meta">{experience.company} | {experience.location}</p>
            </div>
            <span className="card-meta">
              <Calendar className="w-4 h-4 inline mr-1" />
              {experience.duration}
            </span>
          </div>
          <div><p><b>Award:</b> {experience.award}</p></div>
          <ul className="highlights">
            {experience.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
          <div className="tech-stack">
            {experience.tech.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;