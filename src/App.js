// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Skillsets from './components/Skillsets';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' ? true : false
  );
  const [activeCategory, setActiveCategory] = useState('about');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <Navigation activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
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
