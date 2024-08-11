import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = () => {
  return (
    <section id="card-container" className="p-5">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-image position-relative image-zoom link-effect">
              <img src="https://media.istockphoto.com/id/1457941583/photo/lot-of-houseplants-growing-on-window-sill-from-left-ardisia-crenata-euphorbia-leuconeura.webp?b=1&s=170667a&w=0&k=20&c=6rrlDNm7lkUkcw-GhOaqLKEDKv-pjKknr7TDr8zGq38=" alt="Indoor Plant" />
            </div>
            <div className="card-body">
              <h2 className="section-title">Indoor Plants</h2>
              <p>Explore a variety of indoor plants to brighten up your space.</p>
              <Link to="/indoor-plants" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-image position-relative image-zoom link-effect">
              <img src="https://media.istockphoto.com/id/462671801/photo/flowers-in-the-garden.webp?b=1&s=170667a&w=0&k=20&c=TMnIGfVXTSwt7PETz5Gpfb39K74oI2j13wvY4GTKWao=" alt="Garden Plants" />
            </div>
            <div className="card-body">
              <h2 className="section-title">Garden Plants</h2>
              <p>Find the perfect plants for your garden and feel happy vibe</p>
              <Link to="/garden-plants" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-image position-relative image-zoom link-effect">
              <img src="https://storage.googleapis.com/redbrics-prod-backend.appspot.com/blog/images/_1665561914222_Gotu%20Kola.webp" alt="Herbs" />
            </div>
            <div className="card-body">
              <h2 className="section-title">Herbs & Spices</h2>
              <p>Discover a range of herbs and spices to grow at home.</p>
              <Link to="/herbs-and-spices" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-image position-relative image-zoom link-effect">
              <img src="https://cdn.pixabay.com/photo/2017/02/07/09/05/succulent-plants-2045388_640.jpg" alt="Succulents" />
            </div>
            <div className="card-body">
              <h2 className="section-title">Succulents</h2>
              <p>Check out our collection of low-maintenance succulents.</p>
              <Link to="/succulents" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
