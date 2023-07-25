import React from "react";
import type { FC, ReactNode } from "react";
import type { ReactElement } from "react";
import { BlockContent } from "./BlockContent";
import { Media } from "./Media";
import Image from "next/image";
import type {
  BlockContentModel,
  LinksModel,
} from "~/server/api/validation/project";

import { When } from "react-if";

import { If, Then } from "react-if";

interface Props {
  title?: string;
  paddingBottom?: string;
  subtitle?: BlockContentModel;
  subtitleString?: string;
  buttons?: LinksModel;
  logoElement?: ReactElement;
  dotHighlight?: string;
  marginTop?: boolean;
  logo?: {
    alt: string;
    imageUrl: string;
  };
  styles: {
    textAccent: string;
    accent: string;
    titlePosition: string;
  };
}

export const BigTitle: FC<Props> = ({
  logoElement,
  title,
  paddingBottom = "pb-10",
  subtitle,
  buttons,
  logo,
  styles,
  dotHighlight,
  subtitleString,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <TitleTopLines styles={styles} dotHighlight={dotHighlight} />
        <div className="flex gap-6">
          <div className="flex">
            <div className="flex w-7 flex-col items-center gap-6">
              {logoElement ? (
                logoElement
              ) : (
                <>
                  {logo && (
                    <Image
                      src={logo.imageUrl}
                      alt={logo.alt}
                      width={1000}
                      height={1000}
                    />
                  )}
                </>
              )}
              <div
                className={`to-b-${styles.accent}-reverse h-full  w-[3px]`}
              ></div>
            </div>
          </div>
          <div>
            <div className={paddingBottom}>
              {/* <h2
                data-aos="fade-left-custom"
                data-aos-duration="300"
                data-aos-easing="ease-out"
                className="text-2xl"
              >
                {smallTitle}
              </h2>
              <h4 className="mt-6 justify-self-stretch">{text}</h4> */}
              <h4
                // data-aos="fade-left-custom"
                // data-aos-duration="300"
                // data-aos-easing="ease-out"
                className="mb-3 opacity-60"
              >
                {title}
              </h4>
              <BlockContent
                separatorColor={styles.accent}
                data={subtitle}
                highlightColor={styles.textAccent}
              />
              <h2>{subtitleString}</h2>
              <div className="mt-6 flex gap-2">
                {buttons?.map(({ href, type }, idx) => (
                  <div key={idx}>
                    <Media href={href} type={type} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TitleTopLines = ({
  styles,
  dotHighlight,
  topWithDot = false,
}: {
  styles?: {
    textAccent: string;
    accent: string;
    titlePosition: string;
  };
  dotHighlight?: string;
  topWithDot?: boolean;
}) => {
  return (
    <>
      <div className="flex gap-6">
        <div className="relative flex w-7 flex-col">
          <>
            <If condition={styles?.titlePosition === "default" && topWithDot}>
              <Then>
                <div className="flex justify-center ">
                  <div
                    className={`z-40 h-4 w-4 rounded-full  
               ${dotHighlight ? `${dotHighlight}` : ""}
               `}
                  ></div>
                </div>
              </Then>
            </If>
          </>
          <div
            className={`${
              styles?.titlePosition === "right" ? "mt-0 lg:mt-[600px]" : ""
            } ${
              styles?.titlePosition === "left" ? "mt-0 lg:mt-[100px]" : ""
            } flex justify-center`}
          >
            <If condition={styles?.titlePosition === "right"}>
              <Then>
                <>
                  <div
                    className={`absolute z-[-1] hidden lg:block ${
                      styles?.accent ? `to-b-${styles?.accent}-reverse` : ""
                    }  left-0 h-[50px] w-[3px] origin-top translate-x-2 rotate-90`}
                  ></div>
                  <div
                    className={`absolute z-40 hidden h-4 w-4 -translate-y-1/2 rounded-full lg:block  
               ${dotHighlight ? `${dotHighlight}` : ""}
               `}
                  ></div>
            
                </>
              </Then>
            </If>
            <If condition={styles?.titlePosition === "left"}>
              <Then>
                <>
                  <div
                    className={`absolute  hidden lg:block ${
                      styles?.accent ? `to-b-${styles?.accent}-reverse` : ""
                    } left-0 h-[700px] w-[3px]  origin-top  translate-x-2 -rotate-90 pt-5`}
                  ></div>
                  <div
                    className={`absolute z-40 hidden h-4 w-4 -translate-y-1/2 rounded-full lg:block  
               ${dotHighlight ? `${dotHighlight}` : ""}
               `}
                  ></div>
               
                </>
              </Then>
            </If>
            <div
              className={`${
                styles?.accent ? `to-b-${styles?.accent}` : ""
              } h-[100px] w-[3px]`}
            ></div>
          </div>
        </div>
        <If condition={topWithDot}>
          <Then>
            <h3 className="h-fit -translate-y-1/3">Explore my Projects</h3>
          </Then>
        </If>
      </div>
    </>
  );
};
