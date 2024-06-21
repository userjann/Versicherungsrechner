// AboutUs.js
import React from 'react';
import './aboutus.css'; // Importiere das CSS für die About Us Seite
import Navbar from './navbar'; // Importiere die Navbar-Komponente

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us">
        <div className="about-us-content">
          <h1>Über Uns</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
