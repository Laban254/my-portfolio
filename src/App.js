// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Skillsets from './components/Skillsets';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App({ darkMode, toggleDarkMode }) {
  const [activeCategory, setActiveCategory] = useState('about'); // Initialize activeCategory state

  const handleCategoryChange = (category) => {
    setActiveCategory(category); // Update activeCategory state with the selected category
  };

  useEffect(() => {
    // Update the body class based on darkMode state
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div>
      {/* <Header /> */}
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
