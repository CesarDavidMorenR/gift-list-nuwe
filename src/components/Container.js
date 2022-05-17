import React from 'react';
// import "./App.css";
import { Tag } from "./Tag.js";
import { Description } from "./Description.js";
import { Header } from "./Header.js";
// import { Tag } from "./Tag.js";
// import { Description } from "./Description.js";
// import { Header } from "./Header.js";

export const Container = () => {

  const textHeaderOne = 'Crew 🎉';
  const textHeaderTwo = 'Family  🎉';
  const textHeaderThree = 'Other 🎉';
  const textHeaderFour = 'Pet 🎉';

  const textDescriptionOne = `Lista de reagalos para el grupo ${textHeaderOne} `; 
  const textDescriptionTwo = `Lista de reagalos para el grupo ${textHeaderTwo} `; 
  const textDescriptionThree = `Lista de reagalos para el grupo ${textHeaderThree} `; 
  const textDescriptionFour = `Lista de reagalos para el grupo ${textHeaderFour} `; 

  const tagNameOne = 'Deportes de riesgo';
  const tagNameTwo = 'Libros';
  const tagNameThree = 'Family';
  const tagNameFour = 'Sport';

  
  
  return (
    <div className="layout">
      <section className="sign_desktop" >
        Develop by David Moreno (With React): <br />
        <a
          href="https://www.linkedin.com/in/david-moreno-developer/"
          className="link_socials"
        >
          Linkedin
        </a>
        <br />
        <a href="https://nuwe.io/users/cesardaviddev" className="link_socials">
          Nuwe Profile
        </a>
        <br />
        <a
          href="https://github.com/DavidMorenoDev/gift-list-nuwe/tree/main"
          className="link_socials"
        >
          Repository
        </a>
      </section>
      <section className="overflowx">
        <div className="cardsContainer">
          <Header innertext={textHeaderFour} />
          <Description innertext={textDescriptionFour} />
          <Tag innertext="Mascota" />
        </div>

        <div className="cardsContainer">
          <Header innertext={textHeaderThree} />
          <Description innertext={textDescriptionThree} />
          <Tag innertext={tagNameThree} />
          <Tag innertext="Un tag diferente" />
        </div>

        <div className="cardsContainer">
          <Header innertext={textHeaderTwo} />
          <Description innertext={textDescriptionTwo} />
          <Tag innertext={tagNameThree} />
          <Tag innertext={tagNameFour} />
        </div>

        <div className="cardsContainer">
          <Header innertext={textHeaderOne} />
          <Description innertext={textDescriptionOne} />
          <Tag innertext={tagNameOne} />
          <Tag innertext={tagNameTwo} />
        </div>

       <section className="sign_mobile">
        <div className="sign_mobile_container">
          Develop by David Moreno (With React): <br />
          <a
            href="https://www.linkedin.com/in/david-moreno-developer/"
            className="link_socials"
          >
            Linkedin
          </a>
          <br />
          <a href="https://nuwe.io/users/cesardaviddev" className="link_socials">
            Nuwe Profile
          </a>
          <br />
          <a
            href="https://github.com/DavidMorenoDev/gift-list-nuwe/tree/main"
            className="link_socials"
          >
            Repository
          </a>
        </div>
        </section>

      </section>
    </div>
  );
}

