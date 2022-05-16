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
  // const tagNameOneSecondary = 'Libros':
  const tagNameTwo = 'Family';
  // const tagNameThree = '':
  // const tagNameFour = 'sdsdncvn';

  
  
  return (
    <section className="layout">
      <section className="overflowx">
        <div className="cardsContainer">
          <Header innertext={textHeaderOne} />
          <Description innertext={textDescriptionOne} />
          <Tag />
        </div>

        <div className="cardsContainer">
          <Header innertext={textHeaderTwo} />
          <Description innertext={textDescriptionTwo} />
          <Tag />
        </div>

        <div className="cardsContainer">
          <Header innertext={textHeaderThree} />
          <Description innertext={textDescriptionThree} />
          <Tag />
        </div>

        <div className="cardsContainer">
          <Header innertext={textHeaderFour} />
          <Description innertext={textDescriptionFour} />
          <Tag />
        </div>
      </section>
    </section>
  );
}

