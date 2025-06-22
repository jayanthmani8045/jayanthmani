import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import type { Education as EducationType, Certification } from '../../types/portfolio.types';

interface EducationProps {
  education: EducationType[];
  certifications: Certification[];
  currentRole: string;
}

const Education: React.FC<EducationProps> = ({ education, certifications, currentRole }) => {
  return (
    <>
      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="container">
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{edu.degree}</h3>
                    <p className="card-meta">{edu.school}, {edu.location}</p>
                  </div>
                  <span className="card-meta">
                    <GraduationCap className="w-4 h-4 inline mr-1" />
                    {edu.duration}
                  </span>
                </div>
                {edu.gpa && (
                  <p style={{ margin: '1rem 0', fontWeight: '500' }}>
                    GPA: {edu.gpa}
                  </p>
                )}
                {edu.coursework && (
                  <p style={{ opacity: '0.8' }}>
                    <strong>Coursework:</strong> {edu.coursework}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Certifications</h2>
        <div className="container">
          <div className="education-grid">
            {certifications.map((cert, index) => {
                return (
                  <div key={index} className="education-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <Award className="w-8 h-8 text-blue-600" />
                      <div>
                        <h3 className="card-title">{cert.title}</h3>
                        <p className="card-meta">{cert.description}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;