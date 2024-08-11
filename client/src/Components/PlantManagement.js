import React from 'react';
import './PlantManagement.css';

const PlantManagement = () => {
  return (
    <div className="plant-management-container">
      <h1>Plant Management</h1>
      <p>Manage your plants efficiently by tracking their growth, health, and care schedule.</p>
      <div className="plant-list">
        {/* Example Plant Item */}
        <div className="plant-item">
          <h3>Tomato Plant</h3>
          <p>Last Watered: 2 days ago</p>
          <p>Next Watering: Tomorrow</p>
          <button>View Details</button>
        </div>
        {/* Repeat for other plants */}
      </div>
    </div>
  );
};

export default PlantManagement;
