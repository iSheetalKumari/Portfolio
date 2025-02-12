// src/pages/About.jsx
import "./About.css";
import { FaExternalLinkAlt} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="title">About Me</h1>
      <p className="intro-text">
        I am a passionate software developer skilled in React, Java, and more. I love creating interactive and creative web applications.
      </p>

      <div className="about-content">
        <div className="card">
          <h2>My Skills</h2>
          <p>HTML, CSS, JavaScript, React.js, C, C++, Java, MySQL</p>
        </div>
        <div className="card">
          <h2>Education</h2>
          <p>B.Tech in Information Technology</p>
          <h3>Vinoba Bhave University, Hazaribagh | 2022 - 2026</h3>
        </div>
        <div className="card">
          <h2>Competitive Programming & Problem-Solving</h2>
          <h3>LeetCode</h3>
          <p>Solved <b>60+</b> Problems</p>
          <a href="https://leetcode.com/u/iSheetal_Kumari/" target="_blank" rel="noopener noreferrer" className="view-profile">
            View Profile <FaExternalLinkAlt/>
          </a>
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
          <h2>Certification</h2>
          <li>React Training – Internshala</li>
          <li>TATA Crucible Campus Quiz 2024 - Tata Group</li>
          <li>Introduction to Data Science – Infosys Springboard</li>
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
