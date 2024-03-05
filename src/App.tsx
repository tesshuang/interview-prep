import React, { useState, useEffect } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import { friendOptions, accordions, images } from "./data";
import Modal from "./components/Modal";
import Rating from "./components/Rating";
import ProgressBar from "./components/ProgressBar";
import ImageCarousel from "./components/ImageCarousel";
import Autocomplete from "./components/Autocomplete";

function App() {
  const [rating, setRating] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let interval: any;

    if (progress < 1) {
      interval = setInterval(() => {
        setProgress((progress) => +(progress + 0.1).toFixed(2));
      }, 500);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="App">
      <h3 className="text-xl font-bold">Autocomplete</h3>
      <Autocomplete placeholder="Enter a city name" />
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
      <h3>Dynamic Progress Bar</h3>
      <ProgressBar value={progress} />
      <h3>Fixed Progress Bar</h3>
      <ProgressBar value={0.5} />
      <h3>Image Cousel</h3>
      <ImageCarousel key="regular" images={images} />
      <h3>Image Cousel Slider</h3>
      <ImageCarousel key="slider" images={images} isSlide />
    </div>
  );
}

export default App;
