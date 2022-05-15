import { Tag } from "../src/components/Tag.js";
// import { Description } from "../src/components/Description.js";
// import { Header } from "../src/components/Header.js";
import React from 'react';
import { Container } from "./components/Container.js";
import "./index.css";
import "./App.css";

export const App = () => {
  return (
    <div>
      <Container />
      <Tag />
    </div>
  )
}
