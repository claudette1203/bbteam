import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import "./Sports.css";
import Sport from "../components/Sport";

const getColumnCount = (): number => {
  const width = window.innerWidth;
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 3;
};

const Sports: React.FC = () => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [colCount, setColCount] = useState(getColumnCount());
  const [displayCount, setDisplayCount] = useState(colCount * 2);

  useEffect(() => {
    const handleResize = () => {
      const columns = getColumnCount();
      setColCount(columns);
      setDisplayCount(columns * 2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("./data/sports.json")
      .then(response => response.json())
      .then(data => setSports(data.sports))
      .catch(error => console.error("Error fetching sports data:", error));
  }, []);

  const sortedSports = sports.slice().sort((a, b) => Number(b.active) - Number(a.active));
  const displayedSports = sortedSports.slice(0, displayCount);

  return ( 
    <>
      <Hero
        backgroundImage="./images/sports.jpg"
        heading="Join B&amp;B Team"
        subheading="Devin-o acum un atlet de top și alătură-te echipei noastre!"
        buttonText="Înscrie-te acum!"
        buttonLink="/contact"
      />
      <div className="sports">
        <h1>Alege-ți sportul!</h1>
        <p>Sport de echipă sau individual? Nicio problemă, avem opțiuni pentru toată lumea</p>
        <div className="sports-list">
          {displayedSports.map((sportItem) => (
            <Sport key={sportItem.id} id={sportItem.id} />
          ))}
        </div>
        {displayCount < sortedSports.length && (
          <button onClick={() => setDisplayCount(displayCount + colCount * 2)}>
            Mai multe...
          </button>
        )}
      </div>
    </>
  );
};
  
export default Sports;
  