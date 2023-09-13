import React from 'react';
import './Contact.scss';
import name from '../../assets/name.png';
import email from '../../assets/email.png';
import phone from '../../assets/phone.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

function Contact() {

    const emailLink = 'mailto:RYeeAn16@gmail.com';
    const phoneLink = 'tel:+16047283585';
    const linkedinLink = 'https://www.linkedin.com/in/ryeean';
    const githubLink = 'https://github.com/ryeeann';

  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__card" id="contact">
          <h2 className='contact__title'>Want to talk?</h2>
          <p>Did you see anything that was of interest to you? Feel free to connect with me and lets chat!</p>
          <div className="contact__info">
            <p><img src={name} alt="Name" />Ryan Yee</p>
            <p><img src={email} alt="Email" /><a href={emailLink}>RYeeAn16@gmail.com</a></p>
            <p><img src={phone} alt="Phone" /><a href={phoneLink}>(604) 728-3585</a></p>
            <p><img src={linkedin} alt="Linkedin" /><a href={linkedinLink}>Linkedin</a></p>
            <p><img src={github} alt="Github" /><a href={githubLink}>Github</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
