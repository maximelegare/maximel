import type { ReactElement, FC, ReactNode } from "react";

import { If, Then, Else } from "react-if";

type Props = {
  children: ReactElement;
  styles?: string;
  // noContainerElements?: ReactNode;
  bluredBackground?: boolean;
  layout?: "top" | "default" | "bottom";
  id?: string;
};

export const Section: FC<Props> = ({
  children,
  styles,
  // noContainerElements,
  bluredBackground = false,
  layout = "default",
  id,
}) => {
  return (
    <>
      <If condition={layout === "default"}>
        <Then>
          <section
            className={`relative flex justify-center ${styles ? styles : ""}`}
            id={id}
          >
            <div className="container relative">
              <div className="relative z-40 px-6">{children}</div>
              <div className="container absolute left-0 top-0 z-20 h-full w-full">
                <div className="h-full w-full border-x-[1px] border-gray-500 bg-gray-900"></div>
              </div>
            </div>
          </section>
        </Then>
      </If>
      <If condition={layout === "top"}>
        <Then>
          <section
            className={`relative  flex justify-center ${styles ? styles : ""}`}
            id={id}
          >
            <div className="container relative  h-fit">
              <div className="relative z-40 px-6">{children}</div>
              <div className="container absolute left-0 top-0 z-20 h-full w-full">
                <div
                  className={`h-full w-full rounded-t-2xl border-x-[1px] border-gray-500 ${
                    bluredBackground ? "backdrop-blur-[2px]" : ""
                  } bg-gray-900`}
                ></div>
              </div>
            </div>
          </section>
        </Then>
      </If>
      <If condition={layout === "bottom"}>
        <Then>
        <section
            className={`relative  flex justify-center ${styles ? styles : ""}`}
            id={id}
          >
            <div className="container relative  h-48">
              <div className="relative z-40 px-6">{children}</div>
              <div className="container absolute left-0 top-0 z-20 h-full w-full">
                <div
                  className={`h-36 w-full rounded-b-2xl border-x-[1px] border-gray-500  ${
                    bluredBackground ? "backdrop-blur-[2px]" : ""
                  } bg-gray-900`}
                ></div>
              </div>
            </div>
          </section>
        </Then>
      </If>
    </>
  );
};
