import { Tag } from "../src/components/Tag.js";
import { Description } from "../src/components/Description.js";
import { Header } from "../src/components/Header.js";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Tag />
    </div>
  );
}

export default App;
