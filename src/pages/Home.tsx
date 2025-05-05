import React from 'react';
import './Home.css';
import Hero from '../components/Hero';
import Fact from '../components/Fact';

const facts= [
  {
    num: 35,
    fact: "Peste 35 de medalii de aur, argint și bronz câștigate la competiții naționale de către sportivii antrenorilor noștri.",
    image: "./images/medal.jpeg"
  }, 
  {
    num: 12,
    fact: "Ani de experienta in antrenat sportivi. Echipa noastra este formata din profesionisti cu experienta.",
    image: "./images/athlete.webp"
  }
]

const Home: React.FC = () => {
  return (
    <>
      <Hero
          backgroundImage="./images/track.jpeg"
          heading="Join B&amp;B Team"
          subheading="Devin-o acum un atlet de top și alătură-te echipei noastre!"
          buttonText="Înscrie-te acum!"
          buttonLink=".#contact"
        />
      <div className="home-page">
        <h1>DESPRE NOI</h1>
        <section className="facts">
          {facts.map((fact, index) => (
            <Fact key={index} fact={fact} />
          ))}
        </section>
        <section className="info-section">
          <p>
            Asociatia Clubul Sportiv B&amp;B Team, este un club privat fara scop
            patrimonial infiintat in anul 2024 din dorinta a trei fosti si actuali sportivi de
            performanta, de a se dedica atat promovarii unui stil de viata sanatos cat si a
            performantei sportive.
            Clubul nostru ofera oportunitatea pentru sportivii de toate varstele si toate
            nivelurile de pregatire de la incepatori pana la participanti la competitii de nivel
            national si chiar international.
            Misiunea si valorile noastre sunt:
          </p>
          <br />
          <ul>
            <li>promovarea sportului si a unui stil de viata activ;</li>
            <li>dezvoltarea si sprijinirea sportivilor in atingerea obiectivelor lor;</li>
            <li>disciplina si fair-play-ul, (si spiritual de echipa) ca principii fundamentale;</li>
            <li>accesibilitate si incluziune – sport pentru toti , indiferent de nivelul de experienta;</li>
          </ul>
          <br />
        </section>
      </div>
    </>
  );
};

export default Home;
