import React, { useState } from "react";

import { Section } from "~/components/core/Section";

import { Card, FlipCard } from "~/components/core/Card";
import { BigTitle } from "~/components/core/BigTitle";
import { GiDeathStar } from "react-icons/gi";
import type { ProjectSchemaModel } from "~/server/api/validation/project";

import Image from "next/image";

import type { FC } from "react";
import { dialogVisibilityAtom } from "atoms/dialogAtom";
import { useRecoilState } from "recoil";

import { useEffect } from "react";

import type { DialogAtom } from "atoms/dialogAtom";
import { Dialog } from "~/components/core/Dialog";
import { BlockContent } from "~/components/core/BlockContent";
import { Media } from "~/components/core/Media";

interface Props {
  data: ProjectSchemaModel;
}

export const Project: FC<Props> = ({ data }) => {
  const [cardIsFlipped, setCardIsFlipped] = useState(false);

  const [dialogVisibility, setDialogVisibility] =
    useRecoilState(dialogVisibilityAtom);

  const handleCardFlip = () => {
    setTimeout(() => {
      setDialogVisibility((oldValues) => {
        const obj = { ...oldValues, [data.slug]: true };
        return obj;
      });
      setCardIsFlipped(true);
    }, 500);
  };

  const handleCloseDialog = () => {
    setDialogVisibility((oldValues) => {
      const obj = { ...oldValues, [data.slug]: false };
      return obj;
    });
    setCardIsFlipped(false);
  };

  useEffect(() => {
    setDialogVisibility((oldValues) => {
      const obj = { ...oldValues, [data.slug]: false };
      return obj;
    });
  }, []);

  const getImagePadding = (imagePadding: string) => {
    switch (imagePadding) {
      case "no-padding-right": {
        return "pr-0";
      }
      case "no-padding-left": {
        return "pl-0";
      }
      case "default": {
        return "pr-4 pl-4";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <BigTitle
          styles={data.styles}
          title={data.title}
          //   icon={<GiDeathStar />}
          subtitle={data.headline}
          logo={data.logo}
        />
      </div>
      <Card imageUrl={data.images[0]?.imageUrl} colorHighlight="" />
      <div className="grid grid-cols-2 grid-rows-1 gap-x-6">
        <BigTitle
          styles={data.styles}
          logo={data.logo}
          title={data.title}
          subtitle={data.overview}
          buttons={data.links}
          paddingBottom="pb-[150px]"
        />
        {data.overviewCard && (
          <FlipCard
            styles="mt-8"
            gradiantBorder
            colorHighlight={data.styles.accent}
            circleHover
            onCardFlip={() => handleCardFlip()}
            isFlipped={cardIsFlipped}
          >
            <div className="flex flex-col items-end justify-end gap-20 ">
              <div className={` flex h-fit gap-2 pr-4 pt-4`}>
                <BlockContent
                  data={data.overviewCard.text}
                  highlightColor={data.styles.textAccent}
                  separatorColor={data.styles.accent}
                  className="text-right"
                />
                <span className="w-[3px]  rounded-full bg-white opacity-70"></span>
              </div>
              <div
                className={`${getImagePadding(
                  data.overviewCard.image.imagePadding
                )}`}
              >
                <Image
                  src={data.overviewCard.image.imageUrl}
                  alt={data.overviewCard.image.alt}
                  width={500}
                  height={0}
                />
              </div>
            </div>
          </FlipCard>
        )}

        <Dialog
          header={
            <div className="flex gap-1">
              {data.links.map((link, idx) => (
                <Media href={link.href} type={link.type} key={idx} />
              ))}
            </div>
          }
          show={dialogVisibility[data.slug] || false}
          onDialogClose={() => handleCloseDialog()}
        >
          <BlockContent
            data={data.body}
            highlightColor={data.styles.textAccent}
            separatorColor={data.styles.accent}
          />
        </Dialog>
      </div>
    </>
  );
};
