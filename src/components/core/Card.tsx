/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import { useState } from "react";

import type { FC } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { When, If, Then, Else } from "react-if";
import { ReactNode } from "react";

import { BsArrowRightShort } from "react-icons/bs";
// import styles from "../../styles/filpCard.module.scss"

interface Props {
  imageUrl: string | undefined;
  styles?: string | undefined;
  gradiantBorder?: boolean;
  clipPath?: string;
  circleHover?: boolean;
  children?: ReactNode;
  colorHighlight?: string;
  handleFlipCard?: () => any;
}

export const Card: FC<Props> = ({
  circleHover,
  imageUrl,
  styles,
  clipPath,
  gradiantBorder = false,
  children,
  colorHighlight,
  handleFlipCard,
}) => {
  return (
    <article
      className={`${styles ? styles : ""} ${
        colorHighlight ? colorHighlight : ""
      } h-full w-full rounded-lg ${gradiantBorder ? "p-[2px]" : ""}`}
    >
      <div
        className={`relative z-[1] flex h-full  w-full items-center justify-center rounded-md ${
          gradiantBorder ? "bg-black" : ""
        } ${clipPath ?? ""}`}
      >
        <div className=" relative block h-full w-full overflow-hidden">
          <If condition={imageUrl}>
            <Then>
              <Image
                className="rounded-lg"
                src={imageUrl ?? ""}
                alt=""
                width={1800}
                height={0}
              ></Image>
            </Then>
            <Else>
              <div className="relative z-[2]">{children}</div>
            </Else>
          </If>
          <When condition={circleHover === true}>
            <div className="group">
              <div
                className={`${
                  colorHighlight ? colorHighlight : ""
                } absolute bottom-3 right-3 z-[1] h-16 w-16 rounded-full transition-all duration-1000 ease-in-out group-hover:scale-[30]`}
              ></div>
              <div
                className="absolute bottom-3 right-3 z-[2] flex h-16 w-16 animate-pulse  cursor-pointer  items-center justify-center rounded-full"
                onClick={handleFlipCard}
              >
                <div className="flex items-center" data-aos="fade-right-custom">
                  <BsArrowRightShort className="text-4xl text-white" />
                </div>
              </div>
            </div>
          </When>
          <div className="relative">
            <div className="z-20"></div>
            {/* <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-black opacity-40 rounded-lg outline outline-gray-800 outline-1 "></div> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export const FlipCard: FC<Props> = (props) => {
  const [flipState, setFlipState] = useState(false);
  const [flip, setFlip] = useState(false);

  const handdleFlip = () => {
    setFlipState(!flipState);
    setTimeout(() => {
      setFlip(true);
    }, 600);
  };

  return (
    <div>
      <div className={`flip-card ${flip ? "fliped-card" : ""}`}>
        <div className={`flip-card-inner ${flipState ? "flip-action" : ""}`}>
          <div className="flip-card-front">
            <Card {...props} handleFlipCard={() => handdleFlip()}>
              {props.children}
            </Card>
          </div>
          <div className="flip-card-back h-screen w-screen">
            <div className="absolute left-1/2 top-1/2 z-[200] h-full w-full -translate-x-1/2 -translate-y-1/2 bg-amber-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
