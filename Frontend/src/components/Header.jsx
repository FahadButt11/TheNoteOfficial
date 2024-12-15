import React from 'react';

const Header = () => {
  return (
    <header className="font-sans">
      {/* Top Bar */}
      <div className="bg-black text-white text-center text-sm py-2">
        Get extra 10% off on Bank Transfer. <a href="#" className="underline">Shop Now</a>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        {/* Logo */}
        <div className="text-2xl font-bold">
          THE <span className="text-black">NOTE.</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-lg">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#collection" className="hover:underline">Collection</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="#search" className="hover:text-red-500">🔍</a>
          <a href="#account" className="hover:text-red-500">👤</a>
          <a href="#cart" className="hover:text-red-500">🛒</a>
        </div>
      </div>
       {/* Banner Image */}
       <div className="mt-4">
        <img 
          src="Main_image.webp" 
          alt="Banner" 
          className="w-full h-auto" 
        />
      </div>
    </header>
  );
};
export default Header;