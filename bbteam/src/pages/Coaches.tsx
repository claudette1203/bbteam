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
          <p>Antrenorii noștri</p>
        </div>
        <Player
          sport="ATLETISM"
          peopleNames={["Bianca Păun", "Jane Doe", "Alex Doe"]}
          peopleImages={[
            "/images/coach1.jpeg",
            "/images/coach1.jpeg", // updated for variety if needed
            "/images/coach1.jpeg"
          ]}
          peoplePages={["/coaches/bianca", "/coaches/jane", "/coaches/alex"]}
        />
      </>
    );
  };
  
  export default Coaches;
  