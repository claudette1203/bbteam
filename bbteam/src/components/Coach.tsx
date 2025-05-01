import React, { useState } from "react";
import "./Coach.css";
import CoachPop from "./CoachPop";

interface CoachItem {
  id: string;
  name: string;
  subtitle: string;
  bio: string;
  image: string;
  page: string;
}

interface CoachProps {
  sport: string;
  coaches: CoachItem[];
}

const Coach: React.FC<CoachProps> = ({ sport, coaches }) => {
  const defaultIcon = "/person-icon.png";
  const [showModal, setShowModal] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState<CoachItem | null>(null);

  return (
    <div className="sport">
      <h1>{sport}</h1>
      <div className="people">
        {coaches.map((coach) => (
          <div key={coach.id} className="person">
            <img
              className="person-image"
              src={coach.image || defaultIcon}
              alt={coach.name}
            />
            <div className="coach-name">{coach.name}</div>
            <div className="person-description">{coach.subtitle}</div>
            <button
              className="person-button"
              onClick={() => {
                setSelectedCoach(coach);
                setShowModal(true);
              }}
            >
              Mai multe detalii...
            </button>
          </div>
        ))}
      </div>
      {showModal && selectedCoach && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <CoachPop 
              image={selectedCoach.image}
              title={selectedCoach.name}
              content={selectedCoach.bio} 
            />
            <button className="modal-close" onClick={() => setShowModal(false)}>
              înapoi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coach;