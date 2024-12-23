import React, { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(() => {
        // Initialize cart count from the cookie
        const cart = JSON.parse(Cookies.get("cart") || "[]");
        return cart.reduce((total, item) => total + item.quantity, 0);
      });
      const addToCart = (product) => {
        // Get the current cart from the cookie
        const cart = JSON.parse(Cookies.get("cart") || "[]");
    
        // Check if the product already exists in the cart
        const existingProduct = cart.find((item) => item._id === product._id);
    
        if (existingProduct) {
          // Increment the quantity
          existingProduct.quantity += 1;
        } else {
          // Add the new product to the cart
          cart.push({ ...product, quantity: 1 });
        }
    
        // Save the updated cart back to the cookie
        Cookies.set("cart", JSON.stringify(cart), { expires: 7 }); // Expires in 7 days
    
        // Update the cart count
        setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
      };
    

      const updateCartCount = (count) => setCartCount(count);
//   const addToCart = () => {
//     setCartCount((prev) => prev + 1);
//   };

  return (
    <CartContext.Provider value={{ cartCount,addToCart, updateCartCount}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
