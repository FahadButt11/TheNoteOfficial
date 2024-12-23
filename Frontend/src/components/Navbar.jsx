import React , {useState} from "react";
import { NavLink } from "react-router-dom";
import {Search, ShoppingCart, User} from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';
import { useCart } from "../context/CartContext";



const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen) };
    
    
  return (
    <div>
      {/* Top Bar */}
      <div className=" bg-[#333333] h- text-white text-sm text-center py-4">
        <span>
          Get extra <span className="font-semibold">10% off</span> on Bank Transfer.{" "}
          <NavLink to='/#'>
          <span className="cursor-default">Shop Now</span>
          </NavLink>
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 ">
        {/* Logo */}
        <div className="text-4xl ">
          THE <span className="font-bold text-black">NOTE.</span>
        </div>

        {/* Navigation Links */}
     

      <ul className="hidden md:flex space-x-8 gap-2 mr-[2.9rem] text-gray-600 font-medium">
        <li>
          <NavLink 
              to="/" className="relative group"  >
            Home
              <div className="absolute left-0 bottom-0 top-[20px]  h-[1px] w-0 bg-black transition-all  duration-300 group-hover:w-full"></div>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/collection" 
            className='relative group '>
            Collection
            {/* {isOpen && (
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-48">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                For Men
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                For Women
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Discovery Pack
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                The Hair Perfume Oil
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Reed Diffusers
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Gift Pack
              </li>
            </ul>
          )} */}
            
              <div className="absolute left-0 bottom-0 top-[20px]  h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className='relative group'>
            About
            <div className="absolute left-0 bottom-0 top-[20px]  h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className='relative group'>
            Contact
            <div className="absolute left-0 bottom-0 top-[20px]  h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </NavLink>
        </li>
      </ul>


        {/* Icons */}
        <div className="flex space-x-6  text-gray-600">
              <Search className="transform transition duration-300 hover:scale-125 hover:text-grey-800"size='25'/>
           
            <User className="transform transition duration-300 hover:scale-125 hover:text-grey-800" size="25" onClick={toggleSidebar}/>
          
            {/* <User className="transform transition duration-300 hover:scale-110" size='25'/> */}
            
            <NavLink to="/cart">

            
            <div className="transform transition duration-300 hover:scale-125 hover:text-grey-800 relative">
            <ShoppingCart size='25'/>
            {cartCount === 0 && (
            <span className="absolute top-0 left-[.85rem] right-0 bg-pink-200 text-center text-sm rounded-full text-black size-5">
              {cartCount}
            </span>
            )}
            
            {cartCount > 0 && (
            <span className="absolute top-0 left-[.85rem] right-0 bg-pink-200 text-center text-sm rounded-full text-black size-5">
              {cartCount}
            </span>
            )}
              {/* <span className="absolute top-2 left-[.85rem] right-0  bg-pink-200 text-center text-sm size-5 text-black rounded-full ">
              0
              </span> */}
            </div>
            </NavLink>
          </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-[27%] bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 transition transform duration-750 hover:rotate-180 "
          onClick={toggleSidebar}
        >
          X
        </button>

        {/* Sidebar Content */}
        <div className="p-8">
          <h2 className="text-lg font-semibold mb-4">Login</h2>
          <form className="box-border" >
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-3 py-3 border "
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-3 border "
                placeholder="Enter your password"
              />
            </div>
            <div >
            <button className="w-[40%] mx-[30%] border-2 border-black transform transition duration-800 hover:-translate-y-1 bg-black text-white py-3 hover:bg-white hover:text-black ">
              Log In
            </button>
            </div>
          </form>
          <p className="m-6 text-center text-sm">
            <NavLink to="/forgot-password" className="text-[18px] text-grey underline">
              Forgot your password?
            </NavLink>
          </p>
          <NavLink to="/register">
            <button className="w-[40%] mx-[30%] transform transition duration-300 hover:-translate-y-1  border-2 border-black bg-white text-black py-3 hover:bg-black hover:text-white ">
              Create Acc...
            </button>
            </NavLink>
        </div>
      </div>


    </div>
  );
};

export default Navbar;
