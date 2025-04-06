import { useState } from "react";
import "./Accordion.css";
import { FaArrowDown } from "react-icons/fa";
interface AccordionProps{
    title:string;
    content:string
}
const Accordion = ({ title, content }:AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <div className={`arrow-icon ${isOpen ? "rotate" : ""}`}>
          <FaArrowDown />
        </div>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
