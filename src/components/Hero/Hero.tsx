import "./Hero.css";
import { Link } from "react-router-dom";
import LightBtn from "../shared/LightBtn/LightBtn";
// import rocket from '../../assets/rocket.png'
const Hero = () => {
  return (
    <div className="Hero">
      {/* <img className="rocket" src={rocket} alt="" /> */}
      <div className="Hero-content">
        <p className="sub-Head">Digital Marketing</p>
        <h1 className="Heading">
          The <span>Future</span> of Patient Acquisition
        </h1>
        <p className="Hero-text">
          We build custom performance marketing strategies for provider groups
          ready to hyperscale. If there’s a smarter way to grow, we’ll find it.
        </p>
        <Link to='/contact-us'><LightBtn BtnName="Request a Strategy Consultation"/></Link>
      </div>
    </div>
  );
};

export default Hero;
