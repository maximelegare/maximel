import React from "react";
import type { FC } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { When } from "react-if";

interface Props {
  title?: string | undefined;
  description?: string | undefined;
  technologies?: string[] | undefined;
  imageUrl: string | undefined;
  styles?: string | undefined;
  gradiantBorder?: boolean;
  clipPath?: string;
}

export const Card: FC<Props> = ({
  title,
  technologies,
  description,
  imageUrl,
  styles,
  clipPath,
  gradiantBorder = false,
}) => {
  return (
    <article
      className={`${styles ? styles : ""} rounded-lg   ${
        gradiantBorder ? "p-1" : ""
      }`}
    >
      <div
        className={`relative flex h-full  w-full items-center justify-center rounded-md ${
          gradiantBorder ? "bg-black" : ""
        } ${clipPath ?? ""}`}
      >
        <div className="absolute z-10 -bottom-72 -right-72 h-[700px] w-[700px] rounded-full gradiant scale-[0.1] hover:scale-100 hover:transition-all hover:duration-1000 hover:ease-in-out"></div>
        <div className="relative">
          <div className="z-20">
            <When condition={imageUrl}>
              <Image
                className="rounded-lg"
                src={imageUrl ?? ""}
                alt=""
                width={1800}
                height={0}
              ></Image>
            </When>
            <div>hello</div>
          </div>
          {/* <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-black opacity-40 rounded-lg outline outline-gray-800 outline-1 "></div> */}
        </div>
      </div>
    </article>
  );
};
