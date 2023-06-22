/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import { useState, useMemo } from "react";

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
  title?: string;
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
  handleCircleMouseEnter?: () => any;
  handleCircleMouseLeave?: () => any;
}

interface CardProps extends BaseCard {
  handleCircleClick?: () => any;
}

interface FlipCardInterface extends BaseCard {
  onCardFlip: () => any;
  isFlipped?: boolean;
}

export const Card: FC<CardProps> = ({
  title,
  circleHover,
  imageUrl,
  styles,
  clipPath,
  gradiantBorder = false,
  canvas2DBubbles = false,
  children,
  colorHighlight,
  handleCircleClick,
  handleCircleMouseEnter,
  handleCircleMouseLeave,
  textHiglight,
  messageUnderneath,
  bubbleColor,
}) => {
  const [showCardTitleWhenCircleGrew, setShowCardTitleWhenCircleGrew] =
    useState(false);

  const showTitle = () => {
    setTimeout(() => {
      setShowCardTitleWhenCircleGrew(true);
    }, 700);
  };

  const MemoBubbles2DCanvas = useMemo(() => {
    return (
      <Bubbles2DCanvas
        bubbleColor={bubbleColor ?? "#fff"}
        handleBubbleClicked={() => showTitle()}
      />
    );
  }, []);

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
              <div
                className="group"
                onClick={handleCircleClick}
                onMouseEnter={handleCircleMouseEnter}
                onMouseLeave={handleCircleMouseLeave}
              >
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
            <When condition={showCardTitleWhenCircleGrew === true}>
              <>
                <div
                  data-aos="fade-up-custom"
                  data-aos-duration="400"
                  className="absolute bottom-0 left-0 z-50 flex h-full w-full -translate-x-1/2 items-center justify-center font-display text-4xl"
                >
                  <div>{title}</div>
                </div>
                <div className="group" onClick={handleCircleClick}>
                  <div
                    className={`${
                      colorHighlight ? colorHighlight : ""
                    } zoom-in-animation absolute bottom-3 right-3 z-[1] h-16 w-16 rounded-full opacity-75 group-hover:opacity-100`}
                  ></div>
                  <div className="absolute bottom-3 right-3 z-[100] flex h-16 w-16 animate-pulse  cursor-pointer  items-center justify-center rounded-full">
                    <div
                      className="flex items-center backface-hidden"
                      data-aos="fade-right-custom"
                    >
                      <BsArrowRightShort className="text-4xl text-white" />
                    </div>
                  </div>
                </div>
              </>
            </When>
            <When condition={canvas2DBubbles === true}>
              {MemoBubbles2DCanvas}
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
  handleCircleMouseLeave,
  handleCircleMouseEnter,
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
      <div className={`flip-card `}>
        <div
          className={`flip-card-inner backface-hidden ${
            flipState ? "flip-action" : ""
          }`}
        >
          <div className={`flip-card-front z-[1000] ${flipState ? "z-[-1]" : ""}`}>
            <Card
              {...props}
              handleCircleClick={() => handleFlip()}
              handleCircleMouseEnter={handleCircleMouseEnter}
              handleCircleMouseLeave={handleCircleMouseLeave}
            >
              {props.children}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardBasic {
  styles?: string;
  children: ReactNode;
  colorHighlight: string;
  header?: any;
}

export const CardBasic: FC<CardBasic> = ({
  styles,
  children,
  colorHighlight,
  header,
}) => {
  return (
    <div className="group relative min-h-[400px] w-full transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-[101%]">
      <div className="box-content h-full w-full overflow-hidden rounded-md bg-gradient-to-tl from-gray-800  via-gray-300 to-yellow-400 bg-size-200 bg-pos-100 p-[2px]    transition-all duration-1000 group-hover:bg-pos-0">
        <div
          className={`${
            styles ? styles : ""
          }   relative h-full w-full overflow-hidden rounded-md bg-black`}
        >
          <div className="pointer-events-none absolute  z-30 h-full w-full bg-gray-700 opacity-40 transition-opacity duration-700 group-hover:opacity-0"></div>
          <div className="relative min-h-[48px] w-full bg-gray-700 px-6 py-3 ">
            <div>{header}</div>
          </div>
          <div className="relative mx-6">{children}</div>
        </div>
      </div>
    </div>
  );
};
