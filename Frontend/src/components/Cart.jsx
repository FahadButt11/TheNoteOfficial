// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import { useCart } from "../context/CartContext";

// const Cart = () => {
//     const { updateCartCount } = useCart();
//     const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Fetch cart items from the cookie
//     const cart = JSON.parse(Cookies.get("cart") || "[]");
//     setCartItems(cart);
//   }, []);

//   const removeFromCart = (productId) => {
//     // Get the current cart
//     const cart = JSON.parse(Cookies.get("cart") || "[]");

//     // Find and remove the product
//     const updatedCart = cart.map((item) => {
//       if (item._id === productId && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 }; // Decrease quantity
//       } else if (item._id === productId && item.quantity === 1) {
//         return null; // Remove product
//       }
//       return item;
//     }).filter(Boolean);

//     // Update the cookie
//     Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });

//     // Update the cart items state
//     setCartItems(updatedCart);

    
//     const newCartCount = updatedCart.reduce((total, item) => total + item.quantity, 0);

//   // Update the cart count in the context
//   updateCartCount(newCartCount);
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
//       {cartItems.length > 0 ? (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item._id} className="flex items-center justify-between mb-4">
//               <div>
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Price: Rs {item.price * item.quantity}</p>
//               </div>
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded"
//                 onClick={() => removeFromCart(item._id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';
import Cookies from "js-cookie";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { updateCartCount } = useCart();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(Cookies.get("cart") || "[]");
    setCartItems(cart);
  }, []);

  const removeFromCart = (productId) => {
    const cart = JSON.parse(Cookies.get("cart") || "[]");

    const updatedCart = cart
      .map((item) => {
        if (item._id === productId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else if (item._id === productId && item.quantity === 1) {
          return null;
        }
        return item;
      })
      .filter(Boolean);

    Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });
    setCartItems(updatedCart);

    const newCartCount = updatedCart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    updateCartCount(newCartCount);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });
    setCartItems(updatedCart);

    const newCartCount = updatedCart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    updateCartCount(newCartCount);
  };

  return (
    <div className="p-8 mb-20">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className=" pb-4 mb-6">
          <nav className="mb-8 text-gray-600">
          <a  href="/" className="hover:text-black text-[12px]">
            Home
          </a>{" "}
          &gt; <span className='text-[12px] '>Your Cart</span>
        </nav>
            <h1 className="text-[26px] leading-3 font-bold">YOUR CART</h1>
          </div>
          <div className="text-xs flex w-[115%] items-center bg-gray-100 border px-4 py-3 mb-4">
            <div>
                <span>PRODUCTS</span>
            </div>
            <div className=" flex ml-[65%] gap-16">
                <span >PRICE</span>
                <span className>QUANTITY</span>
                <span className> TOTAL</span>
                
            </div>
            

          </div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="flex w-[115%] items-center justify-between border border-gray-300 px-4 py-8 mb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={`http://localhost:5000${item.images[0]}`}
                    alt={item.title}
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.size}</p>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-md ">Rs {item.price}</p>
                  <div className="flex gap-x-3 items-center border border-gray-300 ">
                    <button
                      className="px-2 py-1 text-gray-700"
                      onClick={() => removeFromCart(item._id)}
                    >
                      −
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      className="px-2 py-1 text-gray-700"
                      onClick={() => increaseQuantity(item._id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-md ">
                    Rs {item.price * item.quantity}
                  </p>
                  <button
                    className="text-red-500"
                    onClick={() => removeFromCart(item._id)}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="col-span-1">
          <div className="ml-[8rem] p-4 mt-8 space-y-7 w-80">
            <h2 className="text-lg font-bold border-b pb-5">ORDER SUMMARY</h2>
            <div className="font-bold border-b pb-5 flex justify-between">
              <p >Subtotal</p>
              <p>
                Rs{" "}
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
            <div className=" border-b pb-5">
             
              <label className="block text-sm font-medium mb-4" >Coupon Code</label>
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="w-full p-2 border"
              />
               <p className="block font-medium mt-4 text-[8px] text-gray-500 pb-2">
                Coupon code will be applied on the checkout page
              </p>
            </div>
            <div className="flex justify-between border-b pb-5">
              <p className="font-bold">TOTAL:</p>
              <p className="font-bold">
                Rs{" "}
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
            <p className="block font-medium text-[8px] text-gray-500 ">
              Shipping calculated at checkout
            </p>
            <div className="w-full flex flex-col gap-4 justify-center items-center  ">
            <NavLink className=" w-[50%] px-2 pl-3 py-3 transition transform duration-300 border-2 border-black bg-black text-[10px] text-white font-bold hover:-translate-y-1 hover:bg-white hover:text-black
            hover:border-black" 
            to= '/checkout'>
            <button >
              PROCEED TO CHECKOUT
            </button>

            </NavLink>
            <NavLink to='/collection
            '
            className="w-[50%] px-2 pl-4 py-3 transition transform duration-300 border-2 border-black bg-white text-[10px] text-black font-bold hover:-translate-y-1 hover:bg-gray-900 hover:text-white
            hover:border-black">
            <button >
              CONTINUE SHOPPING
            </button>

            </NavLink>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


