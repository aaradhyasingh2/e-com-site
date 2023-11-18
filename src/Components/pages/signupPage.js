import React, { useState } from 'react';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import Home from './Home';

const SignupPage = () => {
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [homePageVisible, setHomePageVisible] = useState(false);

    const handlePassClick = () => {
        setPasswordVisible(!passwordVisible);
    }

    const togglePasswordVisibility = () => {
        return passwordVisible ? 'text' : 'password';
    }

    const handleClickBtn = () => {
        setHomePageVisible(true);
    }
    return (
        <>
            {
                homePageVisible ? (<Home />) : (
                    <>
                        <Navbar />
                        <div className="loginMainDiv">
                            <div className="loginbox">
                                <h1>SignUp</h1>
                                <input type="text" placeholder='enter your name' required />
                                <input type="email" placeholder='xyz@example.com' required />
                                <input
                                    type={togglePasswordVisibility()}
                                    placeholder='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <FontAwesomeIcon
                                    icon={passwordVisible ? faEye : faEyeSlash}
                                    id='eyeicon'
                                    onClick={handlePassClick}
                                    style={{ cursor: 'pointer' }}
                                />
                                <button onClick={handleClickBtn}>Continue</button>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default SignupPage;
