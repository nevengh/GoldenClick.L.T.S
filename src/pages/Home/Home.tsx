import "./Home.css";
import Hero from "../../components/Hero/Hero";
import ATI_Gray from "../../assets/ATI-Gray.svg";
import consumer from "../../assets/consumer-halo_disco-woman.webp";
import SectionHeading from "../../components/shared/SectionHeading/SectionHeading";
import { Container } from "react-bootstrap";
import ClientBox from "../../components/ClientBox/ClientBox";

import Accordion from "../../components/shared/Accordion/Accordion";
import { ServiceAccordion } from "../../DB/ServiceAccordion";
import { FAQHome } from "../../DB/FAQHome";
import LightBtn from "../../components/shared/LightBtn/LightBtn";
const Home = () => {
  const clientCase = [
    {
      id: 1,
      degree: "77%",
      text: "Nation’s largest physical therapy group meets capacity targets with data-driven PPC strategy.",
      img: ATI_Gray,
      imgALt: "CompanyName",
      title: "increase in CVR",
    },
    {
      id: 2,
      degree: "77%",
      text: "Nation’s largest physical therapy group meets capacity targets with data-driven PPC strategy.",
      img: ATI_Gray,
      imgALt: "CompanyName",
      title: "increase in CVR",
    },
    {
      id: 3,
      degree: "77%",
      text: "Nation’s largest physical therapy group meets capacity targets with data-driven PPC strategy.",
      img: ATI_Gray,
      imgALt: "CompanyName",
      title: "increase in CVR",
    },
  ];
  return (
    <div>
      <Hero />
      {/* Logo Carousel */}
      <div className="logo-container">
        <img src={ATI_Gray} alt="" />
        <img src={ATI_Gray} alt="" />
        <img src={ATI_Gray} alt="" />
        <img src={ATI_Gray} alt="" />
        <img src={ATI_Gray} alt="" />
        <img src={ATI_Gray} alt="" />
        <img src={ATI_Gray} alt="" />
      </div>
      <Container>
        <div className="Next-level-Container">
          <div className="Next-level-image">
            <img src={consumer} alt="" />
          </div>
          <div className="Next-level-Content">
            <h1 className="Next-level-head">
              <span>Next-Level</span> Strategies for Patient Growth
            </h1>
            <p className="Next-level-text">
              Discover the future of healthcare marketing with Cardinal. Our
              unique blend of data-driven strategies, deep industry expertise,
              and cutting-edge tools like Media Mix Modeling empowers you to
              optimize investments, drive growth, and connect patients to
              care—confidently.
            </p>
          </div>
        </div>
        {/* 
        *********************
          ************
        Client Case Studies 
          *************
        *********************
        */}
        <div className="section">
          <div className="Client-Case-Studies">
            <SectionHeading
              MainSpan="Envy"
              MainTitle="Healthcare Growth Stories to"
              subTitle="Client Case Studies"
            />
            <div className="Client-case-Container mt-5">
              {clientCase.map((ele) => {
                return (
                  <ClientBox
                    degree={ele.degree}
                    img={ele.img}
                    imgAlt={ele.imgALt}
                    text={ele.text}
                    title={ele.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* 
        *********************
          ************
        The Best Digital Marketing Company In Dubai
          *************
        *********************
        */}

        <div className="section">
          <div className="best-digital-marketing">
            <h1>The Best Digital Marketing Company In Sharjah</h1>
            <div className="best-digital-marketing-Container">
              {ServiceAccordion.map((item) => (
                <Accordion
                  key={item.id}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Let's Talk Now */}
        <div className="section">
         <LightBtn BtnName={`Ready to reimagine your patient acquisition strategy? Let's talk.`}/>
        </div>
        {/* Frequently Asked Question */}
        <div className="section">
          <div className="FAQ-Home">
            <h1 className="faq-head">Frequently Asked Questions</h1>
            {FAQHome.map((ele) => {
              return (
                <Accordion
                  content={ele.content}
                  title={ele.title}
                  key={ele.id}
                />
              );
            })}
          </div>
        </div>

        {/* Our Proven Process */}
        <div className="section">
          <div className="proven-process">
            <SectionHeading
              MainSpan="Our"
              MainTitle="Proven Process"
              subTitle="For Healthcare Growth"
            />
            <div className="process-steps">
              <div className="step">
                <h3>1. Discovery</h3>
                <p>
                  We understand your goals, audience, and challenges in detail.
                </p>
              </div>
              <div className="step">
                <h3>2. Strategy Development</h3>
                <p>
                  We craft a data-driven marketing plan tailored to your
                  clinic's needs.
                </p>
              </div>
              <div className="step">
                <h3>3. Campaign Launch</h3>
                <p>
                  We launch high-converting campaigns across multiple platforms.
                </p>
              </div>
              <div className="step">
                <h3>4. Optimization & Growth</h3>
                <p>
                  We continuously monitor and optimize for the best performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="section">
          <div className="success-metrics">
            <SectionHeading
              MainSpan="Our"
              MainTitle="Impact in Numbers"
              subTitle="Achievements that Speak Volumes"
            />
            <div className="metrics-container">
              <div className="metric">
                <h2>200+</h2>
                <p>Clinics Helped</p>
              </div>
              <div className="metric">
                <h2>15M+</h2>
                <p>Patients Reached</p>
              </div>
              <div className="metric">
                <h2>3X</h2>
                <p>Average ROI</p>
              </div>
              <div className="metric">
                <h2>95%</h2>
                <p>Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
