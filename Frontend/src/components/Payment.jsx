import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CartSummary from "../components/CartSummary";
import { useGlobalState } from "../context/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Axios from "axios";
// import Order from "../../../Backend/models/orders.model";

const Payment = () => {
  const { cart, contactInfo, shippingMethod, paymentMethod, setPaymentMethod } = useGlobalState();
  const [selectedMethod, setSelectedMethod] = useState(paymentMethod || "COD");
  const navigate = useNavigate();

  const handleConfirmOrder = async () => {
    try {
      // Set payment method in global state
      setPaymentMethod(selectedMethod);
      console.log(shippingMethod);
      console.log(contactInfo);
      console.log(paymentMethod);
      console.log(cart);

      console.log("hello method");
      

      // Prepare order data
      const orderData =  {
         // Fetch user ID from global state
        products: cart.map((item) => ({
          product: item._id,
          quantity: item.quantity,
        })),
        shippingAddress: {
          firstName: contactInfo.firstName,
          lastName: contactInfo.lastName,
          address: contactInfo.address,
          city: contactInfo.city,
          postalCode: contactInfo.postalCode,
          phone: contactInfo.phone,
        },
        contact: {
            emailOrPhone: contactInfo.email
        },
        shippingMethod,
        paymentMethod: selectedMethod,
        totalAmount: cart.reduce((total, item) => total + item.quantity * item.price, 0),
      };
      console.log("order data info");
      console.log(orderData);

      // Make API call to place the order
        await Axios.post("http://localhost:5000/placeOrders", orderData);
      console.log('reached api');
        Cookies.remove("cart");
        Cookies.remove("contactInfo");
        Cookies.remove("shippingMethod");
        Cookies.remove("paymentMethod");

        // alert("Order confirmed successfully!");
      alert("Order placed successfully!");
      navigate('/');
    } catch (error) {
      console.error("Error placing order:", error.message);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="flex justify-between min-h-screen p-8 bg-gray-50">
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <Breadcrumb currentStep={3} />
        <h2 className="text-2xl font-bold mb-4">Payment</h2>

        {/* Display Contact and Address Details */}
        <div className="mb-6">
          <p><strong>Email:</strong> {contactInfo.email}</p>
          <p><strong>Address:</strong> {contactInfo.address}, {contactInfo.city}</p>
          <p><strong>Shipping Method:</strong> {shippingMethod}</p>
        </div>

        {/* Payment Options */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Select Payment Method</h3>
          <div className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              checked={selectedMethod === "Cash on Delivery"}
              onChange={() => setSelectedMethod("Cash on Delivery")}
              className="mr-2"
            />
            <label>COD - CASH ON DELIVERY</label>
          </div>
          <div className="flex items-center mt-3">
            <input
              type="radio"
              name="payment"
              value="PayPal"
              checked={selectedMethod === "PayPal"}
              onChange={() => setSelectedMethod("PayPal")}
              className="mr-2"
            />
            <label>PayPal</label>
          </div>
        </div>

        <button
          onClick={handleConfirmOrder}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
        >
          Confirm Order
        </button>
      </div>

      {/* Right Section: Cart Summary */}
      <CartSummary />
    </div>
  );
};

export default Payment;


    //   const handleConfirmOrder = () => {
    //     if (!paymentMethod) {
    //       alert("Please select a payment method!");
    //       return;
    //     }
    
    //     // Simulate calling Place Order API
    //     const orderDetails = {
    //       contactInfo,
    //       shippingMethod,
    //       paymentMethod,
    //     };
    //     console.log("Order Placed:", orderDetails);
    
    //     // Clear cookies after placing the order
        
    //   };