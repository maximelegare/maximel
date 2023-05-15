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
        className={`relative z-[1] flex h-full  w-full items-center justify-center rounded-md ${
          gradiantBorder ? "bg-black" : ""
        } ${clipPath ?? ""}`}
      >
        <div className="relative block h-full w-full overflow-hidden">
          <div className=" gradiant absolute bottom-3 right-3 z-[1] h-20 w-20 rounded-full transition-all duration-700 ease-in-out hover:scale-[25] "></div>
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
      </div>
    </article>
  );
};

<div className="overflow-hidden">
  <a
    href="#"
    className="ag-courses-item_link relative block overflow-hidden bg-[#121212] px-5 py-8"
  >
    <div className="absolute -right-20 -top-20 z-[1] h-32 w-32 rounded-full bg-[#f9b234] transition-all duration-500 ease-in-out hover:scale-[25] "></div>

    <div className="relative z-[2]">
      UI/Web&amp;Graph design for teenagers 11-17&#160;years old
    </div>

    <div className="relative z-[2]">
      Start:
      <span className="relative z-[2]">04.11.2022</span>
    </div>
  </a>
</div>;
