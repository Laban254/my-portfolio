import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Webscrapify from '../assets/webscrapify.png'; // Assuming this path is correct
import Ticketing from "../assets/ticketing.png"
import Studyhub from "../assets/studyapp.png"

const Projects = () => {
  return (
    <section className="wrapper">
      <div className="container-fostrap">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="card">
                  <a className="img-card" href="#">
                    <img src={Webscrapify} alt="WebScrapify" />
                  </a>
                  <div className="card-content">
                    <p>
                      WebScrapify is a streamlined web scraping tool on Django and Selenium, leveraging Celery for scheduling and Docker for efficient deployment. It validates URLs, scrapes dynamic content with Selenium, and exports data to PDF, CSV, or JSON formats. Automate tasks with scheduled scraping for timely updates, all with robust error handling and secure operations.
                    </p>
                  </div>
                  <div className="card-read-more">
                    <a href="https://github.com/Laban254/WebScrapify" className="btn btn-primary btn-block">
                    <i class="fab fa-github"></i>  GitHub Link
                    </a>
                    <a href="https://webscrapifyy-1c0f0424e97d.herokuapp.com/" className="btn btn-secondary btn-block">
                    <i class="fas fa-external-link-alt"></i>Live Link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="card">
                  <a className="img-card">
                    <img src={Ticketing} alt="ticketingSystem" />
                  </a>
                  <div className="card-content">
                    <p>
                      Powered by Django with HTML and CSS, this system facilitates ticket creation and management for employees. Support members efficiently handle assigned tickets, update statuses, and resolve issues with detailed steps. Administrators oversee operations via an admin dashboard, where they can add employees and support members and manage their login details. Docker ensures seamless deployment and scalability, optimizing customer support processes.
                    </p>
                  </div>
                  <div className="card-read-more">
                    <a href="https://github.com/Laban254/TicketingSystem" className="btn btn-primary btn-block">
                    <i class="fab fa-github"></i>  GitHub Link
                    </a>
                    <a href="https://ticketingsystem-hp75.onrender.com/" className="btn btn-secondary btn-block">
                    <i class="fas fa-external-link-alt"></i> Live Link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="card">
                  <a className="img-card" href="#">
                    <img src={Studyhub} alt="StudyHub" />
                  </a>
                  <div className="card-content">
                    <p>
                      StudyHub is a Django-powered platform designed to streamline study tasks. It offers note-taking, task management, and homework tracking features. Integrated with Google Books and a dictionary API, StudyHub enhances productivity with a user-friendly interface and dynamic calendar view, ensuring efficient study management.
                    </p>
                  </div>
                  <div className="card-read-more">
                    <a href="https://github.com/Laban254/StudyHub" className="btn btn-primary btn-block">
                    <i class="fab fa-github"></i> GitHub Link
                    </a>
                    <a href="https://studyhub-8yqw.onrender.com/" className="btn btn-secondary btn-block">
                    <i class="fas fa-external-link-alt"></i> Live Link
                    </a>
                  </div>
                </div>
              </div>
              {/* Add more col-xs-12 col-sm-6 col-md-4 blocks for additional projects */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
