import React from "react";
import { NavLink } from "react-router-dom";
import {Search, ShoppingCart, User} from 'lucide-react';

const Navbar = () => {
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
      <div className="absolute left-0 bottom-0 top-[20px]  h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/collection" 
      className='relative group'
    >
      Collection
      <div className="absolute left-0 bottom-0 top-[20px]  h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/about" 
      className='relative group'
    >
      About
      <div className="absolute left-0 bottom-0 top-[20px]  h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/contact" 
      className='relative group'
    >
      Contact
      <div className="absolute left-0 bottom-0 top-[20px]  h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
    </NavLink>
  </li>
</ul>


        {/* Icons */}
        <div className="flex space-x-6  text-gray-600">
            <Search className="transform transition duration-300 hover:scale-110"size='25'/>
            <User className="transform transition duration-300 hover:scale-110" size='25'/>
          <div className="transform transition duration-300 hover:scale-110 relative">
            <ShoppingCart size='25'/>
            <span className="absolute top-2 left-[.85rem] right-0  bg-pink-200 text-center text-sm size-5 text-black rounded-full ">
              0
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
