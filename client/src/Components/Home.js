import React from 'react';
import './Home.css'; // Ensure you have styles in a separate CSS file or use inline styles if preferred
import Card from './Card';

const Home = () => {
  return (
    <>
      <section id="hero" className="py-5 my-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="hero-content">
                <h1>Welcome to CropBuddy</h1>
                <p>Your personal assistant for smart plant care and efficient water management.</p>
                <p>Transform your gardening experience with real-time data, alerts, and intuitive management tools.</p>
                <a href="#features" className="btn btn-primary">Explore Features</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-image text-center">
                <img src="https://demo.templatesjungle.com/plantlover/images/single-image.png"  alt="CropBuddy Features" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-5 my-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose CropBuddy?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box d-flex flex-column align-items-center">
                <div className="feature-icon bg-success rounded-circle text-white d-flex justify-content-center align-items-center">
                  <span className="icon">📊</span>
                </div>
                <h3 className="feature-title">Smart Insights</h3>
                <p>Get real-time data on soil moisture, weather conditions, and plant health for better decision-making.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box d-flex flex-column align-items-center">
                <div className="feature-icon bg-primary rounded-circle text-white d-flex justify-content-center align-items-center">
                  <span className="icon">🔔</span>
                </div>
                <h3 className="feature-title">Alerts & Notifications</h3>
                <p>Receive timely alerts on watering needs, pests, and diseases to keep your plants healthy.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box d-flex flex-column align-items-center">
                <div className="feature-icon bg-warning rounded-circle text-white d-flex justify-content-center align-items-center">
                  <span className="icon">💧</span>
                </div>
                <h3 className="feature-title">Efficient Watering</h3>
                <p>Optimize water usage with integrated management tools and reduce wastage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-5 my-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">What Our Users Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-box">
                <p>"CropBuddy has transformed how I manage my garden. The alerts and insights are incredibly useful!"</p>
                <h4>Jane Doe</h4>
                <p>Gardener</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-box">
                <p>"A must-have tool for any serious gardener. The smart watering recommendations are spot on."</p>
                <h4>John Smith</h4>
                <p>Plant Enthusiast</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-box">
                <p>"I love how easy it is to track my plant's needs and get timely notifications. Highly recommend!"</p>
                <h4>Emily Clark</h4>
                <p>Urban Farmer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Card />
    </>
  );
};

export default Home;
