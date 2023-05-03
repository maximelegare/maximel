import React from "react";
import type { FC } from "react";
import Image from "next/image";

interface Props {
  title?: string;
  description?: string;
  technologies?: string[];
  imageUrl: string;
  styles?: string;
}

export const Card: FC<Props> = ({
  title,
  technologies,
  description,
  imageUrl,
  styles,
}) => {
  return (
    <article className={`flex-grow ${styles ? styles : ""}`}>
      <div className="relative h-96">
        <div className="z-20 p-5">
          <div>
            {/* <Image src={imageUrl} alt="" width={800} height={800}></Image> */}
            {/* <img src={imageUrl} alt="" className="w-full h-full"></img> */}
          </div>
          <div className="mt-2 flex gap-1">
            <div className="h-3 w-3 bg-slate-400"></div>
            <div className="h-3 w-3 bg-slate-400"></div>
            <div className="h-3 w-3 bg-slate-400"></div>
          </div>
          <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-black opacity-40 rounded-lg outline outline-gray-800 outline-1 "></div>
      </div>
    </article>
  );
};
