
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' ? true : false
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <BrowserRouter>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <App darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

