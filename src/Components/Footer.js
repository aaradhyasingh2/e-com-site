import React, { useState } from 'react';
import './css/eCom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [userMail, setUserMail] = useState('');

    const handleClick = () => {
        if (userMail.trim() === '') {
            alert('enter your mail');
        }
        else {
            alert("you subscribe this site to get monthly updates!")
        }
    }

    return (
        <>
            <div className="footerMain">
                <div className="footer1">
                    <h5>Our eCom</h5>
                    <input type="email" placeholder='enter your email' value={userMail} onChange={(e)=>setUserMail(e.target.value)} required />
                    <button onClick={handleClick}>Subscribe</button>
                    <p>To get monthly updates.</p>
                </div>
                <div className="footer2">
                    <h5>Links</h5>
                    <ul>
                        <a href="#">eCom</a>
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
                    <ul>
                        <p>Phone no: +91 412798436</p>
                        <p>Email: eComm@gmail.com</p>
                        <p>Address: 1234 Street Name City, XY 8888</p>
                    </ul>
                </div>
                <div className="socialMediaFooter">
                    <p><FontAwesomeIcon icon={faFacebook} /></p>
                    <p><FontAwesomeIcon icon={faInstagram} />
                    </p>
                    <p><FontAwesomeIcon icon={faTwitter} /></p>
                    <p><FontAwesomeIcon icon={faYoutube} />
                    </p>
                    <p><FontAwesomeIcon icon={faAmazon} /></p>
                </div>
            </div>
        </>
    )
}

export default Footer;