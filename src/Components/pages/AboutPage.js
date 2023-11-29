import React from 'react';
import '../css/eCom.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2 style={{ fontWeight: '800', fontSize: '25px' }}>Welcome to Our E-Commerce Store</h2>
      <p>
        At our e-commerce store, we are committed to providing you with a
        seamless and enjoyable shopping experience. Our mission is to offer a
        wide range of high-quality products that cater to your needs and
        preferences.
      </p>

      <h2>Our Story</h2>
      <p>
        Started in [Year], our journey began with a passion for delivering
        exceptional products to our customers. Over the years, we have grown
        and evolved, but our dedication to quality and customer satisfaction
        remains unchanged.
      </p>

      <h2>What Sets Us Apart</h2>
      <p>
        We take pride in curating a diverse selection of products that meet
        the highest standards of quality. Our team works tirelessly to stay
        ahead of the latest trends, ensuring that you have access to
        state-of-the-art products.
      </p>

      <h2>Customer Satisfaction</h2>
      <p>
        Your satisfaction is our top priority. We value your feedback and are
        constantly striving to improve our services. If you have any
        questions, concerns, or suggestions, please don't hesitate to reach
        out to our customer support team.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have questions or need assistance? Feel free to contact us at
        <a href="mailto:info@example.com">info@example.com</a> or call us at
        [+91 4751268745].
      </p>
    </div>
  );
};

export default AboutPage;