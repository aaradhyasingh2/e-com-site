import React from 'react';
import '../css/home.css';
import model2 from '../images/model4.0.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import ProductPage from './ProductPage';
import { useHistory } from 'react-router-dom';
const HomePage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/login');
        history.push('/product');
    }
    return (
        <>
            <div className="homeMainDiv">
                <div className="homediv1">
                    <h1>EveryDay🤩<br />New collection for <br />you & your love one</h1>
                    <button onClick={handleClick}>Explore <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                    <button className='loginbtn' onClick={handleClick}>Login</button>
                </div>
                <div className="homediv2">
                    <img src={model2} alt="homepagesideimage" />
                </div>
            </div>
            <ProductPage />
        </>
    )
}

export default HomePage;
