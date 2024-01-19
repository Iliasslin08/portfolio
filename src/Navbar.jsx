
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
          <img className='logo' src='' alt='Logo' />
          <ul className={`menu-list ${isMenuOpen ? 'menu-open' : ''}`}>
            <li>
              <a className='menu-items' href='#'>Home</a>
            </li>
            <li>
              <a className='menu-items' href='#'>Skills</a>
            </li>
            <li>
              <a className='menu-items' href='#'>Projects</a>
            </li>
            <li>
              <a className='menu-items' href='#'>Contact Me</a>
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