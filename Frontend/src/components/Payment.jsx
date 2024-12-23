import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CartSummary from "../components/CartSummary";
import { useGlobalState } from "../context/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { contactInfo, shippingMethod, paymentMethod, setPaymentMethod } = useGlobalState();
  const [selectedMethod, setSelectedMethod] = useState(paymentMethod || "Credit Card");
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    setPaymentMethod(selectedMethod);
    alert("Order placed successfully!");
    navigate("/order-summary");
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
              value="Credit Card"
              checked={selectedMethod === "Credit Card"}
              onChange={() => setSelectedMethod("Credit Card")}
              className="mr-2"
            />
            <label>Credit Card</label>
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
    //     Cookies.remove("cart");
    //     Cookies.remove("contactInfo");
    //     Cookies.remove("shippingMethod");
    //     Cookies.remove("paymentMethod");
    //     alert("Order confirmed successfully!");
    //   };