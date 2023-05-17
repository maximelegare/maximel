import React from "react";

import { Section } from "~/components/core/Section";

import { Card, FlipCard } from "~/components/core/Card";
import { BigTitle } from "~/components/core/BigTitle";
import { GiDeathStar } from "react-icons/gi";
import type { ProjectSchemaModel } from "~/server/api/validation/project";

import Image from "next/image";

import type { FC } from "react";

interface Props {
  data: ProjectSchemaModel;
}

export const Project: FC<Props> = ({ data }) => {
  return (
    
      <>
        <div className="grid grid-cols-2">
          <BigTitle
            styles={data.styles}
            smallTitle="Star of the show"
            title={data.title}
            //   icon={<GiDeathStar />}
            subtitle={data.headline}
            logo={data.logo}
          />
        </div>
        <Card imageUrl={data.images[0]?.imageUrl} />
        <div className="grid grid-cols-2 grid-rows-1 gap-x-4">
          <BigTitle
            styles={data.styles}
            logo={data.logo}
            smallTitle="Star of the show"
            title={data.title}
            subtitle={data.overview}
            buttons={data.links}
            paddingBottom="pb-[150px]"
          />
          <FlipCard
            styles="mt-8"
            gradiantBorder
            colorHighlight={data.styles.accent}
            circleHover 
          >
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
          </FlipCard>
        

          {/* <Card imageUrl={""} /> */}

          {/* {data.res[0]?.images.map((img, idx) => {
            console.log(img.bigImage);
            return (
              <div key={idx}>
              <Card
              styles="col-span-2"
              imageUrl={img.imageUrl}
              />
              </div>
              );
            })} */}

          {/* <Card imageUrl="/maximel/public/assets/img/hodei.png" /> */}
        </div>
        {/* <div className="grid grid-cols-2 gap-4">
          <Card styles="col-span-2" imageUrl="/maximel/public/assets/img/hodei.png" />
          <Card imageUrl="/maximel/public/assets/img/hodei.png" />
          <Card imageUrl="/maximel/public/assets/img/hodei.png" />
        </div> */}
      </>
  );
};
