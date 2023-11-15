import React from 'react';
import './css/eCom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <div className="container">
        <h1 className="logotxt"><a href="#">eCom</a></h1>
        <ul className="navlink">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </ul>
        <div className="cartarea">
          <button>Login</button>
          <p><FontAwesomeIcon icon={faShoppingCart} />
          </p>
          <p className='menuBar'><FontAwesomeIcon icon={faBars} /></p>
          <p className='closeMenuBar'><FontAwesomeIcon icon={faClose} /></p>
        </div>
      </div>
    </>
  )
}

export default Navbar;