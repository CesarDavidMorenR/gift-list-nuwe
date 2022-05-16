import React from 'react';
// import "./App.css";
import { Tag } from "./Tag.js";
import { Description } from "./Description.js";
import { Header } from "./Header.js";
// import { Tag } from "./Tag.js";
// import { Description } from "./Description.js";
// import { Header } from "./Header.js";

export const Container = () => {
  const text = "sdsds 🎉"; 
  const textTwo = 'Ge down onw it wcoefffak';
  
  return (
    <section className="overflowx">
      <div className="cardsContainer">
        <Header />
        <Description innertext={textTwo} />
        <Tag />
      </div>
      <div className="cardsContainer">
        
        <Header />
        <Description innertext={text} />
        <Tag />
      </div>
    </section>
  );
}

