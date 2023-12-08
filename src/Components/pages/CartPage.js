import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../Context/productContext';
import '../css/cart.css';

const CartPage = ({ setCountCartProduct }) => {
  const [addCartProduct, setAddCartProduct] = useContext(AppContext);
  const [showFullTitle, setShowFullTitle] = useState({});
  const [showFullDescription, setShowFullDescription] = useState({});
  

  const handleTitleToggle = (id) => {
    setShowFullTitle((prevShowFullTitle) => ({
      ...prevShowFullTitle,
      [id]: !prevShowFullTitle[id],
    }));

    // Close description when opening title
    setShowFullDescription((prevShowFullDescription) => ({
      ...prevShowFullDescription,
      [id]: false,
    }));
  };

  const handleDescriptionToggle = (id) => {
    setShowFullDescription((prevShowFullDescription) => ({
      ...prevShowFullDescription,
      [id]: !prevShowFullDescription[id],
    }));

    // Close title when opening description
    setShowFullTitle((prevShowFullTitle) => ({
      ...prevShowFullTitle,
      [id]: false,
    }));
  };

  const handleRemoveFromCart = (id) => {
    setAddCartProduct((prevProducts) => prevProducts.filter((product) => product.id !== id));

    // Update cart count in Navbar
    setCountCartProduct((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div className="heading">
        <FontAwesomeIcon icon={faBagShopping} size='2x' /><h1>My Cart</h1>
      </div>
      <div className='cart-container'>
        {addCartProduct.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-show-section">
              <img src={item.image} alt="imgnotfound" />
            </div>
            <div className="product-txt-section">
              <h1 className="title">
                {showFullTitle[item.id]
                  ? item.title
                  : `${item.title.slice(0, 15)}... `}
                <span
                  style={{ color: 'blue', cursor: 'pointer' }}
                  onClick={() => handleTitleToggle(item.id)}
                >
                  {showFullTitle[item.id] ? ' Read less' : ' Read more'}
                </span>
              </h1>
              <p>Rating: {item.rating.rate}, Count: {item.rating.count}</p>
              <p>Price: ${item.price}</p>
              <p className="description">
                {showFullDescription[item.id]
                  ? item.description
                  : `${item.description.slice(0, 15)}... `}
                <span
                  style={{ color: 'blue', cursor: 'pointer' }}
                  onClick={() => handleDescriptionToggle(item.id)}
                >
                  {showFullDescription[item.id] ? ' Read less' : ' Read more'}
                </span>
              </p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartPage;