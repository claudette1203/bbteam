import React from 'react';
import './Player.css';

interface PlayerProps {
  sport: string;
  peopleNames: string[];
  peopleImages: string[];
  peoplePages: string[];
}

const Player: React.FC<PlayerProps> = ({
  sport,
  peopleNames,
  peopleImages,
  peoplePages
}) => {
  // Path to your fallback icon
  const defaultIcon = '/person-icon.png';

  return (
    <div className="sport">
      <p>{sport}</p>
      <div className="people">
        {peopleNames.map((name, index) => {
          const imageSrc = peopleImages[index] ? peopleImages[index] : defaultIcon;
          return (
            <div key={name} className="person">
              <div className="person-overlay">
                <p className="person-name">{name}</p>
                <button
                  className="person-button"
                  onClick={() => window.location.href = peoplePages[index]}
                >
                  DETALI
                </button>
              </div>
              <img className="person-image" src={imageSrc} alt={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Player;