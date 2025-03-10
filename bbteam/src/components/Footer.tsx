import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <hr className="footer-divider" />
      <div className='footer-links'>
        <div className="logo">
          <h1>B&amp;B Team</h1>
          <img src="/images/logo.png" alt="B&amp;B Team Logo" />
        </div>
        <div className="menu">
          <a href="/">ACASĂ</a>
          <a href="/sports">SPORTURI</a>
        </div>
        <div className="menu">
          <a href="/coaches">ANTRENORI</a>
          <a href="/contact">CONTACT</a>
        </div>
        <div className="social">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
      <p>© {new Date().getFullYear()} B&amp;B Team. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
