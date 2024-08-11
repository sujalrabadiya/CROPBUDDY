import React from 'react';
import './Alert.css';

const Alerts = () => {
  return (
    <div className="alerts-container">
      <h1>Alerts</h1>
      <p>Stay informed with the latest alerts regarding your plants and environment.</p>
      <div className="alert-list">
        <h3>Recent Alerts:</h3>
        <ul>
          <li>Low soil moisture detected in Tomato Plant area.</li>
          <li>Heavy rainfall expected tomorrow.</li>
          <li>New pest alert: Aphids detected in Rose Garden.</li>
          {/* Repeat for other alerts */}
        </ul>
      </div>
    </div>
  );
};

export default Alerts;
