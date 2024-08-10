import React from 'react';
import './Home.css'; // Ensure you have styles in a separate CSS file or use inline styles if preferred
import Card from './Card'; 


const Home = () => {
  return (
    <>
    <section id="billboard" className="py-5 my-5">
      <div className="container">
        <div className="row d-flex align-items-center position-relative">
          <div className="col-md-3">
            <div className="icon-box pb-5 d-flex flex-wrap align-items-center justify-content-between">
              <div className="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span className="content-light">1</span>
              </div>
              <div className="icon-content">
                <h3 className="box-title">Free Delivery</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
            <div className="icon-box pb-5 d-flex flex-wrap align-items-center justify-content-between">
              <div className="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span className="content-light">2</span>
              </div>
              <div className="icon-content">
                <h3 className="box-title">Wide Variety</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
            <div className="icon-box pb-5 d-flex flex-wrap align-items-center justify-content-between">
              <div className="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span className="content-light">3</span>
              </div>
              <div className="icon-content">
                <h3 className="box-title">Landscaping</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-holder text-center">
              <img src="https://demo.templatesjungle.com/plantlover/images/single-image.png" alt="banner" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="icon-box pb-5 d-flex flex-wrap align-items-center justify-content-between">
              <div className="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span className="content-light">4</span>
              </div>
              <div className="icon-content">
                <h3 className="box-title">Big Offers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
            <div className="icon-box pb-5 d-flex flex-wrap align-items-center justify-content-between">
              <div className="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span className="content-light">5</span>
              </div>
              <div className="icon-content">
                <h3 className="box-title">100% Secure Payment</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
            <div className="icon-box pb-5 d-flex flex-wrap align-items-center justify-content-between">
              <div className="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span className="content-light">6</span>
              </div>
              <div className="icon-content">
                <h3 className="box-title">Quality Guarantee</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pattern-overlay">
        <img src="images/pattern-overlay.png" alt="pattern" className="position-absolute" />
      </div>
      <div className="pattern-overlay1">
        <img src="images/pattern-overlay1.png" alt="pattern" className="position-absolute" />
      </div>
    </section>
    
        <Card/>
    </>
  );
};

export default Home;
