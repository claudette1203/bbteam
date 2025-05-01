// src/components/ProfileCard.tsx

import React from "react";
import "./StoryCard.css";
// import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const ProfileCard: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <h2 className="title">
          Lorem Ipsum Dolor Sit Amet, Consectetur
        </h2>
        <p className="description">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...”
        </p>
        <div className="social-icons">
          {/* <FaInstagram />
          <FaLinkedin />
          <FaFacebook /> */}
        </div>
      </div>

      <div className="profile-image">
        <img
          src="/public/images/sports.jpg"
          alt="Man with soccer ball"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
