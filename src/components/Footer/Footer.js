import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          {/* Logo & About */}
          <div className="footer-about">
            <img src="/images/logo.png" alt="Tohsini Institute" className="footer-logo" />
            
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#events">Blogs</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/toshniinstitute/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Tohsini Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
