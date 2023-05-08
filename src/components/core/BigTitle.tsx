import React from "react";
import type { FC, ReactNode } from "react";
import type { ReactElement } from "react";

interface Props {
  smallTitle: string;
  title: string;
  icon: ReactNode;
  text?: string;
  buttons?: ReactElement[];
}

export const BigTitle: FC<Props> = ({
  smallTitle,
  title,
  icon,
  text,
  buttons,
}) => {
  return (
    <div className="ml-4">
      <div className="flex flex-col gap-6">
        <div className="flex">
          <div className="flex w-3 flex-col items-center gap-2">
            <div className="h-[100px] w-[3px]  bg-white"></div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex">
            <div className="flex w-3 flex-col items-center gap-6">
              <span className="text-3xl">{icon}</span>

              <div className="h-full w-[3px]  bg-white"></div>
            </div>
          </div>
          <div>
            <div className="pb-[200px]">
              <h2
                data-aos="fade-left-custom"
                data-aos-duration="300"
                data-aos-easing="ease-out"
                className="text-2xl"
              >
                {smallTitle}
              </h2>
              <h1
                data-aos="fade-left-custom"
                data-aos-duration="300"
                data-aos-easing="ease-out"
                className="mt-2  text-5xl"
              >
                {title}
              </h1>
              <h4 className="mt-6 justify-self-stretch">{text}</h4>
              <div className="flex gap-2 mt-6">{buttons?.map((el, idx) => (
                <div key={idx}>
                  {el}
                </div>))}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
