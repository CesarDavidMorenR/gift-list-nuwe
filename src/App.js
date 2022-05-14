import './App.css';
import { Tag } from "./Tag.js";
import { Description } from "./Description.js";
import { Header } from "./Header.js";

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
