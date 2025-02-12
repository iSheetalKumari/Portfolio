// src/pages/Projects.jsx
import "./Projects.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "ByteEver",
      description: " is an online code editor that allows users to write, edit, and execute code in real time. It features a sleek, interactive interface powered by Monaco Editor, making it an efficient platform for coding and testing algorithms.",
      link: "https://github.com/iSheetalKumari/ByteEver",
      image: ""
    },
    {
      title: "Todo-App",
      description: "a task management web app using React and Vite, allowing users to add, delete, and mark tasks as completed.",
      link: "https://github.com/iSheetalKumari/Todo-App",
      image: ""
    },
    {
      title: "TextTone",
      description: "A text-to-speech converter using JavaScript.",
      link: "https://github.com/iSheetalKumari/TextTone",
      image: "/assets/texttone.png"
    },
    {
      title: "CalcPlus",
      description: "A feature-rich calculator with advanced functions.",
      link: "https://github.com/iSheetalKumari/CalcPlus",
      image: "/assets/calcplus.png"
    },
    {
      title: "Time-Harmony",
      description: "simple React-based web app that continuously displays the current date and time. It dynamically updates in real-time, ensuring users always see the correct time.",
      link: "https://github.com/iSheetalKumari/Time-Harmony.git",
      image:"" 
    },
    {
      title: "ShopEase",
      description: "An e-commerce web design using HTML, CSS, and JS.",
      link: "https://github.com/iSheetalKumari/ShopEase",
      image: "/assets/shopease.png"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <FaExternalLinkAlt/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
