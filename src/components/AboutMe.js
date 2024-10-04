import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutMe = () => {
  const styles = {
    lightGray: { color: '#f8f1e5' }, // Light Gray
    yellow: { color: '#f9ba32' }, // Yellow
    blue: { color: '#426e86' }, // Blue
  };

  return (
    <div className="container my-5">
     
      <div className="text-center mb-4">
        <i className="fas fa-user fa-6x" style={{ color: '#f9ba32' }}></i>
      </div>
      
      <div className="text-center">
        <p className="lead" style={styles.blue}>
          I am a passionate Fullstack Web Developer specializing in backend technologies.
        </p>
        <p className="lead" style={styles.blue}>
          My expertise lies in leveraging robust backend frameworks and tools to craft innovative, scalable solutions.
        </p>
        <p className="lead" style={styles.lightGray}>
          My goal is to harness the full potential of backend development, creating efficient and cutting-edge applications that meet modern demands.
        </p>
        <p className="lead" style={styles.yellow}>
          Feel free to reach out for collaboration, discussions, or just to connect!
        </p>
      </div>
    </div>
  );
};

export default AboutMe