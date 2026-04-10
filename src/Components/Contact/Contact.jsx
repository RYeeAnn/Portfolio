import React, { useState } from 'react';
import './Contact.scss';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5001'}/submit_contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <h1 className="contact__title">Get in Touch</h1>
        <p className="contact__subtitle">
          Have a project in mind or want to connect? I'd love to hear from you.
        </p>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__group">
            <label htmlFor="contact-name">Name</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="contact__group">
            <label htmlFor="contact-email">Email</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="contact__group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message..."
              rows="5"
              required
            />
          </div>
          <button type="submit" className="contact__submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitStatus === 'success' && (
            <p className="contact__status contact__status--success">
              Message sent. I'll get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="contact__status contact__status--error">
              Something went wrong. Try again or email me at ryeean16@gmail.com
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
