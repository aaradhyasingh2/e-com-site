import { createContext } from "react";

const CartContext = createContext();

export { CartContext };


// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartProducts, setCartProducts] = useState([]);

//   const addToCart = (product) => {
//     setCartProducts((prevProducts) => [...prevProducts, product]);
//   };

//   return (
//     <CartContext.Provider value={{ cartProducts, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
