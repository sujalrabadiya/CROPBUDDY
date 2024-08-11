import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-widgets">
        <div className="widget">
          <h3>Plant Overview</h3>
          <p>Monitor the health of all your plants at a glance.</p>
        </div>
        <div className="widget">
          <h3>Weather Updates</h3>
          <p>Get real-time weather updates for your area.</p>
        </div>
        <div className="widget">
          <h3>Water Usage</h3>
          <p>Track and optimize your water consumption.</p>
        </div>
        <div className="widget">
          <h3>Alerts Summary</h3>
          <p>Stay on top of all important alerts.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
