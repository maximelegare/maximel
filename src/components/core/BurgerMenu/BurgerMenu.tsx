import React, { useState, useRef, type ReactElement } from "react";
import { BurgerIcon } from "./BurgerIcon";
import { If, Then } from "react-if";
import { CSSTransition } from "react-transition-group";

import { FaGlobeAmericas } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import Me from "../../../../public/assets/SVG/me.svg";
import { BsFillEnvelopeAtFill } from "react-icons/bs";

import Link from "next/link";

export const Burger = () => {
  const [isActive, setIsAcvive] = useState(false);

  const handleClick = () => {
    setIsAcvive(!isActive);
  };

  return (
    <div className="zoom-in-animation group fixed right-0 z-[48]">
      <div
        className={`absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white transition-all duration-300 ease-in-out group-hover:scale-[1.1] ${
          isActive ? "scale-[1.1] group-hover:scale-[1.1]" : ""
        }`}
      ></div>
      <div className="absolute right-0 ">
        <BurgerIcon handleClick={handleClick} />
      </div>

      <BurgerCicle
        href="#portfolio"
        isActive={isActive}
        styles="right-[88px] top-[2px] h-[50px] w-[50px]"
        delay={0}
        icon={<ImBriefcase className="text-3xl text-black" />}
      />
      <BurgerCicle
        icon={
          <div className="flex h-[26px] w-[26px] items-center">
            <Me />
          </div>
        }
        delay={150}
        isActive={isActive}
        styles="right-[67px] top-[49px] h-[43px] w-[43px]"
      />
      <BurgerCicle
        icon={<BsFillEnvelopeAtFill className="text-lg text-black" />}
        delay={150}
        isActive={isActive}
        styles="right-[35px] top-[77px] h-[37px] w-[37px]"
        href="#contact"
      />
      <BurgerCicle
        delay={300}
        icon={<FaGlobeAmericas className="text-lg text-black" />}
        isActive={isActive}
        styles="right-[2px] top-[91px] h-8 w-8"
      />
    </div>
  );
};

const BurgerCicle = ({
  isActive,
  styles,
  delay,
  icon,
  href,
}: {
  isActive: boolean;
  styles: string;
  delay: number;
  icon: ReactElement;
  href?: string;
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
      {href ? (
        <Link
          scroll={false}
          href={href}
          ref={nodeRef}
          className={`btn-sm btn-circle  btn absolute flex items-center justify-center rounded-full border-2 border-solid border-black bg-white hover:border-[#0de7da] hover:bg-white ${styles}`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          {icon}
        </Link>
      ) : (
        <button
          ref={nodeRef}
          className={`btn-sm btn-circle  btn absolute flex items-center justify-center rounded-full border-2 border-solid border-black bg-white hover:border-[#0de7da] hover:bg-white ${styles}`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          {icon}
        </button>
      )}
    </CSSTransition>
  );
};
