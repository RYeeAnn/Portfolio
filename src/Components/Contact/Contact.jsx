import React from 'react';
// import axios from 'axios';
import './Contact.scss';
import name from '../../assets/name.png';
import email from '../../assets/email.png';
import phone from '../../assets/phone.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

function Contact() {

  // const [flashMessage, setFlashMessage] = useState('');
  // const [formData, setFormData] = useState({ 
  //   name: '', 
  //   email: '', 
  //   message: '' 
  // });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
// };

// const serverURL = 'https://ryanyee-portfolio-f1df33c2739f.herokuapp.com/submit_contact';

// const handleSubmit = (event) => {
//   event.preventDefault();
//   axios.post(serverURL, formData)
//     .then(response => {
//         // Handle success
//         console.log(response.data);
//         setFlashMessage("Your message has been sent successfully!");
//         setTimeout(() => setFlashMessage(''), 3000); // Hide after 3 seconds

//         // Reset form data to initial state
//         setFormData({ name: '', email: '', message: '' });
//     })
//     .catch(error => {
//         // Handle error
//         console.error("Error:", error);
//         setFlashMessage("Failed to send message.");
//         setTimeout(() => setFlashMessage(''), 3000); // Hide after 3 seconds
//     });
// };

    const emailLink = 'mailto:RYeeAn16@gmail.com';
    const phoneLink = 'tel:+16047283585';
    const linkedinLink = 'https://www.linkedin.com/in/ryeean';
    const githubLink = 'https://github.com/ryeeann';

  return (
    <div className="contact">

      <div className="contact__container">
        <div className="contact__card" id="contact">
          <h2 className='contact__title'>Want to talk?</h2>
          <p>Did you see anything that was of interest to you? Feel free to connect with me and let's chat :)</p>
          {/* <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    placeholder="Your Name" 
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="Your Email"
                    required 
                />
                <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Your Message"
                    required
                />
                <button type="submit">Send</button>
            </form> */}

            {/* {flashMessage && (
      <div className={`flash-message ${flashMessage ? 'show' : ''}`}>
        {flashMessage}
      </div>
    )} */}

          <div className="contact__info">
            <p><img src={name} alt="Name" /><a href="/">Ryan Yee</a></p>
            <p><a href='/blog'>Blog</a></p>
            <p><img src={email} alt="Email" /><a href={emailLink}>ryeean16@gmail.com</a></p>
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
