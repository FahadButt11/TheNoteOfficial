import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CartSummary from "../components/CartSummary";
import { useGlobalState } from "../context/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { contactInfo, setContactInfo } = useGlobalState();
  const [localContactInfo, setLocalContactInfo] = useState(contactInfo);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalContactInfo({ ...localContactInfo, [name]: value });
  };

  const handleContinueToShipping = () => {
    if (
      !localContactInfo.email ||
      !localContactInfo.firstName ||
      !localContactInfo.lastName ||
      !localContactInfo.address ||
      !localContactInfo.city ||
      !localContactInfo.phone
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    setContactInfo(localContactInfo);
    navigate("/shipping");
  };

  return (
    <div className="flex justify-between min-h-screen p-8 bg-gray-50">
      {/* Left Section */}
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <Breadcrumb currentStep={1} />
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <form className="grid grid-cols-2 gap-6">
          {/* Email */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={localContactInfo.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Enter your email"
            />
          </div>

          {/* First and Last Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={localContactInfo.firstName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={localContactInfo.lastName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Last Name"
            />
          </div>

          {/* Address */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={localContactInfo.address}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Street Address"
            />
          </div>

          {/* City and Postal Code */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={localContactInfo.city}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="City"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={localContactInfo.postalCode}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Postal Code"
            />
          </div>

          {/* Phone */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={localContactInfo.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Phone Number"
            />
          </div>
        </form>

        <button
          onClick={handleContinueToShipping}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Continue to Shipping
        </button>
      </div>

      {/* Right Section: Cart Summary */}
      <CartSummary />
    </div>
  );
};

export default Checkout;
