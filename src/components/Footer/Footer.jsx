import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2024 Move Mountains. All rights are here.</p>
        <nav className="footer__nav-links">
          <h4 className="footer__nav-link">Contact:</h4>
          <p>250 Wishes Street</p>
          <p>Toronto Land</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;