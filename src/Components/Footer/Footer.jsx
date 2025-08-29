import React from 'react';
import './Footer.scss';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__info">
                        <p className="footer__copyright">
                            © {currentYear} Ryan Yee. All rights reserved.
                        </p>
                        <p className="footer__tagline">
                            Building digital experiences with purpose
                        </p>
                    </div>
                    
                    <div className="footer__links">
                        <a 
                            href="mailto:ryeean16@gmail.com" 
                            className="footer__link"
                            aria-label="Send email to Ryan Yee"
                        >
                            Get in touch
                        </a>
                    </div>
                </div>
                
                <div className="footer__divider"></div>
            </div>
        </div>
    );
}

export default Footer;