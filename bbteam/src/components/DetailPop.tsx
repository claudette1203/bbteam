import React from "react";
import "./DetailPop.css";

interface DetailPopProps {
  image: string;
  title: string;
  content: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const DetailPop: React.FC<DetailPopProps> = ({
  image,
  title,
  content,
}) => {
  return (
    <div className="detail-pop">
      <img src={image} alt={title} />
      <div className="details">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DetailPop;