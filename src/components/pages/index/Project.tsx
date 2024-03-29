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

import { useDialogs } from "~/hooks/useDialogs";

interface Props {
  data: ProjectSchemaModel;
}

export const Project: FC<Props> = ({ data }) => {
  const {
    cardIsFlipped,
    dialogVisibility,
    flipCard,
    closeDialog,
    setDialogSlug,
  } = useDialogs();

  useEffect(() => {
    setDialogSlug(data.slug);
  }, []);


  const getImagePadding = (imagePadding: string) => {
    switch (imagePadding) {
      case "no-padding-right": {
        return "pl-4 pr-0";
      }
      case "no-padding-left": {
        return "pl-0 pr-4";
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
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <BigTitle
          styles={data.styles}
          title={data.title}
          //   icon={<GiDeathStar />}
          subtitle={data.headline}
          logo={data.logo}
        />
      </div>
      <Card imageUrl={data.images[0]?.imageUrl} colorHighlight="" />
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-x-6">
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
          onCardFlip={() => flipCard(data.slug)}
          // handleCircleMouseEnter={() => setCircleIsHovered(true)}
          // handleCircleMouseLeave={() => setCircleIsHovered(false)}
          isFlipped={cardIsFlipped}
          >
            <div className="flex flex-col items-end justify-end gap-20 w-full">
              <div className={` flex h-fit gap-2 pr-4 pt-4 w-2/3`}>
                <BlockContent
                  // color={circleIsHovered? "text-black" : ""}
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
          show={dialogVisibility || false}
          onDialogClose={() => closeDialog(data.slug)}
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
