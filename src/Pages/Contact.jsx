// src/pages/Contact.jsx
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">Feel free to reach out for collaborations or just a friendly hello!</p>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://github.com/iSheetalKumari" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:youremail@example.com">Email Me</a>
      </div>
    </div>
  );
};

export default Contact;
