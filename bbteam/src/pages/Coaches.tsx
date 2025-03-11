import Hero from "../components/Hero";
import Player from "../components/Player";
import "./Coaches.css";

const Coaches: React.FC = () => {
    return (
      <>
        <Hero
          backgroundImage="/images/coach.jpg"
          heading="Join B&amp;B Team"
          subheading="Vrei sa devii antrenor?"
          buttonText="Contactează-ne acum!"
          buttonLink="/contact"
        />
        <div className="coaches">
          <h1>Antrenorii noștri</h1>
        </div>
        <Player
          sport="ATLETISM"
          peopleNames={["Bianca Păun", "Jane Doe", "Alex Doe"]}
          peopleImages={[
            "/images/coach1.jpeg",
            "/images/coach1.jpeg",
            "/images/coach1.jpeg"
          ]}
          peopleDescription={[
            "Bianca Păun este antrenor de atletism la BB Team YOYOYO.",
            "Jane Doe este inchis in casa si nu poate fi contactata.",
            "Alex Doe este un betiv simpatic care uneori are treaba. Alteori alearga."
          ]}
        />
      </>
    );
  };
  
  export default Coaches;
  