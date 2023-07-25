import React, { ReactElement, type FC } from "react";

interface Props {
  children: ReactElement;
}

export const CardGrid: FC<Props> = ({ children }) => {
  return <div className="flex flex-wrap justify-between">{children}</div>;
};
