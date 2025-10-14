import React from 'react';
import './Contact.scss';
import name from '../../assets/name.png';
import email from '../../assets/email.png';
import phone from '../../assets/phone.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

function Contact() {
  const contactInfo = [
    {
      icon: name,
      label: 'Name',
      value: 'Ryan Yee',
      link: '/',
      isInternal: true
    },
    {
      icon: email,
      label: 'Email',
      value: 'ryeean16@gmail.com',
      link: 'mailto:RYeeAn16@gmail.com',
      isInternal: false
    },
    {
      icon: phone,
      label: 'Phone',
      value: '(604) 728-3585',
      link: 'tel:+16047283585',
      isInternal: false
    },
    {
      icon: linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ryeean',
      link: 'https://www.linkedin.com/in/ryeean',
      isInternal: false
    },
    {
      icon: github,
      label: 'GitHub',
      value: 'github.com/ryeeann',
      link: 'https://github.com/ryeeann',
      isInternal: false
    }
  ];

  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">Let's Connect!</h2>
        </div>

        <div className="contact__content">
          <div className="contact__card">
            <div className="contact__card-header">
              <h3 className="contact__card-title">Get in Touch</h3>
              <p className="contact__card-description">
                Have a project in mind or want to say hello? I'd love to hear from you!
              </p>
            </div>

            <div className="contact__info">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact__info-item">
                  <div className="contact__info-icon">
                    <img src={info.icon} alt={info.label} />
                  </div>
                  <div className="contact__info-content">
                    <span className="contact__info-label">{info.label}</span>
                    {info.isInternal ? (
                      <a href={info.link} className="contact__info-link">
                        {info.value}
                      </a>
                    ) : (
                      <a 
                        href={info.link} 
                        className="contact__info-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__cta">
              <a 
                href="mailto:ryeean16@gmail.com" 
                className="contact__cta-button"
              >
                Send me an email
              </a>
              <p className="contact__cta-note">
                I typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
