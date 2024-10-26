// Footer.js

import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import LightBulb from '../assets/idea.png'; 

const Footer = ({ darkMode, toggleDarkMode }) => {
  const handleBulbClick = () => {
    toggleDarkMode(!darkMode);
  };
  <hr></hr>
  return (
    <footer className={`footer fixed-bottom py-3 `}>
      <div className="container d-flex justify-content-between align-items-center">
 
        <a
          href="https://github.com/Laban254"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none mx-3"
        >
          <FaGithub size={28} />
        </a>

         <a href="mailto:labanrotich6544@gmail.com" className="text-decoration-none mx-3">
          <FaEnvelope size={28} />
        </a>

        <img
          src={LightBulb}
          alt="Light Bulb"
          className="light-bulb mx-3"
          onClick={handleBulbClick}
          style={{ cursor: 'pointer' }} 
        />

        
      </div>
    </footer>
  );
};

export default Footer;
