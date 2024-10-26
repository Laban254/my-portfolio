// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Skillsets from './components/Skillsets';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App({ darkMode, toggleDarkMode }) {
  const [activeCategory, setActiveCategory] = useState('about');

  const handleCategoryChange = (category) => {
    setActiveCategory(category); 
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div>
      <Navigation
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <main className="container mt-4">
        {activeCategory === 'about' && <AboutMe />}
        {activeCategory === 'skillsets' && <Skillsets />}
        {activeCategory === 'projects' && <Projects />}
      </main>
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
