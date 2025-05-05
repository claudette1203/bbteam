import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Coach from "../components/Coach";
import "./Coaches.css";

interface CoachItem {
  id: string;
  name: string;
  subtitle: string;
  bio: string;
  image: string;
  page: string;
}

interface CoachGroup {
  sport: string;
  coaches: CoachItem[];
}

const Coaches: React.FC = () => {
  const [coachGroups, setCoachGroups] = useState<CoachGroup[]>([]);

  useEffect(() => {
    fetch("./data/coaches.json")
      .then((response) => response.json())
      .then((data) => setCoachGroups(data.sports))
      .catch((error) =>
        console.error("Error fetching coaches data:", error)
      );
  }, []);

  return (
    <>
      <Hero
        backgroundImage="./images/antrenori.jpg"
        heading="Join B&amp;B Team"
        subheading="Vrei sa devii antrenor?"
        buttonText="Contactează-ne acum!"
        buttonLink="/contact"
      />
      <div className="coaches">
        <h1>Antrenorii noștri</h1>
        {coachGroups.map((group) => (
          <div key={group.sport} className="coach-group">
            <Coach sport={group.sport} coaches={group.coaches} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Coaches;