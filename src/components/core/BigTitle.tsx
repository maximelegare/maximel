import React from "react";
import type { FC, ReactNode } from "react";

import { GiDeathStar } from "react-icons/gi";

interface Props {
  smallTitle:string;
  title: string;
  icon:ReactNode;
}

export const BigTitle: FC<Props> = ({ smallTitle, title, icon }) => {
  return (
    <div className="flex gap-2">
      <div className="flex  w-20 justify-end">
        <div className="flex h-60 w-fit flex-col items-center gap-2">
          <div className="h-1/4 w-1 rounded-full bg-white"></div>
          <span className="text-3xl">{icon}</span>
          
          <div className="h-3/4 w-1 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="flex h-60 flex-col">
        <div className="h-1/4"></div>
        <div className="relative flex h-12 items-center">
          <h1 className="text-2xl">{smallTitle}</h1>
        </div>
        <div className="h-3/4">
          <h2 className="text-5xl">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
