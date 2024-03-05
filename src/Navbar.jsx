
import React, { useState } from 'react';

import './Navbar.css'
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='nav-bar'>
        <div className='nav-content'>
          <img className='logo' src='https://www.iliasbio.com/static/web/img/meta_og_img.jpg' alt='Logo' />
          <ul className={`menu-list ${isMenuOpen ? 'menu-open' : ''}`}>
            <li>
              <a className='menu-items' href='#hero-section'>Home</a>
            </li>
            <li>
              <a className='menu-items' href='#skills-section'>Skills</a>
            </li>
            <li>
              <a className='menu-items' href='#work-section'>Projects</a>
            </li>
            <li>
              <a className='menu-items' href='#contact-section'>Contact Me</a>
            </li>
            <button className='contact-btn' onClick={() => { alert("Hire Me clicked"); }}>Hire Me</button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.8em" }}>
    
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
