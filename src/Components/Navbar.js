import React, { useState } from 'react';
import './css/eCom.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import LoginPage from './pages/loginPage';

const Navbar = () => {

  const [loginSectionOpen, setLoginSectionOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState();
  // const [isLogin, setIsLogin] = useState(false);

  const handleClickLoginBtn = (e) => {
    e.preventDefault();
    setLoginSectionOpen(true);
    // setIsLogin(true);
  }
  return (
    <>
      {
        loginSectionOpen ? (<LoginPage />) : (
          <div className="container">
            <h1 className="logotxt"><Link to="/">eCom</Link></h1>
            <div className={showMenuIcon ? 'mainNavBox active' : 'mainNavBox'}>
              <ul className="navlink">
                {/* <a href="#" onClick={(e) => { e.preventDefault(); }}>Home</a>
                <a href="#" onClick={(e) => { e.preventDefault(); }}>Product</a>
                <a href="#" onClick={(e) => { e.preventDefault(); }}>About</a>
                <a href="#" onClick={(e) => { e.preventDefault(); }}>Contact</a> */}
                <li><Link to="/" onClick={() => setShowMenuIcon(false)}>Home</Link></li>
                <li><Link to="/products" onClick={() => setShowMenuIcon(false)}>Products</Link></li>
                <li><Link to="/about" onClick={() => setShowMenuIcon(false)}>About</Link></li>
                <li><Link to="/contact" onClick={() => setShowMenuIcon(false)}>Contact</Link></li>
              </ul>
              <div className="cartarea">
                <button onClick={handleClickLoginBtn} style={{ cursor: 'pointer' }}>Login</button>
                <p><FontAwesomeIcon icon={faShoppingCart} />
                </p>
                <div className="menuIconBox">
                  <p className='menuBar'><FontAwesomeIcon icon={faBars} onClick={() => setShowMenuIcon(true)} /></p>
                  <p className='closeMenuBar'><FontAwesomeIcon icon={faClose} onClick={() => setShowMenuIcon(false)} /></p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Navbar;