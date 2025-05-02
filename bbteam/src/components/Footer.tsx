import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return <>
    <hr className="footer-divider" />
    <footer className="footer">
      <div className="menu">
        <a href="/">ACASĂ</a>
        <a href="/sports">SPORTURI</a>
        <a href="/coaches">ANTRENORI</a>
        <a href="/contact">CONTACT</a>
        <a href="/legal">LEGAL</a>
      </div>
      <div className="social">
          <a href="mailto:bbteam.brasov@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+40770812868" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-phone"></i>
          </a>
          <a href="https://www.instagram.com/b8b_team/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@b.b_team" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
      </div>
      <p>© {new Date().getFullYear()} B&amp;B Team. All rights reserved.</p>
    </footer>
  </>
};

export default Footer;
