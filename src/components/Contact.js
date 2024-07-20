// Contact.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'; // Optional: Create a CSS file for styling

const Contact = () => {
  return (
    <div className="contact-icons">
      {/* LinkedIn */}
      <div className='social'> 
        <p>Connect on LinkedIn</p>

      <a href="https://www.linkedin.com/in/gopalakrishna-siriveli " target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      </div>
      

      {/* Email */}
      <div className='social'>
        <p>Email Me at siriveligopal1998@gmail.com</p>
        <a href="mailto:siriveligopal1998@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
      </a>
      </div>
      

      {/* WhatsApp */}
      <div className='social'>
        <p>Whatsapp or Call Me at +91 9618251847</p>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      </div>
      <p>Thank you for visiting my portfolio! Feel free to explore my projects and get in touch if you'd like to collaborate or just have a chat about web development.</p>
    </div>
    
  );
}

export default Contact;
