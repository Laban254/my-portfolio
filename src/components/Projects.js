import React, { useEffect, useState } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});

  const specificRepos = [
    "Event-management-API", "StudyHub", "postgres_db_tool", "customer-management-api",
    "ExpressJs-RESTFUL--API_demo", "simple-CI-system", "WebScrapify", "django-rabbitmq-celery-smtp",
    "WeatherSnap", "user-management-automation-script",
    "TicketingSystem", "ImageGen-OpenAI", "FileEncryptAndDecrypt", "my-portfolio", "ecommerce-platform-backend ",
    "event-driven-order-processing ", "social-connect-api ", "grpc-user-payment-services ", "task-manager-api", "FastAPI-Kubernetes"
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Laban25/repos?per_page=100");
        const data = await response.json();

        const filteredRepos = data.filter(repo =>
          specificRepos.includes(repo.name)
        );

        const sortedRepos = filteredRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setRepos(sortedRepos);

        // Fetch languages for each repo
        await Promise.all(
          sortedRepos.map(async (repo) => {
            const langResponse = await fetch(repo.languages_url);
            const langData = await langResponse.json();
            setLanguages((prevLanguages) => ({
              ...prevLanguages,
              [repo.id]: langData,
            }));
          })
        );
      } catch (error) {
        console.error("Error fetching repositories or languages:", error);
      }
    };

    fetchRepos();
  }, []);

  // Helper function to calculate percentages
  const calculateLanguagePercentages = (languageData) => {
    const totalBytes = Object.values(languageData).reduce((acc, bytes) => acc + bytes, 0);
    return Object.entries(languageData).map(([language, bytes]) => ({
      language,
      percentage: ((bytes / totalBytes) * 100).toFixed(1),
    }));
  };

  return (
    <div className="projects-container">
      <h1 class="header-title">
        <i class="fas fa-folder-open" ></i>
        My Projects
      </h1>
      <div className="projects-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <h2 className="project-title">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h2>
            <p className="project-description">
              {repo.description || "No description available."}
            </p>
            <div className="project-footer">
              <div className="project-language">
                <strong>Languages:</strong>
                {languages[repo.id] ? (
                  <div className="language-container">
                    {calculateLanguagePercentages(languages[repo.id]).map(({ language, percentage }) => (
                      <span key={language} className="language-item">
                        <span className="language-name">{language}</span>: 
                        <span className="language-percentage"> {percentage}%</span>
                      </span>
                    ))}
                  </div>
                ) : (
                  "Loading languages..."
                )}
              </div>
              <div className="project-topics">
                <strong>Topics:</strong>
                {repo.topics?.length ? (
                  <div className="topic-container">
                    {repo.topics.map((topic, index) => (
                      <span key={topic} className="topic-item">
                        {topic}{index < repo.topics.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                ) : (
                  "No topics"
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
