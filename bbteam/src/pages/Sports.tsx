import Hero from "../components/Hero";

const Sports: React.FC = () => {
    return (
      <>
        <Hero
          backgroundImage="public/images/track.jpeg"
          heading="Join B&amp;B Team"
          subheading="Devin-o acum un atlet de top și alătură-te echipei noastre!"
          buttonText="Înscrie-te acum!"
          buttonLink="/contact"
        />
      </>
    );
  };
  
  export default Sports;
  