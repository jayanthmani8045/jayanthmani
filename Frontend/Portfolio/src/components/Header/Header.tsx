import React from 'react';
import { Code, Database } from 'lucide-react';
import type { RoleType } from '../../types/portfolio.types';

interface HeaderProps {
  currentRole: RoleType;
  onRoleChange: (role: RoleType) => void;
  name: string;
}

const Header: React.FC<HeaderProps> = ({ currentRole, onRoleChange, name }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">{name}</a>
          <div className="role-toggle">
            <button 
              className={`toggle-btn ${currentRole === 'software' ? 'active' : ''}`}
              onClick={() => onRoleChange('software')}
            >
              <Code className="w-4 h-4 inline mr-2" />
              Software Engineer
            </button>
            <button 
              className={`toggle-btn ${currentRole === 'data' ? 'active' : ''}`}
              onClick={() => onRoleChange('data')}
            >
              <Database className="w-4 h-4 inline mr-2" />
              Data Engineer
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;