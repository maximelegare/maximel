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
import { Bubbles2DCanvas } from "../canvas/Bubble2DCanvas";
// import styles from "../../styles/filpCard.module.scss"

import { useBubblesAnimation } from "~/hooks/useBubbleAnimation";
import { useRecoilState } from "recoil";
import { dialogVisibilityAtom } from "atoms/dialogAtom";
import { useEffect } from "react";

interface BaseCard {
  imageUrl?: string | undefined;
  styles?: string | undefined;
  gradiantBorder?: boolean;
  clipPath?: string;
  circleHover?: boolean;
  canvas2DBubbles?: boolean;
  children?: ReactNode;
  colorHighlight: string;
  textHiglight?: string;
  messageUnderneath?: string;
  bubbleColor?: string;
}

interface CardProps extends BaseCard {
  handleCircleClick?: () => any;
}

interface FlipCardInterface extends BaseCard {
  onCardFlip: () => any;
  isFlipped?: boolean;
}
export const Card: FC<CardProps> = ({
  circleHover,
  imageUrl,
  styles,
  clipPath,
  gradiantBorder = false,
  canvas2DBubbles = false,
  children,
  colorHighlight,
  handleCircleClick,
  textHiglight,
  messageUnderneath,
  bubbleColor,
}) => {
  return (
    <>
      <article
        className={`${styles ? styles : ""} ${
          colorHighlight ? colorHighlight : ""
        } h-fit w-full rounded-lg ${
          gradiantBorder ? "p-[2px]" : ""
        } backface-hidden`}
      >
        <div
          className={` relative z-[1] flex   w-full items-center justify-center rounded-md ${
            gradiantBorder ? "bg-black" : ""
          } ${clipPath ?? ""}`}
        >
          <div className=" relative block h-full w-full overflow-hidden">
            <If condition={imageUrl}>
              <Then>
                <Image
                  className="pointer-events-none rounded-lg"
                  src={imageUrl ?? ""}
                  alt=""
                  width={1500}
                  height={0}
                ></Image>
              </Then>
              <Else>
                <div className="pointer-events-none relative z-[2]">
                  {children}
                </div>
              </Else>
            </If>
            <When condition={circleHover === true}>
              <div className="group" onClick={handleCircleClick}>
                <div
                  className={`${
                    colorHighlight ? colorHighlight : ""
                  }  absolute bottom-3 right-3 z-[1] h-16 w-16 rounded-full transition-all duration-1000 ease-in-out group-hover:scale-[30]`}
                ></div>
                <div
                  className={`${
                    colorHighlight ? colorHighlight : ""
                  }  absolute bottom-3 right-3 z-30 h-16 w-16 rounded-full transition-all duration-300 ease-in-out group-hover:scale-0`}
                ></div>
                <div className=" absolute bottom-3 right-3 z-30 flex h-16 w-16 animate-pulse  cursor-pointer  items-center justify-center rounded-full">
                  <div
                    className="flex items-center backface-hidden"
                    data-aos="fade-right-custom"
                  >
                    <BsArrowRightShort className="text-4xl text-white" />
                  </div>
                </div>
              </div>
            </When>
            <When condition={canvas2DBubbles === true}>
              <Bubbles2DCanvas bubbleColor={bubbleColor ?? "#fff"} />
            </When>
          </div>
        </div>
      </article>
      <When condition={messageUnderneath !== undefined}>
        <div className={`mt-4 flex animate-pulse justify-center text-center`}>
          <div className={textHiglight}>{messageUnderneath}</div>
        </div>
      </When>
    </>
  );
};

export const FlipCard: FC<FlipCardInterface> = ({
  onCardFlip,
  isFlipped,
  ...props
}) => {
  const [flipState, setFlipState] = useState(false);

  // const [visibilityState, setVisibilityState] =
  //   useRecoilState(dialogVisibilityAtom);

  useEffect(() => {
    if (isFlipped !== undefined) {
      setFlipState(isFlipped);
    }
  }, [isFlipped]);

  const handleFlip = () => {
    setFlipState(!flipState);
    onCardFlip();
  };

  return (
    <div>
      <div className={`flip-card`}>
        <div className={`flip-card-inner ${flipState ? "flip-action" : ""}`}>
          <div className={`flip-card-front ${flipState ? "z-[-1]" : ""}`}>
            <Card {...props} handleCircleClick={() => handleFlip()}>
              {props.children}
            </Card>
          </div>
          <div className="flip-card-back"></div>
        </div>
      </div>
    </div>
  );
};
 