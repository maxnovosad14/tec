import React, { useEffect, useRef, useState } from "react";
import guest from "./../img/png/house1.png";
import bath from "./../img/png/house2.png";
import bed from "./../img/png/house3.png";
import kitchen from "./../img/png/house4.png";

import stone from "./../img/png/stone.png";
import glass from "./../img/png/glass.png";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

function Images() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImgContainerClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleOverlayClose = () => {
    setShowModal(false);
  };

  return (
    // <div className=" w-full h-screen relative overflow-hidden transition-all duration-700">
    //   <img src={stone} alt="" className="absolute object-cover" />

      <div className="wrapper flex items-center justify-center">
        <div
          className={`container flex justify-center h-full relative px-7 pt-10 mb-12 ${
            showModal ? "" : ""
          }`}
        >
          <div className="flex flex-col gap-32 mr-40">
            <RevealOnScroll>
              <div
                className="img-container relative w-[400px] h-[500px]  flex items-end cursor-pointer hover:scale-110 hover:transition-all duration-700"
                onClick={() => handleImgContainerClick(guest)}
              >
                <img src={guest} alt="" className="absolute" />
                <section className="relative bg-white w-1/2 h-1/5 flex flex-col justify-center">
                  <div className="uppercase text-[#c1b393] font-semibold text-sm tracking-wider">
                    our projects
                  </div>
                  <div className="font-semibold text-xl">
                    Solution for dreams
                  </div>
                </section>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div
                className="img-container relative w-[400px] h-[500px]  flex items-end cursor-pointer hover:scale-110 hover:transition-all duration-1000"
                onClick={() => handleImgContainerClick(bath)}
              >
                <img src={bath} alt="" className="absolute" />
                <section className="relative bg-white w-1/2 h-1/5 flex flex-col justify-center">
                  <div className="uppercase text-[#c1b393] font-semibold text-sm tracking-wider">
                    exclusive homes
                  </div>
                  <div className="font-semibold text-xl">
                    View our feature listings
                  </div>
                </section>
              </div>
            </RevealOnScroll>
          </div>

          {selectedImage && (
            <>
              {showModal ? (
                <>
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={handleOverlayClose}
                  >
                    <div className="border-0 rounded-lg shadow-lg w-[700px] relative flex flex-col bg-white">
                      <div className="flex flex-col items-center  justify-between p-5 border-b border-solid ">
                        <button
                          className="bg-transparent border-0 text-black self-end"
                          onClick={handleOverlayClose}
                        >
                          <span className="text-black opacity-7 h-6 w-6 flex items-center justify-center bg-gray-100 py-0 rounded-full hover:bg-gray-200 transition-all duration-200">
                            x
                          </span>
                        </button>
                        <div className="flex flex-col justify-center items-center mb-6">
                          <img src={selectedImage} alt="" className="w-96" />
                        </div>
                        <div className=" text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati animi dolorem sed dignissimos totam,
                          excepturi dolor doloribus similique. Esse incidunt
                          iste repellat provident cum? Inventore reiciendis
                          accusantium quidem
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </>
          )}

          <div className="flex flex-col gap-20 ">
            <RevealOnScroll>
              <div
                className="img-container relative w-[400px] h-[500px] flex items-end cursor-pointer hover:scale-110 hover:transition-all duration-700"
                onClick={() => handleImgContainerClick(bed)}
              >
                <img src={bed} alt="" className="absolute" />
                <section className="relative bg-white w-1/2 h-1/5 flex flex-col justify-center">
                  <div className="uppercase text-[#c1b393] font-semibold text-sm tracking-wider">
                    exclusive homes
                  </div>
                  <div className="font-semibold text-xl">New way of living</div>
                </section>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div
                className="img-container relative w-[400px] h-[500px]  flex items-end cursor-pointer hover:scale-110 hover:transition-all duration-700"
                onClick={() => handleImgContainerClick(kitchen)}
              >
                <img src={kitchen} alt="" className="absolute brightness-" />
                <section className="relative bg-white w-1/2 h-1/5 flex flex-col justify-center">
                  <div className="uppercase text-[#c1b393] font-semibold text-sm tracking-wider">
                    our services
                  </div>
                  <div className="font-semibold text-xl">Explore our sold</div>
                </section>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Images;
