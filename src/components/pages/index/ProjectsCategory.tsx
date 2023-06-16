/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { type FC, useState, useEffect } from "react";

import { type CategorySchemaModel } from "~/server/api/validation/category";
import Image from "next/image";
import { BigTitle } from "~/components/core/BigTitle";
import { CardBasic, FlipCard } from "~/components/core/Card";
import { TfiRulerPencil } from "react-icons/tfi";
import { Dialog } from "~/components/core/Dialog";
import { dialogVisibilityAtom } from "atoms/dialogAtom";
import { useRecoilState } from "recoil";
import Gallery from "react-photo-gallery";

import { photos } from "../../../../public/assets/p/images";
import { SimonsGame } from "~/components/games/SimonsGame";
import { CardGrid } from "~/components/core/CardGrid";

interface Props {
  data: CategorySchemaModel;
}

export const ProjectsCategory: FC<Props> = ({ data }) => {
  const { titlePosition } = data.styles;
  const [cardIsFlipped, setCardIsFlipped] = useState(false);
  // const [circleIsHovered, setCircleIsHovered] = useState(false)

  const [dialogVisibility, setDialogVisibility] =
    useRecoilState(dialogVisibilityAtom);

  const handleCardFlip = () => {
    setTimeout(() => {
      setDialogVisibility((oldValues) => {
        const obj = { ...oldValues, [data.slug]: true };
        return obj;
      });
      setCardIsFlipped(true);
    }, 400);
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

  return (
    <>
      <div
        className={
          titlePosition === "right" || titlePosition === "left"
            ? "mt-[600px]"
            : ""
        }
      >
        <BigTitle
          styles={data.styles}
          title={"Other projects"}
          subtitle={data.headline}
          dotHighlight={data.styles.accent}
          logoElement={
            <div className="text-2xl">
              <TfiRulerPencil className="" />
            </div>
          }
          logo={{ alt: "", imageUrl: "" }}
        />

        <FlipCard
          messageUnderneath="CLICK THE BUBBLE!"
          gradiantBorder
          textHiglight={data.styles.textAccent}
          colorHighlight={data.styles.accent}
          bubbleColor={data.styles.bubbleColor}
          canvas2DBubbles
          onCardFlip={() => handleCardFlip()}
          title={data.title}
          isFlipped={cardIsFlipped}
        >
          <div className="fill-gray-700 p-10 opacity-60">
            <div className="relative h-auto w-full">
              {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-4xl">
              {data.title}
            </div> */}

              <Image
                src={data.image.imageUrl}
                alt={data.image.alt}
                className="relative z-10 h-auto w-full object-cover"
                width={0}
                height={0}
              />
            </div>
          </div>
        </FlipCard>
      </div>

      {
        <Dialog
          header="hello"
          show={dialogVisibility[data.slug] || false}
          onDialogClose={() => handleCloseDialog()}
        >
          {data.photographs ? (
            <Gallery photos={data.photographs} />
          ) : (
            <CardGrid>
              <>
                <CardBasic colorHighlight="">hello</CardBasic>
                <CardBasic colorHighlight="">hello</CardBasic>
                <CardBasic colorHighlight="">
                    <SimonsGame />
                </CardBasic>
                <CardBasic colorHighlight="">hello</CardBasic>
                <CardBasic colorHighlight="">hello</CardBasic>
              </>
            </CardGrid>
          )}
        </Dialog>
      }
    </>
  );
};
