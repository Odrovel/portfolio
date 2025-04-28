import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import "../CSS/Footer.css"

function Footer() {
  return (
    <footer>
      <div>
        <p>© 2025 - Mi Portfolio</p>
        <p style={{ fontSize: "24px" }}>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
            <FaGithub />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
            <FaInstagram />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;