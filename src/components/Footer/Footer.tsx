import './Footer.css';
import logo from '../../assets/logo-e1691577275677.png'; // Adjust your logo path
import { Link } from 'react-router-dom';
import footerMan from '../../assets/Untitled_Design-removebg-preview.png'; // Overlay image

const Footer = () => {
  return (
    <div className="Footer">
      <img src={footerMan} alt="footer-overlay" className="footer-overlay" />
      <div className="footer-section">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-quick-links">
          <h3>Quick Links</h3>
          <Link to='/about-us'>About</Link>
          <Link to='/'>Home</Link>
          <Link to='/article'>Blogs</Link>
        </div>
        <div className="footer-social">
          <h3>Contact</h3>
          <p>123 Main Street, City, Country</p>
        </div>
      </div>
      <div className="footer-copywrite">
        <p className="copywrite">© Golden Click, All Rights Reserved. Designed By Golden Click Team</p>
        <div className="footer-privacy">
          <Link to='/privacy'>Privacy Policy</Link>
          <span className="separator">|</span>
          <Link to='/cookies'>Cookies</Link>
          <span className="separator">|</span>
          <Link to='/help'>Help</Link>
          <span className="separator">|</span>
          <Link to='/faq'>FAQs</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
