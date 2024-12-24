// import React, { createContext, useContext, useState, useEffect } from "react";
// import Cookies from "js-cookie";

// // Create a context
// const GlobalStateContext = createContext();

// export const useGlobalState = () => useContext(GlobalStateContext);

// // Create a provider
// export const GlobalStateProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [contactInfo, setContactInfo] = useState({
//     email: "",
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     phone: "",
//   });
//   const [shippingMethod, setShippingMethod] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("");

//   // Fetch initial data from cookies on component mount
//   useEffect(() => {
//     const cartFromCookies = Cookies.get("cart");
//     const contactInfoFromCookies = Cookies.get("contactInfo");
//     const shippingMethodFromCookies = Cookies.get("shippingMethod");
//     const paymentMethodFromCookies = Cookies.get("paymentMethod");

//     if (cartFromCookies) setCart(JSON.parse(cartFromCookies));
//     if (contactInfoFromCookies)
//       setContactInfo(JSON.parse(contactInfoFromCookies));
//     if (shippingMethodFromCookies) setShippingMethod(shippingMethodFromCookies);
//     if (paymentMethodFromCookies) setPaymentMethod(paymentMethodFromCookies);
//   }, []);

//   // Sync cart with cookies whenever it changes
//   useEffect(() => {
//     Cookies.set("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Sync contact info with cookies whenever it changes
//   useEffect(() => {
//     Cookies.set("contactInfo", JSON.stringify(contactInfo));
//   }, [contactInfo]);

//   // Sync shipping method with cookies whenever it changes
//   useEffect(() => {
//     if (shippingMethod) {
//       Cookies.set("shippingMethod", shippingMethod);
//     }
//   }, [shippingMethod]);

//   // Sync payment method with cookies whenever it changes
//   useEffect(() => {
//     if (paymentMethod) {
//       Cookies.set("paymentMethod", paymentMethod);
//     }
//   }, [paymentMethod]);

//   return (
//     <GlobalStateContext.Provider
//       value={{
//         cart,
//         setCart,
//         contactInfo,
//         setContactInfo,
//         shippingMethod,
//         setShippingMethod,
//         paymentMethod,
//         setPaymentMethod,
//       }}
//     >
//       {children}
//     </GlobalStateContext.Provider>
//   );
// };

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Create a unified context
const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [contactInfo, setContactInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });
  const [shippingMethod, setShippingMethod] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // Fetch initial data from cookies on mount
  useEffect(() => {
    const cartFromCookies = Cookies.get("cart");
    const contactInfoFromCookies = Cookies.get("contactInfo");
    const shippingMethodFromCookies = Cookies.get("shippingMethod");
    const paymentMethodFromCookies = Cookies.get("paymentMethod");

    if (cartFromCookies) {
      const parsedCart = JSON.parse(cartFromCookies);
      setCart(parsedCart);
      setCartCount(parsedCart.reduce((total, item) => total + item.quantity, 0));
    }
    if (contactInfoFromCookies)
      setContactInfo(JSON.parse(contactInfoFromCookies));
    if (shippingMethodFromCookies) setShippingMethod(shippingMethodFromCookies);
    if (paymentMethodFromCookies) setPaymentMethod(paymentMethodFromCookies);
  }, []);

  // Sync cart with cookies whenever it changes
  useEffect(() => {
    Cookies.set("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  // Sync other state data with cookies whenever it changes
  useEffect(() => {
    Cookies.set("contactInfo", JSON.stringify(contactInfo));
  }, [contactInfo]);

  useEffect(() => {
    if (shippingMethod) Cookies.set("shippingMethod", shippingMethod);
  }, [shippingMethod]);

  useEffect(() => {
    if (paymentMethod) Cookies.set("paymentMethod", paymentMethod);
  }, [paymentMethod]);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item._id === product._id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };
  
//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter((item) => item._id !== productId);
//     setCart(updatedCart);
//   };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item._id !== productId)); // Remove item if quantity is zero
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item._id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };
//   const updateCartQuantity = (productId, quantity) => {
//     const updatedCart = cart.map((item) =>
//       item._id === productId ? { ...item, quantity } : item
//     );
//     setCart(updatedCart);
//   };

  return (
    <GlobalStateContext.Provider
      value={{
        cart,
        cartCount,
        setCart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        contactInfo,
        setContactInfo,
        shippingMethod,
        setShippingMethod,
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
