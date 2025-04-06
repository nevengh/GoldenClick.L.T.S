import React from 'react';

interface OurClientBoxProps {
  image: string;
  color: string;
  index: number;
}

const OurClientBox: React.FC<OurClientBoxProps> = ({ image, color, index }) => {
  return (
    <div
      className="loader"
      style={{ "--clr": color, "--i": index } as React.CSSProperties}
    >
      <div className="logo-wrapper">
        <img src={image} alt="Client" />
      </div>
    </div>
  );
};

export default OurClientBox;
