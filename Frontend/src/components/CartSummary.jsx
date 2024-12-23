import React from "react";
import { useGlobalState } from "../context/GlobalStateContext";

const CartSummary = () => {
  const { cart } = useGlobalState();

  const calculateSubtotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-1/3 p-8 bg-gray-100">
      <h3>Cart Summary</h3>
      {cart.map((item, index) => (
        <div key={index} className="flex items-center mb-4">
          <img
            src={`http://localhost:5000${item.images[0]}`}
            alt={item.name}
            className="w-12 h-12 mr-4 object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold">{item.name}</p>
            <p>Qty: {item.quantity}</p>
          </div>
          <p className="font-semibold">Rs {item.price * item.quantity}</p>
        </div>
      ))}
      <hr className="my-4" />
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>Rs {calculateSubtotal()}</p>
      </div>
      <div className="flex justify-between">
        <p>Shipping</p>
        <p>FREE</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between font-bold">
        <p>Total</p>
        <p>Rs {calculateSubtotal()}</p>
      </div>
    </div>
  );
};

export default CartSummary;
