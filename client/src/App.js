import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; // Adjust path if needed
import Home from './Components/Home'; // Adjust path if needed
import Card from './Components/Card';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Header />} />
        <Route path="/Card" element={<Card/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
