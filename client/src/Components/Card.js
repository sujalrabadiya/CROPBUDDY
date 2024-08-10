import React from 'react';
import './Card.css'; 

const Card = () => {
  return (
    <section id="card-container" className="p-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-image position-relative image-zoom link-effect">
              <img src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg" alt="plant" />
            </div>
            <div className="card-body position-absolute content-light p-5 bottom-0">
              <h2 className="section-title">Colorful Indoors</h2>
              <div className="btn-box text-uppercase">
                <a href="#" className="text-decoration-none" data-after="Shop These">
                  <span>Shop These</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-image position-relative image-zoom link-effect">
              <img src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg" alt="plant" />
            </div>
            <div className="card-body position-absolute content-light p-5 bottom-0">
              <h2 className="section-title">Green Landscapes</h2>
              <div className="btn-box text-uppercase">
                <a href="#" className="text-decoration-none" data-after="Shop These">
                  <span>Shop These</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
