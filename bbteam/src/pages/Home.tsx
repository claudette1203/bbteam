import React from 'react';
import './Home.css';
import Hero from '../components/Hero';
import Fact from '../components/Fact';

const facts= [
  {
    num: 35,
    fact: "Peste 35 de medalii de aur, argint și bronz câștigate la competiții naționale de către sportivii antrenorilor noștri.",
    image: "public/images/medal.jpeg"
  }, 
  {
    num: 12,
    fact: "Ani de experienta in antrenat sportivi. Echipa noastra este formata din profesionisti cu experienta.",
    image: "public/images/athlete.webp"
  }
]

const Home: React.FC = () => {
  return (
    <>
      <Hero
          backgroundImage="/images/track.jpeg"
          heading="Join B&amp;B Team"
          subheading="Devin-o acum un atlet de top și alătură-te echipei noastre!"
          buttonText="Înscrie-te acum!"
          buttonLink="/contact"
        />
      <div className="home-page">
        <h2>DESPRE NOI</h2>
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
        <section className="facts">
          {facts.map((fact, index) => (
            <Fact key={index} fact={fact} />
          ))}
        </section>
        <section className="info-section">
          <br />
          <p>
            Asociatia Clubul Sportiv B&amp;B Team isi propune sa:
          </p>
          <br />
          <ul>
            <li>
              selecteze si sa pregateasca sportivi in vederea participarii acestora in competiţii de nivel local, national şi internaţional la ramurile sportive cuprinse in Certificatul de identitate sportiva;
            </li>
            <li>
              sa contribuie la promovarea si dezvoltarea a cat mai multori ramuri sportive;
            </li>
            <li>
              organizeze cursuri si antrenamente cu caracter regulat în ramurile de sport care fac obiectul de activitate al Asociatiei în scopul pregătirii sportivilor, indiferent de statutul lor si anume amatori sau profesionisti;
            </li>
            <li>
              organizeze si sa deruleze activităţi recreative, cantonamente de pregătire sportiva, competitii pentru membrii Asociatiei Sportive;
            </li>
            <li>
              Atraga parteneriate si resurse pentru sustinerea proiectelor derulate de Asociatia Clubul Sportiv B&amp;B Team;
            </li>
            <li>
              organizeze evenimente si demonstratii cu scopul de a promova activitatea asociatiei.
            </li>
          </ul>
          <br />
          <p>
            Asociatia Clubul Sportiv B&amp;B Team a fost infiintata in anul 2024 si este persoana juridica romana de drept privat, fara scop patrimonial, polisportiva, apolitica si non-profit. Clubul Sportiv este constituit si functioneaza in conformitate cu prevederile Ordonantei Guvernului nr.26/2000 cu privire la asociatii si fundatii si a Legii Educatiei Fizice si Sportului nr.69/2000.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
