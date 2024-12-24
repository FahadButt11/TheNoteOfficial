import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders from the database
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/orders'); // Replace with your API endpoint
        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Update order status
  const updateStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:5000/admin/${orderId}/changeStatus`, { status: newStatus });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: response.data.status } : order
        )
      );
    } catch (err) {
      console.error('Failed to update status:', err.message);
    }
  };

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error fetching orders: {error}</p>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Orders</h1>
        {orders.length === 0 ? (
          <p>No orders available.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="p-6 bg-white shadow-lg rounded-md border border-gray-200"
              >
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Order ID: {order._id}</h2>
                  <p>
                    <strong>Email:</strong> {order.contact.emailOrPhone}
                  </p>
                  <p>
                    <strong>Address:</strong> {`${order.shippingAddress.firstName} ${order.shippingAddress.lastName}, ${order.shippingAddress.address}, ${order.shippingAddress.city}`}
                  </p>
                  <p>
                    <strong>Total Price:</strong> Rs {order.totalAmount}
                  </p>
                  <p>
                    <strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <label htmlFor={`status-${order._id}`} className="text-sm font-medium">
                    Shipping Status:
                  </label>
                  <select
                    id={`status-${order._id}`}
                    value={order.status}
                    onChange={(e) => updateStatus(order._id, e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 text-sm"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;

