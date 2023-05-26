import React, { type FC } from "react";

import { type CategorySchemaModel } from "~/server/api/validation/category";
import Image from "next/image";
import { BigTitle } from "~/components/core/BigTitle";
import { Card, FlipCard } from "~/components/core/Card";
import { TfiRulerPencil } from "react-icons/tfi";
import { Bubbles2DCanvas } from "~/components/canvas/Bubble2DCanvas";

interface Props {
  data: CategorySchemaModel;
}

export const ProjectsCategory: FC<Props> = ({ data }) => {
  const { marginTop } = data.styles;

  return (
    <div className={marginTop ? "mt-[600px]" : ""}>
      <BigTitle
        styles={data.styles}
        smallTitle="Star of the show"
        title={"Other projects"}
        subtitle={data.headline}
        dotHighlight={data.styles.accent}
        marginTop={marginTop}
        logoElement={
          <div className="text-2xl">
            <TfiRulerPencil />
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
      >
        <div className="fill-gray-800 p-10 opacity-60">
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
  );
};
