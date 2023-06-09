import type { ReactElement, FC, ReactNode } from "react";

import { If, Then, Else } from "react-if";

type Props = {
  children: ReactElement;
  styles?: string;
  // noContainerElements?: ReactNode;
  bluredBackground?: boolean;
  topSection?: boolean;
};

export const Section: FC<Props> = ({
  children,
  styles,
  // noContainerElements,
  bluredBackground = false,
  topSection = false,
}) => {
  return (
    <>
      <If condition={!topSection}>
        <Then>
          <section
            className={`relative flex justify-center ${styles ? styles : ""}`}
          >
            <div className="container relative  min-h-screen">
              <div className="relative z-40 px-6">{children}</div>
              <div className="container absolute left-0 top-0 z-20 h-full w-full">
                <div className="h-full w-full border-x-[1px] border-gray-500 bg-gray-900"></div>
              </div>
            </div>
          </section>
        </Then>
        <Else>
          <section
            className={`relative  flex justify-center ${styles ? styles : ""}`}
          >
            <div className="container relative  h-fit">
              <div className="relative z-40 px-6">{children}</div>
              <div className="container absolute left-0 top-0 z-20 h-full w-full">
                <div
                  className={`h-full w-full border-x-[1px] border-gray-500 ${
                    bluredBackground ? "backdrop-blur-[2px]" : ""
                  } bg-gray-900 ${topSection ? "rounded-t-2xl" : ""}`}
                ></div>
              </div>
            </div>
          </section>
        </Else>
      </If>
    </>
  );
};
