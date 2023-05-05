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
}

export const Card: FC<Props> = ({
  title,
  technologies,
  description,
  imageUrl,
  styles,
}) => {
  return (
    <article
      className={`flex-grow ${
        styles ? styles : ""
      } rounded-lg  outline outline-1 outline-gray-800`}
    >
      <div className="relative">
        <div className="z-20">
          <div className="flex gap-4">
            <Image
              className="rounded-lg"
              src={imageUrl ?? ""}
              alt=""
              width={1800}
              height={0}
            ></Image>
            {/* <div className="flex flex-col gap-4 py-4 pr-4">
              <h2 className="text-2xl font-medium">This is the big header</h2>
              <div>
                <h3 className="text-xl font-medium">This is a title</h3>
                <p className="text-sm ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laboriosam, numquam repellat deleniti dolore, est eaque ea
                  possimus quasi quibusdam omnis eveniet, perferendis accusamus
                  ab optio beatae quidem placeat quisquam vitae nobis nam vel
                  iste! Nisi unde ex labore nobis blanditiis minus itaque odio,
                  ut aliquam obcaecati delectus dicta iure omnis numquam neque!
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium">This is a title</h3>
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laboriosam, numquam repellat deleniti dolore, est eaque ea
                  possimus quasi quibusdam omnis eveniet, perferendis accusamus
                  ab
                </p>
              </div>
              <Button>See more</Button>
            </div> */}
            {/* <img src={imageUrl?? ""} alt="" className="w-full h-full"></img> */}
          </div>
          {/* <div className="mt-2 flex gap-1">
            <div className="h-3 w-3 bg-slate-400"></div>
            <div className="h-3 w-3 bg-slate-400"></div>
            <div className="h-3 w-3 bg-slate-400"></div>
          </div> */}
          <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
          </div>
        </div>
        {/* <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-black opacity-40 rounded-lg outline outline-gray-800 outline-1 "></div> */}
      </div>
    </article>
  );
};
