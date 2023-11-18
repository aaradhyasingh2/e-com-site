import React, { useState } from 'react';
import './css/eCom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import LoginPage from './pages/loginPage';

const Navbar = () => {

  const [loginSectionOpen, setLoginSectionOpen] = useState(false);

  const handleClickLoginBtn = () => {
    console.log('open hua login section');
    setLoginSectionOpen(true);
  }
  return (
    <>
      {
        loginSectionOpen ? (<LoginPage />) : (
          <div className="container">
            <h1 className="logotxt"><a href="#">eCom</a></h1>
            <ul className="navlink">
              <a href="#">Home</a>
              <a href="#">Product</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </ul>
            <div className="cartarea">
              <button onClick={handleClickLoginBtn} style={{ cursor: 'pointer' }}>Login</button>
              <p><FontAwesomeIcon icon={faShoppingCart} />
              </p>
              <p className='menuBar'><FontAwesomeIcon icon={faBars} /></p>
              <p className='closeMenuBar'><FontAwesomeIcon icon={faClose} /></p>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Navbar;