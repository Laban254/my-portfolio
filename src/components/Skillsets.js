import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skillsets = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <hr></hr>
        {/* Backend Development */}
        <div className="mb-4">
          <h3 className="text-white">Backend Development</h3>
          <div className="text-center">
            <span className="badge bg-success me-2 mb-2">Python</span>
            <span className="badge bg-success me-2 mb-2">Django</span>
            <span className="badge bg-success me-2 mb-2">Django REST Framework</span>
            <span className="badge bg-success me-2 mb-2">MySQL</span>
            <span className="badge bg-success me-2 mb-2">Flask</span>
            <span className="badge bg-success me-2 mb-2">PostgreSQL</span>
            <span className="badge bg-success me-2 mb-2">MongoDB</span>
            <span className="badge bg-success me-2 mb-2">Redis</span>
            <span className="badge bg-blue me-2 mb-2">Docker</span>
            <span className="badge bg-secondary me-2 mb-2">Jenkins</span>
            <span className="badge bg-primary me-2 mb-2">AWS</span>
            <span className="badge bg-success me-2 mb-2">Nginx</span>
            <span className="badge bg-success me-2 mb-2">Gunicorn</span>
            <span className="badge bg-success me-2 mb-2">Node-Js</span>
          </div>
        </div>
        <hr></hr>
        {/* Frontend Development */}
        <div className="mb-4">
          <h3 className="text-white">Frontend Development</h3>
          <div className="text-center">
            <span className="badge bg-danger me-2 mb-2">HTML5</span>
            <span className="badge bg-info me-2 mb-2">CSS3</span>
            <span className="badge bg-warning me-2 mb-2">JavaScript</span>
            <span className="badge bg-purple me-2 mb-2">Bootstrap</span>
            <span className="badge bg-purple me-2 mb-2">Figma</span>
            <span className="badge bg-success me-2 mb-2">React</span>
          </div>
        </div>
        <hr></hr>
        {/* Version Control & Collaboration */}
        <div className="mb-4">
          <h3 className="text-white">Version Control & Soft Skills</h3>
          <div className="text-center">
            <span className="badge bg-dark me-2 mb-2">Git</span>
            <span className="badge bg-secondary me-2 mb-2">Agile</span>
            <span className="badge bg-primary me-2 mb-2">Trello</span>
            <span className="badge bg-primary me-2 mb-2">Communication</span>
            <span className="badge bg-primary me-2 mb-2">Project Management</span>
            <span className="badge bg-primary me-2 mb-2">Leadership</span>
            <span className="badge bg-primary me-2 mb-2">Adaptability</span>
            <span className="badge bg-primary me-2 mb-2">Collaboration</span>
            <span className="badge bg-primary me-2 mb-2">Creativity</span>
          </div>
        </div>
      </div>
      <hr></hr>
    </section>
  );
};

export default Skillsets;
