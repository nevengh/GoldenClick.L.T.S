import "./About.css";
import globe from "../../assets/globe-removebg-preview.png"; // تأكد أن تضع صورة الكرة الأرضية في هذا المسار
import dentist from "../../assets/dental-dso-gradient-icon.svg";
import hospital from "../../assets/hospital-health-system-gradient-icon.svg";
import equity from "../../assets/private-equity-gradient-icon.svg";
import OurClientSection from "../../components/OurClientSection/OurClientSection";
const About = () => {
  return (
    <>
      <div className="About">
        <div className="about-content">
          <div className="about-hero-section-1">
            <h4>About</h4>
            <p>A LEADING DIGITAL MARKETING AGENCY IN SHARJAH</p>
          </div>

          {/* كرة الأرضية */}
          <div className="globe-wrapper">
            <img src={globe} alt="Rotating Globe" className="globe" />
          </div>

          <div className="about-hero-section">
            <p>
              We offer a wide range of services such as Search Engine
              Optimization (SEO), Pay per click advertising (PPC), Social media
              management, Email marketing, Branding, Reputation management. Lead
              generation including Data entry, Graphic designing, Video editing,
              Media Production, Website design, Software development, Mobile
              application development, etc.
            </p>
          </div>
        </div>
      </div>
    <div className="section">
    <div className="who-we-serve">
          <div className="who-we-serve-head">
            <h4>Who We Serve</h4>
            <h1>Industries We Help <span>Grow</span></h1>
          </div>
          <div className="who-we-serve-box-container">
          <div className="who-we-serve-box">
            <img src={dentist} alt="" />
            <h2>Dentists & DSOs</h2>
          </div>
          <div className="who-we-serve-box">
            <img src={hospital} alt="" />
            <h2>Hospitals</h2>
          </div>
          <div className="who-we-serve-box">
            <img src={equity} alt="" />
            <h2>Private Equity</h2>
          </div>
          <div className="who-we-serve-box">
            <img src={equity} alt="" />
            <h2>Private Equity</h2>
          </div>
          <div className="who-we-serve-box">
            <img src={equity} alt="" />
            <h2>Private Equity</h2>
          </div>
          <div className="who-we-serve-box">
            <img src={equity} alt="" />
            <h2>Private Equity</h2>
          </div>
          </div>
    </div>
        <OurClientSection/>
      </div>
    </>
  );
};

export default About;
