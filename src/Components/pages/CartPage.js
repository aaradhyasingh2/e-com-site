import React from 'react';
import '../css/cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import menjacket from '../images/menjacket.jpg';

const CartPage = () => {
  return (
    <>
      <div className="heading">
        <FontAwesomeIcon icon={faBagShopping} size='2x' /><h1>My Cart</h1>
      </div>
      <div className='cart-container'>
        <div className="product-show-section">
          <img src={menjacket} alt="" />
        </div>
        <div className="product-txt-section">
          <h1>title</h1>
          <p>rating, count</p>
          <p>price</p>
          <p>description</p>
        </div>
      </div>
    </>
  )
}

export default CartPage;