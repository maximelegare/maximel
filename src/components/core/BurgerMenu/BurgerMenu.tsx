import React, { useState } from "react";
import { BurgerIcon } from "./BurgerIcon";
import { If, Then } from "react-if";
export const Burger = () => {
  const [isActive, setIsAcvive] = useState(false);

  const handleClick = () => {
    setIsAcvive(!isActive);
  };

  return (
    <div className="group fixed right-0 z-[3000]">
      <div
        className={`absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white transition-all duration-300 ease-in-out group-hover:scale-[1.1] ${
          isActive ? "scale-[1.1] group-hover:scale-[1.1]" : ""
        }`}
      ></div>
      <div className="absolute right-0 ">
        <BurgerIcon handleClick={handleClick} />
      </div>
      <If condition={isActive === true}>
        <Then>
          <div className="circle-burger absolute right-20 top-[4px] h-[50px] w-[50px] rounded-full bg-red-300"></div>
          <div className="circle-burger absolute right-12 top-[60px] h-10 w-10 rounded-full bg-red-300"></div>
          <div className="circle-burger absolute right-[4px] top-[84px] h-8 w-8 rounded-full bg-red-300"></div>
        </Then>
      </If>
    </div>
  );
};
