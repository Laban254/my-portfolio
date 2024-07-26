import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skillsets = () => {
  return (
    <section id="skills" className="d-flex align-items-center">
      <div className="container">
        <div className="row row-eq-height">
          {/* Backend Development */}
          <div className="col-md-6 mb-4 d-flex align-items-stretch">
            <div className="card skill-card">
              <div className="card-header bg-gradient-success text-white">Backend Development</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Languages:</strong>
                  <span>Python, JavaScript</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Frameworks:</strong>
                  <span>Django, Express.js, FastAPI</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Databases:</strong>
                  <span>MySQL, PostgreSQL, MongoDB, Redis</span>
                </li>
                {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>DevOps Tools:</strong>
                  <span>Docker, AWS, Nginx, Gunicorn</span>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Frontend Development */}
          <div className="col-md-6 mb-4 d-flex align-items-stretch">
            <div className="card skill-card">
              <div className="card-header bg-gradient-info text-white">Frontend Development</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Languages:</strong>
                  <span>HTML5, CSS3, JavaScript</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Libraries/Frameworks:</strong>
                  <span>Bootstrap, React</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Design Tools:</strong>
                  <span>Figma</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Version Control & Collaboration Tools */}
          <div className="col-md-6 mb-4 d-flex align-items-stretch">
            <div className="card skill-card">
              <div className="card-header bg-gradient-primary text-white">Version Control & Collaboration Tools</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Version Control:</strong>
                  <span>Git</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Project Management & Collaboration:</strong>
                  <span>Agile, Trello</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Technical Skills */}
          <div className="col-md-6 mb-4 d-flex align-items-stretch">
            <div className="card skill-card">
              <div className="card-header bg-gradient-warning text-white">Additional Technical Skills</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Containerization:</strong>
                  <span>Docker</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Cloud Services and Infrastructure:</strong>
                  <span>AWS, Azure</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Web Servers and Deployment:</strong>
                  <span>Nginx, Gunicorn, Uvicorn</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillsets;
