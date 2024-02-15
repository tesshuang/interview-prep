import React from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import { friendOptions, accordions } from "./data";

function App() {
  return (
    <div className="App">
      <h3 className="text-xl font-bold">Accordion</h3>
      <Accordion accordion={accordions} />
      <h4 className="font-bold">Multiple selection</h4>
      <Accordion accordion={accordions} type="multiple" />
      <h3 className="text-xl font-bold">Dropdown</h3>
      <Dropdown placeholder="Select your friend" options={friendOptions} />
    </div>
  );
}

export default App;
