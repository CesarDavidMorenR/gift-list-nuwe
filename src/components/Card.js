// import "../src/App.css";
import { Tag } from "./Tag.js";
import { Description } from "./Description.js";
import { Header } from "./Header.js";

function Card() {
  return (
    <div className="card">
      <Header />
      <Description />
      <Tag />
    </div>
  );
}

export default Card;
