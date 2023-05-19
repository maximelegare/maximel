import React, { type FC } from "react";

import { type CategorySchemaModel } from "~/server/api/validation/category";
import Image from "next/image";
import { BigTitle } from "~/components/core/BigTitle";
import { FlipCard } from "~/components/core/Card";
import { TfiRulerPencil } from "react-icons/tfi";

interface Props {
  data: CategorySchemaModel;
}

export const ProjectsCategory: FC<Props> = ({ data }) => {
  return (
    <div>
      <BigTitle
        styles={data.styles}
        smallTitle="Star of the show"
        title={"Other projects"}
        subtitle={data.headline}
        logoElement={
          <div className="text-2xl">
            <TfiRulerPencil />
          </div>
        }
        logo={{ alt: "", imageUrl: "" }}
      />

      <FlipCard gradiantBorder colorHighlight={"bg-gray-800"} canvas2DBubbles>
        <div className="fill-gray-800 p-10 opacity-60">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-4xl">
              {data.title}
            </div>
            <Image
              src={data.image.imageUrl}
              alt={data.image.alt}
              width={550}
              height={500}
            />
          </div>
        </div>
      </FlipCard>
    </div>
  );
};
