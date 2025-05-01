import React from "react";
import "./DetailPop.css";

interface DetailPopProps {
  image: string;
  title: string;
  location: string;
  hours: string;
  price: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const DetailPop: React.FC<DetailPopProps> = ({
  image,
  title,
  location,
  hours,
  price
}) => {
  return (
    <div className="detail-pop">
      <div className="details">
        <h1>{title}</h1>
        <p>Antrenamentele se vor desășura la:</p>
        <p className="value">{location}</p>
        <p>Orele de antrenament:</p>
        <p className="value">{hours}</p>
        <p>Prețul:</p>
        <p className="value">{price}</p>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default DetailPop;