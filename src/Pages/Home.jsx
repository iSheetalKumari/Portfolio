import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Hello, I am <span className="name-highlight">Sheetal Kumari</span></h1>
        <p>A passionate web developer skilled in React, Java, and more!</p>
        <a href="/projects" className="cta-button">View My Projects</a>
      </div>
      <img src="" alt="Profile" className="profile-pic" />
    </div>
  );
};

export default Home;
