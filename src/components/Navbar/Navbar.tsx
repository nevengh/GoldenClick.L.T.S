import './Navbar.css';
import logo from '../../assets/logo-e1691577275677.png';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const ToggleHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className='Navbar'>
      <div className="logo">
        <Link to='/' onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Nav Menu */}
      <div className={`nav-menu ${toggleMenu ? 'active' : ''}`}>
        <Link to='/' className='nav-links' onClick={closeMenu}>Home</Link>
        <Link to='/about-us' className='nav-links' onClick={closeMenu}>About</Link>
        <Link to='/article' className='nav-links' onClick={closeMenu}>Blogs</Link>
        <Link to='/contact' className='nav-links' onClick={closeMenu}>Contact</Link>
      </div>

      {/* Social Navbar */}
      <div className="social-navbar">
        <div className="contact-btn">
          <a href='https://wa.me/971559048054' target='_blank' rel="noreferrer">Speak to an expert</a>
        </div>
        <div className="nav-icons">
          <a href="mailto:someone@example.com"><FaEnvelope /></a>
        </div>
        <div className="nav-icons">
          <a href="tel:+971559048054"><FaPhone /></a>
        </div>
      </div>

      {/* Mobile Burger Icon */}
      <div className={`burger-menu ${toggleMenu ? 'open' : ''}`} onClick={ToggleHandler}>
        {toggleMenu ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
