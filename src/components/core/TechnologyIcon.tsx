
import React, { type FC } from "react";

import { If, Then, Else } from "react-if";

import Image from "next/image";
type Variant = "local" | undefined;

interface Props {
  variant?: Variant;
  localIconName?: string;
  color:string;
  tech?:{
    imageUrl:string;
    title:string
  }
}

const getLocalIcon = (localIconName = "react") => {
  switch (localIconName) {
    case "react": {
      // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
      const { DiReact } = require("react-icons/di");
      return <DiReact />;
    }
  }
};

export const TechnologyIcon: FC<Props> = ({ variant, localIconName, color, tech }) => {
  return (
    <>
      <If condition={variant === "local"}>
        <Then>
          <div className={`text-2xl opacity-60 text-${color}`}>{getLocalIcon(localIconName)}</div>
        </Then>
        <Else>
          { tech && <Image className="opacity-60" width={15} height={15} src={tech.imageUrl} alt={tech.title}/>}
        </Else>
      </If>
    </>
  );
};
