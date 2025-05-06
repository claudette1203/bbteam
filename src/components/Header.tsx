import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import './Hero.css';

const Header: React.FC = () => {
  const menuItems = [
    { label: 'ACASĂ', path: '/' },
    { label: 'SPORTURI', path: '/sports' },
    { label: 'ANTRENORI', path: '/coaches' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar fixed">
      <div className="logo">
        <img src="./images/logo.png" alt="B&amp;B Team Logo" />
        <h1>B&amp;B Team</h1>
      </div>

      {/* Menu Panel */}
      <div
        id="primary-navigation"
        className={`menu ${isMenuOpen ? 'open' : ''}`}
      >
        {menuItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? 'item active' : 'item'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Animated SVG Button (Button One) */}
      <button
        className="button-one"
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <svg
          fill="var(--button-color)"
          className="hamburger"
          viewBox="0 0 100 100"
          width="40"
        >
          <rect className="line top" width="80" height="10" x="10" y="25" rx="5" />
          <rect className="line middle" width="80" height="10" x="10" y="45" rx="5" />
          <rect className="line bottom" width="80" height="10" x="10" y="65" rx="5" />
        </svg>
      </button>
    </nav>
  );
};

export default Header;
