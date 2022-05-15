// import "./App.css";
import { Tag } from "./Tag.js";
import { Description } from "./Description.js";
import { Header } from "./Header.js";
import React from 'react';

export const Card = () => {
  return (
    <div className="card">
      <Header />
      <Description />
      <Tag />
    </div>
  );
};
