import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return <>
    <hr className="footer-divider" />
    <footer className="footer">
      {/* <div className="logo">
        <h1>B&amp;B Team</h1>
        <img src="/images/logo.png" alt="B&amp;B Team Logo" />
      </div> */}
      <div className="menu">
        <a href="/">ACASĂ</a>
        <a href="/sports">SPORTURI</a>
        <a href="/coaches">ANTRENORI</a>
        <a href="/contact">CONTACT</a>
      </div>
      <div className="social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>© {new Date().getFullYear()} B&amp;B Team. All rights reserved.</p>
    </footer>
  </>
};

export default Footer;
