import React from 'react';
import '../css/eCom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <div className="footerMain">
                <div className="footer1">
                    <h5>Our eComm <br /> site</h5>
                    <input type="text" placeholder='enter your email' />
                    <button>Subscribe</button>
                    <p>Get monthly updates and free resources.</p>
                </div>
                <div className="footer2">
                    <h5>Links</h5>
                    <ul>
                        <a href="#">eComm</a>
                        <a href="#">Products</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Social Media</a>
                    </ul>
                </div>
                <div className="footer3">
                    <h5>Recent News</h5>
                    <ul>
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Get In Touch</a>
                    </ul>
                </div>
                <div className="footer4">
                    <h5>Contact Us</h5>
                    <p>Phone no: +91 412798436</p>
                    <p>Email: eComm@gmail.com</p>
                    <p>Address: 1234 Street Name City, AA 99999</p>
                </div>
                <div className="socialMediaFooter">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faYoutube}/>
                <FontAwesomeIcon icon={faAmazon}/>
                </div>
            </div>
        </>
    )
}

export default Footer;