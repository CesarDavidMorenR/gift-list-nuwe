import React from 'react';
// import "./App.css";
import { Tag } from "./Tag.js";
import { Description } from "./Description.js";
import { Header } from "./Header.js";
// import { Tag } from "./Tag.js";
// import { Description } from "./Description.js";
// import { Header } from "./Header.js";

export const Container = () => {
  return (
    <section className="overflowx">
      <div className="cardsContainer">
        <Header />
        <Description />
        <Tag />
      </div>
    </section>
  );
}

