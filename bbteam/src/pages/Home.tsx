import React from 'react';
import './Home.css';
import Hero from '../components/Hero';
import Fact, { FactT } from '../components/Fact';

const facts= [
  {
    num: 7,
    fact: "Medalii de aur national printre sportivii noștri. Performanțele sportivilor noștri sunt recunoscute la nivel național.",
    image: "public/images/medal.jpeg"
  }, 
  {
    num: 30,
    fact: "Ani de experienta in antrenat sportivi. Echipa noastra este formata din profesionisti cu experienta.",
    image: "public/images/athlete.webp"
  }
]

const Home: React.FC = () => {
  return (
    <>
      <Hero
          backgroundImage="public/images/track.jpeg"
          heading="Join B&amp;B Team"
          subheading="Devin-o acum un atlet de top și alătură-te echipei noastre!"
          buttonText="Înscrie-te acum!"
          buttonLink="/contact"
        />
      <div className="home-page">

        {/* Example info section */}
        <section className="info-section">
          <h2>DESPRE NOI</h2>
          <p>
            loerm ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            suscipit, nunc in ultricies tincidunt, nunc odio ultricies nunc, nec
            fermentum orci est non libero. Sed sit amet nulla eget purus
            tincidunt aliquam. Nulla facilisi. Nullam nec nunc nec nunc
            fermentum orci est non libero. Sed sit amet nulla eget purus
            tincidunt aliquam. Nulla facilisi. Nullam nec nunc nec nunc
            fermentum orci est non libero. Sed sit amet nulla eget purus
            tincidunt aliquam. Nulla facilisi.
          </p>
          <p>
            loerm ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            suscipit, nunc in ultricies tincidunt, nunc odio ultricies nunc, nec
            fermentum orci est non libero. Sed sit amet nulla eget purus
            tincidunt aliquam. Nulla facilisi. Nullam nec nunc nec nunc
            fermentum orci est non libero. Sed sit amet nulla eget purus
            tincidunt aliquam. Nulla facilisi. Nullam nec nunc nec nunc
            fermentum orci est non libero. Sed sit amet nulla eget purus
            tincidunt aliquam. Nulla facilisi.
          </p>
        </section>
        <section className="facts">
          {facts.map((fact, index) => (
            <Fact key={index} fact={fact} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;
