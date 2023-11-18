import React, { useState } from 'react';
import '../css/loginSignup.css';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import SignupPage from './signupPage';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [passwordEyeVisible, setPasswordEyeVisible] = useState(false);
    const [openSignupPage, setOpenSignupPage] = useState(false);
    const [openHomePage, setOpenHomePage] = useState(false);

    const handlePassClick = () => {
        setPasswordEyeVisible(!passwordEyeVisible);
    }

    const togglePasswordEyeVisibility = () => {
        return passwordEyeVisible ? 'text' : 'password';
    }

    const handleOpenSignupPageClick = () => {
        console.log('hello')
        setOpenSignupPage(true);
        // setOpenSignupPage(!openSignupPage);
    }

    const handleClickBtn = () => {
        setOpenHomePage(true);
        console.log("hello home page");
    }
    return (
        <>
            {
                openSignupPage ? (<SignupPage />) : (
                    <>
                        <Navbar />
                        <div className="loginMainDiv">
                            <div className="loginbox">
                                <h1>Login</h1>
                                <input type="text" placeholder='user name' />
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
                                <p>create an account <a href={SignupPage} onClick={handleOpenSignupPageClick}>click here</a></p>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default LoginPage;