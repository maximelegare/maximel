import React from "react";
import type { FC } from "react";
import Image from "next/image";
import { Button } from "./Button";

interface Props {
  title?: string | undefined;
  description?: string | undefined;
  technologies?: string[] | undefined;
  imageUrl: string | undefined;
  styles?: string | undefined;
  gradiantBorder?: boolean;
}

export const Card: FC<Props> = ({
  title,
  technologies,
  description,
  imageUrl,
  styles,
  gradiantBorder = false,
}) => {
  return (
    <article
      className={`flex-grow ${styles ? styles : ""} rounded-lg   ${
        gradiantBorder ? "p-1" : "outline outline-1 outline-gray-800"
      }`}
    >
      <div
        className={`relative flex h-full  w-full items-center justify-center rounded-md ${
          gradiantBorder ? "bg-black" : ""
        } `}
      >
        <div>
          <div className="z-20">
            <div className="flex gap-4">
              <Image
                className="rounded-lg"
                src={imageUrl ?? ""}
                alt=""
                width={1800}
                height={0}
              ></Image>
            </div>
            <div>
              <h2>{title}</h2>
              <h3>{description}</h3>
            </div>
          </div>
          {/* <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-black opacity-40 rounded-lg outline outline-gray-800 outline-1 "></div> */}
        </div>
      </div>
    </article>
  );
};
