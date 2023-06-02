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
}

export const BlockContent: FC<Props> = ({
  data,
  highlightColor,
  separatorColor,
  className,
}) => {
  const { locale } = useRouter();

  const lines = data?.[locale as Lang];

  type Size = "h1" | "h2" | "h3" | "h4";

  const getLineStyle = (size: Size) => {
    switch (size as string) {
      case "h1": {
        return "h1 pb-2";
      }
      case "h2": {
        return "h2 pb-3";
      }
      case "h3": {
        return "h3 pb-3";
      }
      case "p": {
        return "p pb-3";
      }
      default: {
        return "text-sm";
      }
    }
  };

  const createNbspElementText = (text: string) => {
    const words = text.match(/[^ ]+/g);
    console.log(words)
    return (
      <>
        {words
          ? words?.map((word, idx) => (
              <span key={idx} className="inline">
                {word}
                {idx === words.length - 1 ? (
                  <span className="inline"></span>
                ) : (
                  <span className="inline">&nbsp;</span>
                )}
              </span>
            ))
          : text}
      </>
    );
  };

  const getTextContentWithMarkup = (marks: string[], text: string) => {
    const marksToAdd: string[] = [];

    let nbspElements;
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
        case "nbsp": {
          nbspElements = createNbspElementText(text);
        }
      }
    });

    const classes = marksToAdd.join().replaceAll(",", " ");

    return (
      <p className={`inline ${classes}`}>
        {nbspElements !== undefined ? nbspElements : text}&thinsp;
      </p>
    );
  };

  const getHtmlElement = (
    el: { text: string; marks: string[] },
    idx: number
  ) => {
    switch (el.text) {
      case "//": {
        return <Separator color={separatorColor} />;
      }
      default: {
        return (
          <p key={idx} className="inline">
            {getTextContentWithMarkup(el.marks, el.text)}
          </p>
        );
      }
    }
  };

  return (
    <>
      <div className={className}>
        {lines?.map((el, idx) => (
          <div key={idx} className={getLineStyle(el.style as Size)}>
            {el.children &&
              el.children.map((el, idx) => getHtmlElement(el, idx))}
            {el.imageUrl && (
              <Image src={el.imageUrl} alt="" width={200} height={200} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
