import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const [coach, setCoach] = useState<Coach | undefined>(undefined);

  useEffect(() => {
    fetch('./data/coaches.json')
      .then(response => response.json())
      .then(data => {
        const foundCoach = data.coaches.find((c: Coach) => c.id === id);
        setCoach(foundCoach);
      })
      .catch(error => {
        console.error('Error fetching coaches data:', error);
      });
  }, [id]);

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