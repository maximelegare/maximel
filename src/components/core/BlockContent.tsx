/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { type FC } from "react";

import type { BlockContentModel, Lang  } from "~/server/api/validation/project";

import { useRouter } from "next/router";

interface Props {
  data?: BlockContentModel;
}

export const BlockContent: FC<Props> = ({ data }) => {
  const { locale } = useRouter();

  
  let lines;
  if (locale && data?.text[locale as Lang]) {
    lines = data.text[locale as Lang];
  }
 

  type Size = "h1"|"h2"|"h3"|"h4"
  

  const getLineStyle = (size: Size) => {
    switch (size as string) {
      case "h1": {
        return "text-base font-semibold";
      }
      case "h4": {
        return "text-lg font-semibold";
      }
      default: {
        return "text-sm";
      }
    }
  };

  return (
    <>
      <div>
        {lines?.map((el: { style: string; }, idx: React.Key | null | undefined) => (
          <div key={idx} className={getLineStyle(el.style as Size)}>hello</div>
        ))}
      </div>
    </>
  );
};
