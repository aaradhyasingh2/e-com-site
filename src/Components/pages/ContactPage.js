import React, { useState } from 'react';
import '../css/eCom.css';

const ContactPage = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   subject: '',
  //   message: '',
  //   email: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log('Form data submitted:', formData);
  //   // You may want to send this data to a server or perform other actions
  // };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form action='https://formspree.io/f/xjvqdqpd' method='POST'>
        {/* <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label> */}
        <label style={{paddingTop:'10px'}}>
          Subject:
          <input
            type="text"
            name="subject"
            // value={formData.subject}
            // onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            cols='30'
            rows='10'
            // value={formData.message}
            // onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;