import React from 'react';

const PlantList = ({ setSelectedPlant }) => {
  const plants = [/* Fetch plants from API or state */];

  return (
    <div className="plant-list">
      <h2>Your Plants</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant._id} onClick={() => setSelectedPlant(plant)}>
            {plant.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantList;
