// src/pages/Projects.jsx
import "./Projects.css";

const Projects = () => {
  const projects = [
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
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
