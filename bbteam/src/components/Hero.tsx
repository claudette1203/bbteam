import React from 'react';
import './Hero.css';

interface HeroProps {
  backgroundImage: string;
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  heading,
  subheading,
  buttonText,
  buttonLink
}) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1>{heading}</h1>
      <p>{subheading}</p>
      {/* Use <a> if linking to external page, or <NavLink> if it's within your React Router */}
      <a href={buttonLink} className="cta-button">
        {buttonText}
      </a>
    </div>
  );
};

export default Hero;
