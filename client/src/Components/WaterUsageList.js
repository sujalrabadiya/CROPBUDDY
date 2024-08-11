import React from 'react';

const WaterUsageList = () => {
  const waterUsageRecords = [/* Fetch water usage records from API or state */];

  return (
    <div className="water-usage-list">
      <h2>Water Usage</h2>
      <ul>
        {waterUsageRecords.map((record) => (
          <li key={record._id}>
            {record.date}: {record.amount} liters
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WaterUsageList;
