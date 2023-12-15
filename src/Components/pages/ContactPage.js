import React, { useState } from 'react';
import '../css/eCom.css';

const ContactPage = () => {

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form action='https://formspree.io/f/xjvqdqpd' method='POST'>
        <label style={{ paddingTop: '10px' }}>
          Subject:
          <input
            type="text"
            name="subject"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            cols='30'
            rows='10'
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;