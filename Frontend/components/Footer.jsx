
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Contact Info */}
        <div>
          <p className="mb-2 flex items-center">
            📍 <span className="ml-2">DHA Phase 6, Lahore, Pakistan</span>
          </p>
          <p className="mb-2 flex items-center">
            📞 <span className="ml-2">+6141119544</span>
          </p>
          <p className="mb-4 flex items-center">
            ✉ <span className="ml-2">info@thenoteofficial.com</span>
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-400 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-lg font-semibold mb-4">MY ACCOUNT</h3>
          <ul>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Contact Us</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Order Tracking</a>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
          <ul>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">About Us</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">POLICIES</h3>
          <ul>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Delivery & Orders</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Exchange & Returns</a>
            </li>
          </ul>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;