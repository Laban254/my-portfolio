// Footer.js

import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import LightBulb from '../assets/idea.png'; 

const Footer = ({ darkMode, toggleDarkMode }) => {
  const handleBulbClick = () => {
    toggleDarkMode(!darkMode); // Toggle dark mode state
  };

  return (
    <footer className={`footer fixed-bottom py-3 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Email icon */}
        <a href="mailto:labanrotich6544@gmail.com" className="text-decoration-none mx-3">
          <FaEnvelope size={28} />
        </a>

        {/* Animated light bulb */}
        <img
          src={LightBulb}
          alt="Light Bulb"
          className="light-bulb mx-3"
          onClick={handleBulbClick}
          style={{ cursor: 'pointer' }} // Ensure cursor changes to pointer on hover
        />

        {/* GitHub icon */}
        <a
          href="https://github.com/Laban254"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none mx-3"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
