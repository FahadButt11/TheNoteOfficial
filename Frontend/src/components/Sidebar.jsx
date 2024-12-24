import { Link } from 'react-router-dom';
import React from 'react';

const Sidebar = () => (
  <div className="w-64  h-[1300px]  bg-gray-800 text-white flex flex-col p-4">
    <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
    <nav>
      <Link to="/admin" className="block mb-2 hover:text-gray-400">Dashboard</Link>
      <Link to="/admin/products" className="block mb-2 hover:text-gray-400">Products</Link>
      <Link to="/admin/addproduct" className="block mb-2 hover:text-gray-400">Add Product</Link>
      <Link to="/admin/orders" className="block mb-2 hover:text-gray-400">Orders</Link>
    </nav>
  </div>
);

export default Sidebar;
