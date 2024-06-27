import React from 'react';

const NavItem = ({ label, active, onClick }) => {
  return (
    <li className="nav-item">
      <button
        className={`nav-link ${active ? 'active' : ''}`}
        onClick={onClick}
        aria-current={active ? 'page' : undefined}
      >
        {label}
      </button>
    </li>
  );
};

const Navigation = ({ activeCategory, onCategoryChange }) => {
  const navItems = [
    { label: 'About Me', key: 'about' },
    { label: 'Skillsets', key: 'skillsets' },
    { label: 'Projects', key: 'projects' }
  ];

  return (
    <nav className="container mb-4">
      <ul className="nav nav-pills justify-content-center">
        {navItems.map(item => (
          <NavItem
            key={item.key}
            label={item.label}
            active={activeCategory === item.key}
            onClick={() => onCategoryChange(item.key)}
          />
        ))}
      </ul>
      <hr></hr>
    </nav>
  );
};

export default Navigation;


