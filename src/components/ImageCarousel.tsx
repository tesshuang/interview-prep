import { useState, useRef } from "react";
import { flushSync } from "react-dom";

export default function ImageCarousel({
  images,
  isSlide = false,
}: {
  images: string[];
  isSlide?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImgRef = useRef<null | HTMLImageElement>(null);

  const scrollToView = () => {
    if (activeImgRef.current) {
      activeImgRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handlePre = () => {
    flushSync(() => {
      if (activeIndex === 0) {
        setActiveIndex(images.length - 1);
      } else {
        setActiveIndex(activeIndex - 1);
      }
    });

    scrollToView();
  };

  const handleNext = () => {
    flushSync(() => {
      if (activeIndex === images.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    });
    scrollToView();
  };
  return (
    <div className={`relative w-fit mx-auto ${isSlide ? "w-6/12" : ""}`}>
      <ul className={`${isSlide ? "overflow-hidden whitespace-nowrap" : ""}`}>
        {images.map((image, index) => (
          <li key={index} className={`${isSlide ? "inline-block" : ""}`}>
            {isSlide ? (
              <img
                ref={activeIndex === index ? activeImgRef : null}
                className={`p-4 object-cover h-48 w-96 ${
                  activeIndex === index && "bg-teal-800"
                }`}
                src={image}
                alt="image placeholder"
              />
            ) : (
              activeIndex === index && (
                <img
                  className="object-cover h-48 w-96"
                  src={image}
                  alt="image placeholder"
                />
              )
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={handlePre}
        aria-label="previous"
        className="absolute top-1/2 left-2 text-white inline-block h-[10px] p-1 border-current border-b-2 border-l-2 rotate-45"
      />
      <button
        aria-label="next"
        onClick={handleNext}
        className="absolute top-1/2 right-2 text-white inline-block h-[10px] p-1 border-current border-b-2 border-l-2 rotate-[225deg]"
      />
    </div>
  );
}
