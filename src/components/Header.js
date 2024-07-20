import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
 // Update the path to your image

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src='https://res.cloudinary.com/dz7osr4ia/image/upload/v1721470354/photo_2023-01-06_11-16-31_xkae6k.jpg' alt="Profile" className="profile-image" />
        <h3 className='mine'> Gopalakrishna Siriveli</h3>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
            <li><Link to='/home'>Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
