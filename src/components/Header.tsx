import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import './Hero.css';

const Header: React.FC = () => {
  const menuItems = [
    { label: 'ACASĂ', path: '/' },
    // { label: 'Noutăți', path: '/news' },
    { label: 'SPORTURI', path: '/sports' },
    { label: 'ANTRENORI', path: '/coaches' },
    // { label: 'SPORTIVI', path: '/players' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar fixed">
        <div className="logo">
          <img src="/images/logo.png" alt="B&amp;B Team Logo" />
          <h1>B&amp;B Team</h1>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "item active" : "item"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </>
  );
};

export default Header;