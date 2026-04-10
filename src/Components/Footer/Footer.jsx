import React from 'react';
import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          © {currentYear} Ryan Yee ·{' '}
          <a href="mailto:ryeean16@gmail.com">ryeean16@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
