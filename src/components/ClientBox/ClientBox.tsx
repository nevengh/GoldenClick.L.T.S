import './ClientBox.css';
import ArrowBTN from "../ArrowBTN/ArrowBTN";
interface ClientBoxProps{
    degree:string;
    title:string;
    text:string;
    img:string;
    imgAlt:string;

}
const ClientBox = ({imgAlt,title,img,degree,text}:ClientBoxProps) => {
  return (
    <div className="Client-Case-Box">
      <h2>{degree}</h2>
      <p className="Client-Case-Box-title">{title}</p>
      <p className="Client-Case-Box-text">
       {text}
      </p>
      <div className="Client-Box-logo mt-5 d-flex justify-content-between align-item-center ">
        <img src={img} alt={imgAlt} />
        <ArrowBTN />
      </div>
    </div>
  );
};

export default ClientBox;
