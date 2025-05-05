import { useEffect, useState } from "react";
import "./Sport.css";
import DetailPop from "./DetailPop";

interface Sport {
  id: number;
  name: string;
  location: string;
  hours: string;
  price: string;
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
    fetch("./data/sports.json")
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
      <div className="sport-image-container">
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
        <div className="sport-name-overlay">
          <h1>{sport.name}</h1>
        </div>
      </div>
      <div className="details">
        <button 
          disabled={!sport.active}
          onClick={() => setShowModal(true)}
        >
          <span>{sport.active ? "Mai multe detalii..." : "in curand..."}</span>
        </button>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <DetailPop 
              image={sport.image}
              title={sport.name}
              location={sport.location}
              hours={sport.hours}
              price={sport.price}
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

export default Sport;