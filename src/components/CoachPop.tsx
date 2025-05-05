import React from "react";
import "./CoachPop.css";

interface CoachPopProps {
  image: string;
  title: string;
  content: string;
}

const DetailPop: React.FC<CoachPopProps> = ({
  image,
  title,
  content
}) => {
  return (
    <div className="coach-pop">
      <div className="details">
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br />") }} />
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default DetailPop;