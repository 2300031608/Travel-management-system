
import React from 'react';
import Navbar from '../components/Navbar';
export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <h2>Welcome to Travel Dashboard</h2>
      <ul>
        <li>Destinations</li>
        <li>Bookings</li>
        <li>Payments</li>
      </ul>
    </div>
  );
}
