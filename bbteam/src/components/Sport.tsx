import { useEffect, useState } from "react";
import "./Sport.css";
import SportPop from "./SportPop";

interface Sport {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  active: boolean;
}

interface SportProps {
  id: number;
}

const Sport: React.FC<SportProps> = ({ id }) => {
  const [sport, setSport] = useState<Sport | undefined>(undefined);
  const [imageError, setImageError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/data/sports.json")
      .then(response => response.json())
      .then(data => {
        const foundSport = data.sports.find((s: Sport) => s.id === id);
        setSport(foundSport);
      })
      .catch(error => {
        console.error("Error fetching sports data:", error);
      });
  }, [id]);

  if (!sport) {
    return <p>Sport not found.</p>;
  }

  return (
    <div className="sport-detail">
      {imageError ? (
        <div className="sport-icon-fallback">
          <i className="fas fa-futbol"></i>
        </div>
      ) : (
        <img
          src={sport.image}
          alt={sport.name}
          onError={() => setImageError(true)}
          style={{
            filter: sport.active ? "none" : "grayscale(1)"
          }}
        />
      )}
      <div className="details">
        <h1>{sport.name}</h1>
        <p className="short-description">{sport.shortDescription}</p>
        <button 
          disabled={!sport.active}
          onClick={() => setShowModal(true)}
        >
          <span>{sport.active ? "Mai multe detalii..." : "in curand..."}</span>
        </button>
      </div>
      {showModal && (
        <div 
          className="modal-overlay" 
          onClick={() => setShowModal(false)}
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <SportPop id={sport.id} name={sport.name} shortDescription={sport.shortDescription} description={sport.description} image={sport.image} active={sport.active} ></SportPop>
            <button 
              className="modal-close" 
              onClick={() => setShowModal(false)}
            >
              înapoi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sport;