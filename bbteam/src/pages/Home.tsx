import React from 'react';
import './Home.css';
import Hero from '../components/Hero';

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
      </div>
    </>
  );
};

export default Home;
