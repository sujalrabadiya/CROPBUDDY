import React from 'react';
import './TipsResources.css';

const TipsResources = () => {
  return (
    <div className="tips-resources-container">
      <h1>Tips & Resources</h1>
      <p>Get expert tips and resources to help you care for your plants.</p>
      <div className="tips-list">
        <h3>Latest Tips:</h3>
        <ul>
          <li>Water your plants early in the morning for best results.</li>
          <li>Use mulch to retain soil moisture.</li>
          <li>Rotate your crops to maintain soil fertility.</li>
          {/* Repeat for other tips */}
        </ul>
      </div>
    </div>
  );
};

export default TipsResources;
