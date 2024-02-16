import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import { friendOptions, accordions } from "./data";
import Modal from "./components/Modal";
import Rating from "./components/Rating";

function App() {
  const [rating, setRating] = useState<number>(0);
  return (
    <div className="App">
      <h3 className="text-xl font-bold">Accordion</h3>
      <Accordion accordion={accordions} />
      <h4 className="font-bold">Multiple selection</h4>
      <Accordion accordion={accordions} type="multiple" />
      <h3 className="text-xl font-bold">Dropdown</h3>
      <Dropdown placeholder="Select your friend" options={friendOptions} />
      <h3>Modal</h3>
      <Modal />
      <h3>Rating</h3>
      <Rating name="review-rating" value={rating} onChange={setRating} />
    </div>
  );
}

export default App;
