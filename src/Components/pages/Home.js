import React from 'react';
import '../css/home.css';
import model2 from '../images/model4.0.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Product from './Product';
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="homeMainDiv">
                <div className="homediv1">
                    <h1>EveryDay🤩<br />New collection for <br />you & your love one</h1>
                    <button>Explore <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                    <button className='loginbtn'>Login</button>
                </div>
                <div className="homediv2">
                    <img src={model2} alt="homepagesideimage" />
                </div>
            </div>
            <Product/>
            <Footer />
        </>
    )
}

export default Home;
