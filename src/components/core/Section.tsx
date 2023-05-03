import type { ReactElement, FC, ReactNode } from "react";

import { If, Then, Else } from "react-if";

type Props = {
  children: ReactElement;
  styles?: string;
  noContainerElements?: ReactNode;
  bluredBackground?: boolean;
};

export const Section: FC<Props> = ({
  children,
  styles,
  noContainerElements,
  bluredBackground = false,
}) => {
  return (
    <section className={`relative flex justify-center ${styles ? styles : ""}`}>
      <div className="container relative  min-h-screen">
        <div className="relative z-30 p-4">{children}</div>
        <div
          className={
            bluredBackground
              ? "container absolute left-0 top-0 z-20 h-full w-full"
              : ""
          }
        >
          <div className=" h-full w-full bg-black opacity-60 blur-sm"></div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-10 h-full w-full">
        {noContainerElements}
      </div>
    </section>
  );
};
