/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { type FC } from "react";

import { Separator } from "./Separator";

import type { BlockContentModel } from "~/server/api/validation/project";
import type { Lang } from "db/schemas/locale/supportedLanguages";

import { If, Then, Else } from "react-if";

import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  data?: BlockContentModel;
  highlightColor: string;
  separatorColor: string;
  className?: string;
  color?: string;
}

export const BlockContent: FC<Props> = ({
  data,
  highlightColor,
  separatorColor,
  className,
  color,
}) => {
  const { locale } = useRouter();

  const lines = data?.[locale as Lang];

  type Size = "h1" | "h2" | "h3" | "h4";

  const getLineStyle = (size: Size) => {
    switch (size as string) {
      case "h1": {
        return `h1 ${color ?? ""}`;
      }
      case "h2": {
        return `h2  ${color ?? ""}`;
      }
      case "h3": {
        return `h3  ${color ?? ""}`;
      }
      case "normal": {
        return `p ${color ?? ""}`;
      }
      default: {
        return `text-sm ${color ?? ""}`;
      }
    }
  };

  const getTextContentWithMarkup = (marks: string[], text: string) => {
    const marksToAdd: string[] = [];

    let element;
    marks.forEach((mark) => {
      switch (mark) {
        case "highlight": {
          marksToAdd.push(`${highlightColor}`);
          break;
        }
        case "strong": {
          marksToAdd.push("font-bold");
          break;
        }
        case "opacity-70": {
          marksToAdd.push("opacity-70");
          break;
        }
        case "em": {
          marksToAdd.push("italic");
          break;
        }
        case "nbsp": {
          if (text === " ") {
            element = <span className="whitespace-nowrap">&thinsp;</span>;
          }
        }
      }
    });

    const classes = marksToAdd.join().replaceAll(",", " ");

    return (
      <div className={`inline ${classes}`}>
        {element !== undefined ? element : <>{text}&thinsp;</>}
      </div>
    );
  };

  const getHtmlElement = (
    el: { text: string; marks: string[] },
  ) => {
    switch (el.text) {
      case "//": {
        return <Separator color={separatorColor} />;
      }
      default: {
        return (
          <div  className="inline">
            {getTextContentWithMarkup(el.marks, el.text)}
          </div>
        );
      }
    }
  };

  return (
    <>
      <div className={className}>
        {lines?.map((el, idx) => (
          <div key={idx}
           className={getLineStyle(el.style as Size)}
           >
            {el.children &&
              el.children.map((el, idx) => <div className="inline" key={idx}>{getHtmlElement(el)}</div> )}
            {el.imageUrl && (
              <Image src={el.imageUrl} alt="" width={200} height={200} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
