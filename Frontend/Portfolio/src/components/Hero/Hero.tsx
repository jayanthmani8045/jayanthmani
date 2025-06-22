// src/components/Hero/Hero.tsx
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { ContactInfo, RoleData } from '../../types/portfolio.types';

interface HeroProps {
  name: string;
  contact: ContactInfo;
  roleData: RoleData;
}

const Hero: React.FC<HeroProps> = ({ name, contact, roleData }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{name}</h1>
          <p className="subtitle">{roleData.title}</p>
          <p className="description">{roleData.description}</p>
          <div className="contact-info">
            <a href={`mailto:${contact.email}`} className="contact-item">
              <Mail className="w-5 h-5" />
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`} className="contact-item">
              <Phone className="w-5 h-5" />
              {contact.phone}
            </a>
            <span className="contact-item">
              <MapPin className="w-5 h-5" />
              {contact.location}
            </span>
            <a href={contact.linkedin} className="contact-item" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href={contact.github} className="contact-item" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;