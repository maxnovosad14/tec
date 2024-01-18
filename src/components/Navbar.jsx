import React, { useState } from "react";

function Navbar() {
  const [isShown, setIsShown] = useState(true);

  const handleToggle = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="flex justify-between px-100 items-center text-white mb-[160px]">
      <div className="text-lg font-semibold tracking-tight cursor-pointer">
        ARCHIT
      </div>

      {isShown && (
        <div>
          <ul className="flex justify-center">
            <li>
              <a href="https://www.tec-krakow.pl/" >Home</a>
            </li>
            <li className="mx-16">
              <a href="https://www.tec-krakow.pl/">Studio</a>
            </li>
            <li>
              <a href="https://www.tec-krakow.pl/">About</a>
            </li>
            <li className="mx-16">
              <a href="https://www.tec-krakow.pl/">Contacts</a>
            </li>
          </ul>
        </div>
      )}

      <button
        className={`relative flex items-center justify-center w-[50px] h-[50px] transform transition-all duration-200`}
        onClick={handleToggle}
      >
        <div className={`flex flex-col justify-between w-[20px] h-[20px] `}>
          <div
            className={`bg-white h-[2px] w-1/2 rounded transform ${
              isShown ? "rotate-45 translate-y-3 w-4 self-center mb-2 transition-ease-in duration-300" : "transition-ease-out duration-300"
            }`}
          ></div>
          <div
            className={`bg-white h-[1px] rounded ${isShown ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`bg-white h-[2px] w-1/2 rounded self-end transform ${
              isShown ? "-rotate-45 w-4 self-center mb-2" : ""
            }`}
          ></div>
        </div>
      </button>
    </div>
  );
}

export default Navbar;
