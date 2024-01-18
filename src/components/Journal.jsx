import React, { useEffect, useRef, useState } from "react";
import img1 from "./../img/png/guest2.png";
import img2 from "./../img/png/bath2.png";
import img3 from "./../img/png/kitchen2.png";

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

function Journal() {
  return (
    <div className="w-full h-screen relative overflow-hidden transition-all duration-700">
      <div className="container h-full mx-auto px-7 pt-10 relative flex flex-col justify-center">
        <div className="title text-5xl font-semibold mb-12">Our journal</div>
        <RevealOnScroll>
          <div className=" flex flex-row justify-between ">
            <div className="hover:scale-105 transition-all duration-500">
              <img
                src={img1}
                alt=""
                className="w-[400px] h-[300px] cursor-pointer mb-3 "
              />
              <p className="font-semibold text-xl">
                Minimalism trending in modern
              </p>
              <div className="flex items-center gap-2">
                <div className="uppercase tracking-wide font-medium">news</div>•
                <div className="font-medium text-xs">Oct, 20</div>
              </div>
            </div>
            <div className=" w-[400px] h-[200px] cursor-pointer">
              <div className="hover:scale-105 transition-all duration-500">
                <img src={img2} alt="" className="w-[400px] h-[300px] mb-3 " />
                <p className="font-semibold text-xl">
                  Minimalism trending in modern
                </p>
                <div className="flex items-center gap-2">
                  <div className="uppercase tracking-wide font-medium">
                    inspiration
                  </div>
                  •<div className="font-medium text-xs">Oct, 20</div>
                </div>
              </div>
            </div>

            <div className=" w-[400px] h-[200px] cursor-pointer">
              <div className="hover:scale-105 transition-all duration-500">
                <img src={img3} alt="" className="w-[400px] h-[300px] mb-3 " />
                <p className="font-semibold text-xl">
                  Minimalism trending in modern
                </p>
                <div className="flex items-center gap-2">
                  <div className="uppercase tracking-wide font-medium">
                    For you
                  </div>
                  •<div className="font-medium text-xs">Dec, 01</div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default Journal;
