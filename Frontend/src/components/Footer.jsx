import { Car, Facebook, Instagram, Mail, Map, MessageCircle, PhoneCall, User } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";





const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white text-[12px] py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Contact Info */}
        <div>
          <p className="mb-2 flex items-center">
            <Map size='20' /> <span className="ml-2">DHA Phase 6, Lahore, Pakistan</span>
          </p>
          <p className="mb-2 flex items-center">
            <PhoneCall size='20' /> <span className="ml-2">+6141119544</span>
          </p>
          <p className="mb-4 flex items-center">
            <Mail size='20' /> <span className="ml-2">info@thenoteofficial.com</span>
          </p>
          {/* Social Icons */}
          
          {/* Instagram Icon */}







          {/* <div className="group relative w-16 h-16 rounded-full border-white  flex justify-center items-center overflow-hidden"> */}
         

<div className="flex gap-2">
  <a href="https://www.facebook.com/TheNote.fragrances/">
    <div className="relative group w-10 h-10 rounded-full bg-white shadow-lg flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 rounded-full bg-transparent border-2 border-white scale-0 group-hover:scale-125 transition-transform duration-300 ease-in-out"></div>
      <Facebook className="text-xl text-gray-600 group-hover:text-[blue] transition-colors duration-300" />
    </div>
  </a>

  <a href="https://www.instagram.com/thenote_official/?igsh=aTJpNTQzeDhiYjU1&utm_source=qr#">
    <div className="relative group w-10 h-10 rounded-full bg-white shadow-lg flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 rounded-full bg-transparent border-2 border-white scale-0 group-hover:scale-125 transition-transform duration-300 ease-in-out"></div>
      <Instagram className="text-xl text-gray-600 group-hover:text-[red] transition-colors duration-300" />
    </div>
  </a>
</div>

        </div>

        {/* My Account */}
        <div>
          <h3 className="text-lg font-semibold mb-4">MY ACCOUNT</h3>
          <ul>
            <li className="mb-2 relative group">
              <NavLink to="/contact">Contact Us</NavLink>
              <div className="absolute left-0 bottom-0 top-[18px]  h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-[21%]"></div>
            </li>
            <li className="mb-2 relative group">
              <NavLink to="/order-tracking">Order Tracking</NavLink>
              <div className="absolute left-0 bottom-0 top-[18px]  h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-[27%]"></div>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
          <ul>
            <li className="mb-2 relative group">
              <NavLink to="/about">About Us</NavLink>
              <div className="absolute left-0 bottom-0 top-[18px]  h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-[18%]"></div>
            </li>
            <li className="mb-2 relative group">
              <NavLink to="/blogs">Blogs</NavLink>
              <div className="absolute left-0 bottom-0 top-[18px]  h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-[10%]"></div>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">POLICIES</h3>
          <ul>
            <li className="mb-2  relative group">
              <NavLink to="/delivery-orders ">Delivery & Orders</NavLink>
              <div className="absolute left-0 bottom-0 top-[18px]  h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-[34%]"></div>
            </li>
            <li className="mb-2 relative group">
              <NavLink to="/exchange-returns  ">Exchange & Returns</NavLink>
              <div className="absolute left-0 bottom-0 top-[18px]  h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-[38%]"></div>
            </li>
          </ul>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6">
      <a href="https://wa.link/jzg6q6">
    <div className="relative right-2 group w-[4rem] h-[4rem] rounded-full bg-[#25D366] shadow-lg flex justify-center items-center overflow-hidden hover:scale-125 transition-transform duration-500 ease-in-out">
      <div className="absolute inset-0 rounded-full bg-transparent border-2 border-white scale-0  transition-transform duration-700 ease-in-out"></div>
      
      <MessageCircle color="white" className="text-xl transition-colors duration-300" />
    </div>
  </a>
      </div>
      
    </footer>
  );
};





export default Footer;
