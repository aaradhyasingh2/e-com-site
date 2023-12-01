import React, { useState } from 'react';
import './css/eCom.css';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [showMenuIcon, setShowMenuIcon] = useState();
  const history = useHistory();

  const handleClickLoginBtn = (e) => {
    e.preventDefault();
    history.push('/login')
  }
  const handleCartItem = () => {
    history.push('/cart')
  }
  return (
    <>
      <div className="container">
        <h1 className="logotxt"><Link to="/home" onClick={() => setShowMenuIcon(false)}>eCom</Link></h1>
        <div className={showMenuIcon ? 'mainNavBox active' : 'mainNavBox'}>
          <ul className="navlink">
            <li><Link to="/home" onClick={() => setShowMenuIcon(false)}>Home</Link></li>
            <li><Link to="/product" onClick={() => setShowMenuIcon(false)}>Products</Link></li>
            <li><Link to="/about" onClick={() => setShowMenuIcon(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setShowMenuIcon(false)}>Contact</Link></li>
          </ul>
          <div className="cartarea">
            <button onClick={handleClickLoginBtn} style={{ cursor: 'pointer' }}>Login</button>
            <p><FontAwesomeIcon icon={faShoppingCart} onClick={handleCartItem} style={{ cursor: 'pointer' }} />
            </p>
            <div className="menuIconBox">
              <p className='menuBar'><FontAwesomeIcon icon={faBars} onClick={() => setShowMenuIcon(true)} /></p>
              <p className='closeMenuBar'><FontAwesomeIcon icon={faClose} onClick={() => setShowMenuIcon(false)} /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;