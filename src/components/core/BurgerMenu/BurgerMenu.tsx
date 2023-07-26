import React, { useState, useRef, type ReactElement } from "react";
import { BurgerIcon } from "./BurgerIcon";
import { If, Then } from "react-if";
import { CSSTransition } from "react-transition-group";

import { FaGlobeAmericas } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import Me from "../../../../public/assets/SVG/me.svg"
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

      <BurgerCicle
        isActive={isActive}
        styles="right-[90px] top-[4px] h-[50px] w-[50px]"
        delay={0}
        icon={<ImBriefcase className="text-3xl text-black" />}
      />
      <BurgerCicle
        icon={
          <div className="w-[26px] h-[26px] flex items-center">
            <Me/>
          </div>
        }
        delay={150}
        isActive={isActive}
        styles="right-[56px] top-[66px] h-10 w-10"
      />
      <BurgerCicle
        delay={300}
        icon={<FaGlobeAmericas className="text-lg text-black" />}
        isActive={isActive}
        styles="right-[4px] top-[94px] h-8 w-8"
      />
    </div>
  );
};

const BurgerCicle = ({
  isActive,
  styles,
  delay,
  icon,
}: {
  isActive: boolean;
  styles: string;
  delay: number;
  icon: ReactElement;
}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={isActive}
      nodeRef={nodeRef}
      timeout={500 + delay}
      classNames="burger-circle"
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={`absolute flex items-center justify-center rounded-full bg-white ${styles} cursor-pointer transition-all duration-300 ease-in-out hover:scale-110`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {icon}
      </div>
    </CSSTransition>
  );
};
