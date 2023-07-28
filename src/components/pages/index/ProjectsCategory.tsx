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
import Gallery from "react-photo-album";

import ReactSvg from "../../../../public/assets/SVG/react.svg";

import { photos } from "../../../../public/assets/p/images";
import { SimonsGame } from "~/components/games/SimonsGame";
import { CardGrid } from "~/components/core/CardGrid";
import { TechnologyIcon } from "~/components/core/TechnologyIcon";
import { ProjectsGrid } from "./ProjectsGrid";
import { useDialogs } from "~/hooks/useDialogs";
import { useTranslation } from "next-i18next";


interface Props {
  data: CategorySchemaModel;
}

export const ProjectsCategory: FC<Props> = ({ data }) => {
  const {
    cardIsFlipped,
    dialogVisibility,
    flipCard,
    closeDialog,
    setDialogSlug,
  } = useDialogs();
  const { titlePosition } = data.styles;

  useEffect(() => {
    setDialogSlug(data.slug);
  }, []);

  const { t } = useTranslation("common")


  return (
    <>
      <div>
        <BigTitle
          styles={data.styles}
          title={"Other stuff"}
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
          messageUnderneath={t("index.categories.click-the-bubble") ?? ""}
          gradiantBorder
          textHiglight={data.styles.textAccent}
          colorHighlight={data.styles.accent}
          bubbleColor={data.styles.bubbleColor}
          canvas2DBubbles
          onCardFlip={() => flipCard(data.slug)}
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
          header={data.title}
          show={dialogVisibility || false}
          onDialogClose={() => closeDialog(data.slug)}
        >
          {data.photographs ? (
            <Gallery layout="rows" photos={data.photographs} />
          ) : (
            // <CardGrid>
            //   <>
            //     <CardBasic colorHighlight="">hello</CardBasic>
            //     <CardBasic colorHighlight="">hello</CardBasic>
            //     <CardBasic
            //       tech={
            //         <TechnologyIcon color="white" variant="local"/>
            //       }
            //       colorHighlight=""
            //     >
            //       <SimonsGame />
            //     </CardBasic>
            //     <CardBasic colorHighlight="">hello</CardBasic>
            //     <CardBasic colorHighlight="">hello</CardBasic>
            //   </>
            // </CardGrid>
            <ProjectsGrid />
          )}
        </Dialog>
      }
    </>
  );
};
