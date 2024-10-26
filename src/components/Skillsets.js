import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skillsets = () => {
  return (
    <section id="skills" className="d-flex align-items-center" style={{ marginBottom: '40px' }}>
      <div className="skillsets-container">
      <h1 className="skills-header">
      <i className="fas fa-tools"></i> Skills
    </h1>
        <div className="row text-center">
          {/* Languages */}
          <div className="col-md-2 mb-4">
            <i className="fab fa-python fa-3x" style={{ color: '#FFD43B' }}></i>
            <p>Python</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-golang fa-3x" style={{ color: '#00ADD8' }}></i>
            <p>Go</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-js-square fa-3x" style={{ color: '#F7DF1E' }}></i>
            <p>JavaScript</p>
          </div>
          

          {/* Frameworks */}
          <div className="col-md-2 mb-4">
            <i className="fab fa-python fa-3x" style={{ color: '#092E20' }}></i>
            <p>Django</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-code-branch fa-3x" style={{ color: '#673AB7' }}></i>
            <p>Django REST Framework</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-react fa-3x" style={{ color: '#61DAFB' }}></i>
            <p>React</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-flask fa-3x" style={{ color: '#BF3E3E' }}></i>
            <p>Flask</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-server fa-3x" style={{ color: '#009639' }}></i>
            <p>FastAPI</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-cogs fa-3x" style={{ color: '#F15A29' }}></i> {/* Placeholder for Gin */}
            <p>Gin</p>
          </div>

          {/* Tools */}
          <div className="col-md-2 mb-4">
            <i className="fas fa-database fa-3x" style={{ color: '#336791' }}></i>
            <p>PostgreSQL</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-database fa-3x" style={{ color: '#F29111' }}></i>
            <p>MySQL</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-database fa-3x" style={{ color: '#47A248' }}></i>
            <p>MongoDB</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-recycle fa-3x" style={{ color: '#D52B1E' }}></i>
            <p>Redis</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-bootstrap fa-3x" style={{ color: '#7952B3' }}></i>
            <p>Bootstrap</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-server fa-3x" style={{ color: '#009639' }}></i>
            <p>Nginx</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-bell fa-3x" style={{ color: '#F44336' }}></i>
            <p>Celery</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-rocket fa-3x" style={{ color: '#FF9800' }}></i>
            <p>CI/CD</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-aws fa-3x" style={{ color: '#FF9900' }}></i>
            <p>AWS / Heroku</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-google fa-3x" style={{ color: '#4285F4' }}></i>
            <p>Google Cloud</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-microsoft fa-3x" style={{ color: '#0078D4' }}></i>
            <p>Azure</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-kubernetes fa-3x" style={{ color: '#326CE5' }}></i>
            <p>Kubernetes</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-jenkins fa-3x" style={{ color: '#D10024' }}></i>
            <p>Jenkins</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-docker fa-3x" style={{ color: '#2496ED' }}></i>
            <p>Docker</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-git-alt fa-3x" style={{ color: '#F1502F' }}></i>
            <p>Git</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-github fa-3x" style={{ color: '#181717' }}></i>
            <p>GitHub Actions</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-shield-alt fa-3x" style={{ color: '#5A5A5A' }}></i>
            <p>API Security</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-file-alt fa-3x" style={{ color: '#4C4C4C' }}></i>
            <p>Technical Writing</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-terminal fa-3x" style={{ color: '#00BFFF' }}></i>
            <p>Shell</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-chart-line fa-3x" style={{ color: '#4CAF50' }}></i>
            <p>Linear</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fab fa-trello fa-3x" style={{ color: '#0079BF' }}></i>
            <p>Trello</p>
          </div>
          <div className="col-md-2 mb-4">
            <i className="fas fa-comments fa-3x" style={{ color: '#00C853' }}></i>
            <p>Swagger/OpenAI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillsets;
