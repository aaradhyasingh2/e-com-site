import React, { useState } from 'react';
// import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router-dom';

const SignupPage = () => {
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUsername] = useState('');
    const history = useHistory();

    const handlePassClick = () => {
        setPasswordVisible(!passwordVisible);
    }

    const togglePasswordVisibility = () => {
        return passwordVisible ? 'text' : 'password';
    }

    const handleClickBtn = (e) => {
        e.preventDefault();
        console.log('handleClickBtn called');
        if (password.trim() === '' || userEmail.trim() === '' || userName.trim() === '') {
            alert('all section are required to fill');
        } else {
            history.push('/home')
        }
    }
    return (
        <>
            <div className="loginMainDiv">
                <div className="loginbox">
                    <h1>SignUp</h1>
                    <input type="text" placeholder='enter your name' value={userName} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="email" placeholder='xyz@example.com' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                    <input
                        type={togglePasswordVisibility()}
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
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
    );
}

export default SignupPage;
