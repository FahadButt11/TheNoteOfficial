import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CartSummary from "../components/CartSummary";
import { useGlobalState } from "../context/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const { contactInfo, shippingMethod, setShippingMethod } = useGlobalState();
  const [selectedMethod, setSelectedMethod] = useState(shippingMethod || "Standard");
  const navigate = useNavigate();

  const handleContinueToPayment = () => {
    setShippingMethod(selectedMethod);
    navigate("/payment");
  };

  return (
    <div className="flex justify-between min-h-screen p-8 bg-gray-50">
      {/* Left Section */}
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <Breadcrumb currentStep={2} />
        <h2 className="text-2xl font-bold mb-4">Shipping</h2>

        {/* Contact and Address Summary */}
        <div className="mb-6">
          <p><strong>Email:</strong> {contactInfo.email}</p>
          <p><strong>Address:</strong> {contactInfo.address}, {contactInfo.city}</p>
        </div>

        {/* Shipping Options */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Select Shipping Method</h3>
          <div className="flex items-center">
            <input
              type="radio"
              name="shipping"
              value="Standard Shipping"
              checked={selectedMethod === "Standard Shipping"}
              onChange={() => setSelectedMethod("Standard Shipping")}
              className="mr-2"
            />
            <label>Standard - Free</label>
          </div>
          
        </div>

        <button
          onClick={handleContinueToPayment}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Continue to Payment
        </button>
      </div>

      {/* Right Section: Cart Summary */}
      <CartSummary />
    </div>
  );
};

export default Shipping;
