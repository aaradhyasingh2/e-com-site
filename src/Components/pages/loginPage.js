import React, { useState } from 'react';
import '../css/loginSignup.css';
// import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [passwordEyeVisible, setPasswordEyeVisible] = useState(false);
    const [username, setUsername] = useState('');
    const history = useHistory();

    const handlePassClick = () => {
        setPasswordEyeVisible(!passwordEyeVisible);
    }

    const togglePasswordEyeVisibility = () => {
        return passwordEyeVisible ? 'text' : 'password';
    }

    const handleOpenSignupPageClick = (e) => {
        e.preventDefault();
        history.push('/signup')
    }

    const handleClickBtn = () => {
        if (password.trim() === '' || username.trim() === '') {
            toast.warn('Both username and password are required.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.success('You are logged in👍🏻', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            history.push('/home')
        }
    };

    return (
        <>
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

export default LoginPage;