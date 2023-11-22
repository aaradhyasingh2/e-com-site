import React, { useState } from 'react';
import '../css/loginSignup.css';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import SignupPage from './signupPage';
import Home from './HomePage';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [passwordEyeVisible, setPasswordEyeVisible] = useState(false);
    const [openSignupPage, setOpenSignupPage] = useState(false);
    const [openHomePage, setOpenHomePage] = useState(false);
    const [username, setUsername] = useState('');
    const [isloginPageOpen, setIsLoginPageOpen] = useState(true);

    const handlePassClick = () => {
        setPasswordEyeVisible(!passwordEyeVisible);
    }

    const togglePasswordEyeVisibility = () => {
        return passwordEyeVisible ? 'text' : 'password';
    }

    const handleOpenSignupPageClick = (e) => {
        e.preventDefault();
        console.log('hello');
        setOpenSignupPage(true);
        // setOpenSignupPage(!openSignupPage);
    }

    const handleClickBtn = () => {
        if (password.trim() === '' || username.trim() === '') {
            alert('Both username and password are required.');
        } else {
            alert('You are logged in!');
            setOpenHomePage(true);
            setIsLoginPageOpen(false);
        }
    };

    return (
        <>
            {
                openSignupPage ? (<SignupPage />) : openHomePage ? (<Home />) : (
                    <>
                        <Navbar />
                        <div className="loginMainDiv">
                            <div className="loginbox">
                                <h1>Login</h1>
                                <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                                <input
                                    type={togglePasswordEyeVisibility()}
                                    placeholder='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <FontAwesomeIcon
                                    icon={passwordEyeVisible ? faEye : faEyeSlash}
                                    id='eyeicon'
                                    onClick={handlePassClick}
                                />
                                <button onClick={handleClickBtn}>Login</button>
                                <p>create an account<Link to='/SignupPage' onClick={handleOpenSignupPageClick}> click here</Link></p>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default LoginPage;