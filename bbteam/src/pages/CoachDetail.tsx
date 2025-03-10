import React from 'react';
import { useParams } from 'react-router-dom';
import coachesData from '../data/coaches.json';
import './CoachDetail.css';

interface Coach {
    id: string;
    name: string;
    subtitle: string;
    bio: string;
    image: string;
    page: string;
}

const CoachDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Current coach id:", id);
  const coach: Coach | undefined = coachesData.coaches.find(c => c.id === id);

  if (!coach) {
    return <p>Coach not found.</p>;
  }

  return (
    <div className="coach-detail">
        <img src={coach.image} alt={coach.name} />
        <div className="details">
            <h1>{coach.name}</h1>
            <p className="subtitle">{coach.subtitle}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: coach.bio.replace(/\n/g, '<br />')
              }}
            />
        </div>
    </div>
  );
};

export default CoachDetail;