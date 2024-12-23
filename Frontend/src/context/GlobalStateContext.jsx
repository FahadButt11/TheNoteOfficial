import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Create a context
const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

// Create a provider
export const GlobalStateProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
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

  // Fetch initial data from cookies on component mount
  useEffect(() => {
    const cartFromCookies = Cookies.get("cart");
    const contactInfoFromCookies = Cookies.get("contactInfo");
    const shippingMethodFromCookies = Cookies.get("shippingMethod");
    const paymentMethodFromCookies = Cookies.get("paymentMethod");

    if (cartFromCookies) setCart(JSON.parse(cartFromCookies));
    if (contactInfoFromCookies)
      setContactInfo(JSON.parse(contactInfoFromCookies));
    if (shippingMethodFromCookies) setShippingMethod(shippingMethodFromCookies);
    if (paymentMethodFromCookies) setPaymentMethod(paymentMethodFromCookies);
  }, []);

  // Sync cart with cookies whenever it changes
  useEffect(() => {
    Cookies.set("cart", JSON.stringify(cart));
  }, [cart]);

  // Sync contact info with cookies whenever it changes
  useEffect(() => {
    Cookies.set("contactInfo", JSON.stringify(contactInfo));
  }, [contactInfo]);

  // Sync shipping method with cookies whenever it changes
  useEffect(() => {
    if (shippingMethod) {
      Cookies.set("shippingMethod", shippingMethod);
    }
  }, [shippingMethod]);

  // Sync payment method with cookies whenever it changes
  useEffect(() => {
    if (paymentMethod) {
      Cookies.set("paymentMethod", paymentMethod);
    }
  }, [paymentMethod]);

  return (
    <GlobalStateContext.Provider
      value={{
        cart,
        setCart,
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
