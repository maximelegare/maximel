import React, { ReactNode } from "react";
import type { FC } from "react";

interface Props {
  show: boolean;
  children: ReactNode;
}

export const Dialog: FC<Props> = ({ show, children }) => {
  const filledArray = new Array(100).fill("hello");

  return (
    <>
      {show && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-50"
          data-aos="fade-up-custom"
          data-aos-duration="600"
        >
          <div className="fixed left-1/2 top-1/2 h-3/4 w-2/3 -translate-x-1/2 -translate-y-1/2 overflow-auto bg-cyan-900">
            <div className="">
              {filledArray.map((el: string, idx) => (
                <div key={idx} className="text-blue-400">
                  hello
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
