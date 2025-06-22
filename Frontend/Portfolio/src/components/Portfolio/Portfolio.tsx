// src/components/Portfolio/Portfolio.tsx
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import type { RoleType } from '../../types/portfolio.types';
import { portfolioData } from '../../data/portfolioData';
import '../../styles/Portfolio.scss';

const Portfolio: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<RoleType>('software');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleRoleChange = (role: RoleType) => {
    setCurrentRole(role);
  };

  const currentRoleData = portfolioData.roles[currentRole];

  return (
    <div className={`portfolio ${isLoaded ? 'loaded' : ''}`}>
      <Header 
        currentRole={currentRole}
        onRoleChange={handleRoleChange}
        name={portfolioData.personal.name}
      />

      <Hero 
        name={portfolioData.personal.name}
        contact={portfolioData.personal.contact}
        roleData={currentRoleData}
      />

      <div className="container">
        <Experience experience={currentRoleData.experience} />
        <Projects projects={currentRoleData.projects} />
        <Skills skills={currentRoleData.skills} />
        <Education 
          education={portfolioData.education}
          certifications={portfolioData.certifications}
          currentRole={currentRole}
        />
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 {portfolioData.personal.name}. Crafted with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;