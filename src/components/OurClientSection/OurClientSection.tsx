import React from 'react';
import './OurClientSection.css';
import firstChoice from "../../assets/LOGO_OCEAN.jpeg-ByBzxdBf-removebg-preview.png";
import british from "../../assets/britich-removebg-preview.png";
import beyond from "../../assets/beyond-removebg-preview.png";
import wazen from "../../assets/logo1.png";
import OurClientBox from '../OurClientBox/OurClientBox';


const OurClientSection: React.FC = () => {
  return (
    <div className="section">
      <div className="who-we-serve">
        <div className="who-we-serve-head">
          <h4>Our Clients</h4>
          <h1>Partners We Help <span>Grow</span></h1>
        </div>
        <div className="OurClientBox">
          <div className="OurClientBox-container">
            <OurClientBox image={firstChoice} color="#01e100" index={1} />
            <OurClientBox image={british} color="#f50076" index={2} />
            <OurClientBox image={beyond} color="#00e6fd" index={3} />
            <OurClientBox image={wazen} color="#01e100" index={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientSection;
