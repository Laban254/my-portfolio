import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutMe = () => {
  const styles = {
    header: {
      fontWeight: 'bold',
      fontSize: '2.5rem',
      color: '#34495e', // Updated heading color
    },
    blue: {
      color: '#3498db', // Brighter Blue for a fresh look
    },
    yellow: {
      color: '#f9ba32', // Yellow
    },
    emoji: {
      fontSize: '150px', // Adjust emoji size
    },
  };

  return (
    <section className="container my-5" style={{ marginBottom: '50px' }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6"> {/* Text column on the left */}
          <h2 className="mb-4" style={styles.header}>
          👋 Hi There
          </h2>

          <article>
            <p className="lead" style={styles.blue}>
              I am Laban Kibet, an enthusiastic software developer <span role="img" aria-label="rocket">🚀</span> from Nairobi, Kenya.
            </p>
            <p className="lead" style={styles.blue}>
              My passion lies in creating innovative solutions <span role="img" aria-label="light bulb">💡</span> and building products that elevate user experiences <span role="img" aria-label="star">🌟</span>.
            </p>
            <p className="lead" style={styles.blue}>
              As a full-stack developer specializing in backend development, DevOps, and AI integration, I am eager to embrace new challenges and opportunities in the tech world.
            </p>
            <p className="lead" style={styles.yellow}>
              Let’s connect and explore the possibilities together!
            </p>
          </article>

        </div>
        <div className="col-md-4 text-center mb-4"> {/* Emoji column on the right */}
          <span role="img" aria-label="profile" style={styles.emoji}>
            👨‍💻 {/* Emoji representing a developer */}
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
