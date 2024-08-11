import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import PlantManagement from './Components/PlantManagement';
import WaterUsage from './Components/WaterUsage';
import SoilMoistureMonitoring from './Components/SoilMoistureMonitoring';
import WeatherForecast from './Components/WeatherForecast';
import TipsResources from './Components/TipsResources';
import UserProfile from './Components/UserProfile';
import Alerts from './Components/Alerts';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import IndoorPlants from './Components/IndoorPlants';
import GardenPlants from './Components/GardenPlants';
import HerbsAndSpices from './Components/HerbsAndSpices';
import Succulents from './Components/Succulents';
import AboutUs from './Components/AboutUs'; // Import AboutUs component
import ContactUs from './Components/ContactUs'; // Import ContactUs component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant-management" element={<PlantManagement />} />
        <Route path="/water-usage" element={<WaterUsage />} />
        <Route path="/soil-moisture-monitoring" element={<SoilMoistureMonitoring />} />
        <Route path="/weather-forecast" element={<WeatherForecast />} />
        <Route path="/tips-resources" element={<TipsResources />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/indoor-plants" element={<IndoorPlants />} />
        <Route path="/garden-plants" element={<GardenPlants />} />
        <Route path="/herbs-and-spices" element={<HerbsAndSpices />} />
        <Route path="/succulents" element={<Succulents />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* Adding About Us route */}
        <Route path="/contact-us" element={<ContactUs />} /> {/* Adding Contact Us route */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
