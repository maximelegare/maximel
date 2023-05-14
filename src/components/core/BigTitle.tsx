import React from "react";
import type { FC, ReactNode } from "react";
import type { ReactElement } from "react";
import { BlockContent } from "./BlockContent";
import { Media } from "./Media";

import type {
  BlockContentModel,
  LinksModel,
} from "~/server/api/validation/project";

interface Props {
  smallTitle: string;
  title?: string;
  icon: ReactNode;
  subtitle?: BlockContentModel;
  buttons?: LinksModel;
}

export const BigTitle: FC<Props> = ({
  smallTitle,
  title,
  icon,
  subtitle,
  buttons,
}) => {
  return (
    <div className="ml-4">
      <div className="flex flex-col gap-6">
        <div className="flex">
          <div className="flex w-3 flex-col items-center gap-2">
            <div className="to-b-gradiant h-[100px] w-[3px]"></div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex">
            <div className="flex w-3 flex-col items-center gap-6">
              <span className="text-3xl">{icon}</span>

              <div className="to-b-gradiant-reverse h-full  w-[3px]"></div>
            </div>
          </div>
          <div>
            <div className="pb-[200px]">
              {/* <h2
                data-aos="fade-left-custom"
                data-aos-duration="300"
                data-aos-easing="ease-out"
                className="text-2xl"
              >
                {smallTitle}
              </h2>
              <h4 className="mt-6 justify-self-stretch">{text}</h4> */}
              <h1
                data-aos="fade-left-custom"
                data-aos-duration="300"
                data-aos-easing="ease-out"
                className="mb-1 text-lg font-medium"
              >
                {title}
              </h1>
              <BlockContent data={subtitle} />
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
