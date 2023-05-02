import type { ReactElement, FC, ReactNode } from "react";

type Props = {
  children: ReactElement;
  styles?: string;
  noContainerElements?: ReactNode;
};

export const Section: FC<Props> = ({
  children,
  styles,
  noContainerElements,
}) => {
  return (
    <section
      className={`flex min-h-screen justify-center ${styles ? styles : ""}`}
    >
      <div className="container z-30">
        {children}
      </div>
      <div className="absolute left-0 top-0 z-20 h-full w-full">
        {noContainerElements}
      </div>
    </section>
  );
};
