import React from 'react';
import './Coach.css';

interface CoachProps {
  sport: string;
  peopleNames: string[];
  peopleImages: string[];
  peopleDescription: string[];
}

const Coach: React.FC<CoachProps> = ({
  sport,
  peopleNames,
  peopleImages,
  peopleDescription
}) => {
  const defaultIcon = '/person-icon.png';

  return (
    <div className="sport">
      <h1>{sport}</h1>
      <div className="people">
        {peopleNames.map((name, index) => {
          const imageSrc = peopleImages[index] ? peopleImages[index] : defaultIcon;
          return (
            <div key={name} className="person">
              <img className="person-image" src={imageSrc} alt={name} />
              <div className="coach-name">{name}</div>
              <div className="person-description">{peopleDescription[index]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coach;