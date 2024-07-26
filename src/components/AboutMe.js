import React from 'react';

const AboutMe = () => {
  // const style1 = { color: '#2f3131' }; // Dark Gray
  const style2 = { color: '#f8f1e5' }; // Light Gray
  const style3 = { color: '#f9ba32' }; // Yellow
  const style4 = { color: '#426e86' }; // Blue

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">About Me</h2>
      <p className="lead" style={style4}>I am a passionate Fullstack Web Developer specializing in backend technologies.</p>
      <p className="lead" style={style4}>My expertise lies in leveraging robust backend frameworks and tools to craft innovative, scalable solutions.</p>
      <p className="lead" style={style2}>My goal is to harness the full potential of backend development, creating efficient and cutting-edge applications that meet modern demands.</p>
      <p className="lead" style={style3}>Feel free to reach out for collaboration, discussions, or just to connect!</p>
    </div>
  );
};

export default AboutMe;
