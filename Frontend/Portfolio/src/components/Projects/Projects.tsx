// src/components/Projects/Projects.tsx
import React from 'react';
import { Calendar } from 'lucide-react';
import type { Project } from '../../types/portfolio.types';
import { iconMap } from '../../data/portfolioData';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="container">
        <div className="projects-grid">
          {projects.map((project, index) => {
            // Get the icon component from the iconMap using the iconName
            const IconComponent = iconMap[project.iconName as keyof typeof iconMap];
            
            return (
              <div key={index} className="project-card">
                <div className="project-icon">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-meta">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {project.duration}
                    </p>
                  </div>
                </div>
                <p style={{ marginBottom: '1rem', fontWeight: '500' }}>
                  {project.description}
                </p>
                <ul className="highlights">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
                <div className="tech-stack">
                  {project.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;