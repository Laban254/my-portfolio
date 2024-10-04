import React from 'react';
import { FaUser, FaTools, FaProjectDiagram, FaBlog } from 'react-icons/fa'; // Importing icons

const NavItem = ({ label, active, onClick, href, icon }) => {
  return (
    <li className="nav-item">
      {href ? (
        <a
          href={href}
          className={`nav-link ${active ? 'active' : ''}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon && <span className="nav-icon">{icon}</span>}
          {label}
        </a>
      ) : (
        <button
          className={`nav-link ${active ? 'active' : ''}`}
          onClick={onClick}
          aria-current={active ? 'page' : undefined}
        >
          {icon && <span className="nav-icon">{icon}</span>}
          {label}
        </button>
      )}
    </li>
  );
};

const Navigation = ({ activeCategory, onCategoryChange }) => {
  const navItems = [
    { label: 'About Me', key: 'about', icon: <FaUser /> },
    { label: 'Skillsets', key: 'skillsets', icon: <FaTools /> },
    { label: 'Projects', key: 'projects', icon: <FaProjectDiagram /> },
    { label: 'Blog', href: 'https://kibetlaban.me/', icon: <FaBlog /> } // Blog tab
  ];

  return (
    <nav className="container mb-4 navigation">
      <div className="name-container">
        <span className="name">Laban Kibet</span>
      </div>
      <ul className="nav nav-pills justify-content-end">
        {navItems.map(item => (
          <NavItem
            key={item.key || item.label} // Use key or label for uniqueness
            label={item.label}
            active={activeCategory === item.key}
            onClick={() => onCategoryChange(item.key)}
            href={item.href} // Pass href to NavItem
            icon={item.icon} // Pass icon to NavItem
          />
        ))}
      </ul>
      <hr />
    </nav>
  );
};

export default Navigation;