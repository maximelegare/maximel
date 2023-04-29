import type { ReactElement, FC } from "react";

type Props = {
  children: ReactElement;
  styles?: string;
  noContainerElement?: ReactElement;
};

export const Section: FC<Props> = ({
  children,
  styles,
  noContainerElement,
}) => {
  return (
    <section
      className={`flex min-h-screen justify-center ${styles ? styles : ""}`}
    >
      <div className="container">{children}</div>
      {noContainerElement}
    </section>
  );
};
