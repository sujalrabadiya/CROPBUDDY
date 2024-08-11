import React, { useState } from 'react';

const AddPlantForm = () => {
  const [plantData, setPlantData] = useState({
    name: '',
    plantType: '',
    soilMoistureThreshold: '',
    wateringSchedule: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post plantData to API
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Plant</h2>
      <input type="text" placeholder="Plant Name" onChange={(e) => setPlantData({...plantData, name: e.target.value})} />
      <input type="text" placeholder="Plant Type" onChange={(e) => setPlantData({...plantData, plantType: e.target.value})} />
      <input type="number" placeholder="Soil Moisture Threshold" onChange={(e) => setPlantData({...plantData, soilMoistureThreshold: e.target.value})} />
      <button type="submit">Add Plant</button>
    </form>
  );
};

export default AddPlantForm;
