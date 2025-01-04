// src/pages/About.jsx
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="title">About Me</h1>
      <p className="intro-text">
        I am a passionate web developer skilled in React, Java, and more. I love creating interactive and creative web applications.
      </p>

      <div className="about-content">
        <div className="card">
          <h2>My Skills</h2>
          <p>HTML, CSS, JavaScript, React.js, C, C++, Java, MySQL</p>
        </div>
        <div className="card">
          <h2>Experience</h2>
          <p>Mentorship at Accenture</p>
        </div>
        <div className="card">
          <h2>Training</h2>
          <p> Completed a 6-week Online React Training on Internshala</p>
        </div>
        <div className="card">
          <h2>Hobbies</h2>
          <p>Coding, Designing, Blogging, Open Source</p>
        </div>
      </div>
    </div>
  );
};

export default About;
