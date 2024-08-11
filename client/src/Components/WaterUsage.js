import React from 'react';
import './WaterUsage.css'

const WaterUsage = () => {
  return (
    <div className="water-usage-container">
      <h1>Water Usage</h1>
      <p>Track your water consumption and optimize for better efficiency.</p>
      <div className="water-stats">
        <h3>Total Water Used This Month: 120 liters</h3>
        <h3>Average Daily Usage: 4 liters</h3>
        <button>Add Water Usage</button>
      </div>
    </div>
  );
};

export default WaterUsage;
