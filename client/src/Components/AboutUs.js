import React from 'react';
import './AboutUs.css'; // Ensure this file exists and has the required styles

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="intro">
        <h1>Welcome to CropBuddy</h1>
        <p>Empowering your plant care with smart technology and personalized insights.</p>
      </section>

      <section className="mission-values">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>Our mission is to enhance plant care through innovative solutions that offer seamless integration, smart management, and actionable insights.</p>
        </div>
        <div className="values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Innovation:</strong> Continuously improving and innovating to stay at the forefront of technology.</li>
            <li><strong>Customer-Centric:</strong> Focusing on user needs and delivering tailored solutions.</li>
            <li><strong>Sustainability:</strong> Promoting eco-friendly practices and efficient resource use.</li>
            <li><strong>Community:</strong> Building a supportive and engaging community around our products.</li>
          </ul>
        </div>
      </section>

      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-item">
          <h3>2020</h3>
          <p>Conceptualization and early development of the CropBuddy platform.</p>
        </div>
        <div className="timeline-item">
          <h3>2021</h3>
          <p>Alpha release and initial user testing, gathering feedback for improvements.</p>
        </div>
        <div className="timeline-item">
          <h3>2022</h3>
          <p>Official launch with enhanced features and wider market reach.</p>
        </div>
        <div className="timeline-item">
          <h3>2023</h3>
          <p>Introduction of advanced plant care algorithms and mobile app integration.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
