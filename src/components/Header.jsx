import React, { useRef, useState, useEffect } from "react";

import Navbar from "./Navbar";

import background1 from "./../img/png/background.png";
import background2 from "./../img/png/background2.png";
import background3 from "./../img/png/bg-4.png";

// import background2 from "./../img/bg-video2.mp4";
// import background1 from "./../img/bg-vid.mp4";

function Header() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [background1, background2, background3];
  const [key, setKey] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    setKey(key + 1);
  };

  const handlePrev = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setKey(key + 1);
    
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 10000);
  
    return () => {
      clearInterval(intervalId);
    };
  }, [currentImage]);

 
  return (
    <div className=" w-full h-screen relative overflow-hidden transition-all duration-700">
      <img
        key={key}
        src={images[currentImage]}
        alt={`Background ${currentImage + 1}`}
        className={`w-full h-screen object-cover brightness-50 absolute transition-all duration-1000 opacity-70`}
        onLoad={(e) => {
          e.target.style.opacity = 0.9;
        }}
      />

      <div className="container h-full mx-auto px-7 pt-10 relative flex flex-col">
        <Navbar />

        <div className="flex justify-between items-center mb-20">
          <div className="text-white flex justify-between items-center">
            <div>
              <div className="uppercase text-lg font-medium mb-6 flex ">
                arcitecture
              </div>
              <div className="title capitalize font-semibold text-7xl mb-3">
                new way <br /> of living
              </div>
              <div className="text-lg">
                Change the way you live life, closer to nature.
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen flex flex-col justify-end mb-14">
          <div className="flex gap-64 self-start ">
            <div className="text-white">
              <div className="flex  min-w-[200px]">
                <p>1</p>
                <div className="h-11 w-[1px] bg-orange-500 rotate-12 mx-4"></div>
                <div>
                  <div className="font-medium  uppercase">Unleash the stars</div>
                  <div className="font-light capitalize">
                    And open the new world
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="flex  min-w-[200px]">
                <p>2</p>
                <div className="h-11 w-[1px] bg-orange-500  rotate-12 mx-4"></div>
                <div>
                  <div className="font-medium uppercase">Sleeping areas</div>
                  <div className="font-light capitalize">
                    A grand entrance
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="flex  min-w-[200px]">
                <p>3</p>
                <div className="h-11 w-[1px] bg-orange-500  rotate-12 mx-4"></div>
                <div>
                  <div className="font-medium uppercase">outdoor space</div>
                  <div className="font-light capitalize">
                   framed by a countryard
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute gap-72 transform flex  cursor-pointer">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`carousel-dot ${
                  index === currentImage ? "active" : ""
                }`}
              />
            ))}
          </div>

          <div className="flex text-white self-end text-4xl gap-10 relative">
            <button onClick={handlePrev} className="carousel-button ">
              {"<"}
            </button>
            <button onClick={handleNext} className="carousel-button ">
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
