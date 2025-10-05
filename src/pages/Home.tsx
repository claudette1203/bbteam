import React from 'react';
import './Home.css';
import Hero from '../components/Hero';
import Fact from '../components/Fact';

const facts= [
  {
    num: 35,
    fact: "Peste 35 de medalii de aur, argint și bronz câștigate la competiții naționale de către sportivii antrenați de antrenorii noștri.",
    image: "./images/medal.jpeg"
  }, 
  {
    num: 12,
    fact: "Ani de experiență în antrenarea sportivilor. Echipa noastră este formată din profesioniști cu experiență.",
    image: "./images/athlete.webp"
  }
]

const Home: React.FC = () => {
  return (
    <>
      <Hero
          backgroundImage="./images/track.jpeg"
          heading="Join B&amp;B Team"
          subheading="Devino acum un atlet de top și alătură-te echipei noastre!"
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
            Clubul Sportiv B&amp;B Team este o asociație privată, fără scop patrimonial, înființată în 2024 din dorința a trei foști și actuali sportivi de performanță de a se dedica atât promovării unui stil de viață sănătos, cât și performanței sportive. Clubul nostru oferă oportunități pentru sportivi de toate vârstele și nivelurile de pregătire: de la începători până la participanți la competiții de nivel național și internațional.
          </p>
          <br />
          <p>
            Misiunea și valorile noastre sunt:
          </p>
          <br />
          <ul>
            <li>promovarea sportului și unui stil de viață activ;</li>
            <li>dezvoltarea și sprijinirea sportivilor în atingerea obiectivelor personale;</li>
            <li>disciplina, fair-play-ul și spiritul de echipă, ca principii fundamentale;</li>
            <li>accesibilitatea și incluziunea – sportul pentru toți, indiferent de nivelul de experiență.</li>
          </ul>
          <br />
        </section>
      </div>
    </>
  )
};

export default Home;
