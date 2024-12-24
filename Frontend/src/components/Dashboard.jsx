import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-bold">Welcome to the Admin Panel</h1>
    </div>
  </div>
);

export default Dashboard;
