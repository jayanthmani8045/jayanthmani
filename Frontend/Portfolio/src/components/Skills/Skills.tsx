import React from 'react';

interface SkillsProps {
  skills: Record<string, string[]>;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="container">
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-tags">
                {skillList.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;