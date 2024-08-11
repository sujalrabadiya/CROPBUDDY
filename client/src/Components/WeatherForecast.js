import React from 'react';
import './WeatherForecast.css'

const WeatherForecast = () => {
  return (
    <div className="weather-forecast-container">
      <h1>Weather Forecast</h1>
      <p>Stay updated with the latest weather forecasts to plan your plant care.</p>
      <div className="current-weather">
        <h3>Current Weather: Sunny, 28°C</h3>
      </div>
      <div className="forecast-list">
        <h3>Weekly Forecast:</h3>
        <ul>
          <li>Monday: Sunny, 30°C</li>
          <li>Tuesday: Cloudy, 25°C</li>
          <li>Wednesday: Rainy, 22°C</li>
          {/* Repeat for other days */}
        </ul>
      </div>
    </div>
  );
};

export default WeatherForecast;
