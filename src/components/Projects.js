import React, { useEffect, useState } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  // Specify the repository names you want to display
  const specificRepos = [
    "Event-management-API", "StudyHub", "postgres_db_tool", "customer-management-api",
    "ExpressJs-RESTFUL--API_demo", "simple-CI-system", "WebScrapify", "django-rabbitmq-celery-smtp",
    "WeatherSnap",  "user-management-automation-script",
    "TicketingSystem", "ImageGen-OpenAI",  "FileEncryptAndDecrypt"
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Laban254/repos?per_page=100");
        const data = await response.json();

        // Filter the repositories to only include the specified ones by name
        const filteredRepos = data.filter(repo =>
          specificRepos.includes(repo.name)
        );

        // Sort by last updated time (descending order)
        const sortedRepos = filteredRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setRepos(sortedRepos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="projects-container" style={{ paddingBottom: '100px' }}>
      <h1>My GitHub Projects</h1>
      <div className="projects-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <h2 className="project-title">
              {/* Ensure the target="_blank" and rel="noopener noreferrer" are set */}
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h2>
            <p className="project-description">
              {repo.description || "No description available."}
            </p>
            <div className="project-footer">
              <p className="project-language">
                <strong>Language:</strong> {repo.language || "N/A"}
              </p>
              <p className="project-topics">
                <strong>Topics:</strong> {repo.topics && repo.topics.length > 0 ? (
                  <span>{repo.topics.join(', ')}</span>
                ) : "No topics"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;