/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from "react";
import { Section } from "~/components/core/Section";

import { Card, FlipCard } from "~/components/core/Card";
import { BigTitle } from "~/components/core/BigTitle";
import { GiDeathStar } from "react-icons/gi";

import { api } from "~/utils/api";

import { useRouter } from "next/router";

import { Button } from "~/components/core/Button";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { Media } from "~/components/core/Media";

export const Projects = () => {
  const { locale } = useRouter();

  const { data } = api.project.allProjects.useQuery({ lang: "fr" });

  if (!data?.res) return <div>no data</div>;

  const starOfShowButtons = [
    <Button key={0} variant="icon">
      <AiOutlineGithub />
    </Button>,
    <Button key={1} variant="icon">
      <BsGlobe />
    </Button>,
  ];

  return (
    <Section styles="bg-black" bluredBackground>
      <>
        <BigTitle
          smallTitle="Star of the show"
          title="One music player to rule them all"
          icon={<GiDeathStar />}
        />

        <Card imageUrl={data.res[0]?.images[0]?.imageUrl} />
        <div className="grid grid-cols-2 grid-rows-4 gap-x-4">
          <BigTitle
            smallTitle="Star of the show"
            title={data.res[0]?.title}
            icon={<GiDeathStar />}
            subtitle={data.res[0]?.subtitle}
            buttons={data.res[0]?.links}
          />
          <FlipCard imageUrl={""} styles="gradiant mt-8" gradiantBorder circleHover/>
          <Card imageUrl="/maximel/public/assets/img/hodei.png" />
          <BigTitle
            smallTitle="Star of the show"
            title="One music player to rule them all"
            icon={<GiDeathStar />}
            subtitle={data.res[0]?.subtitle}
          />
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
    </Section>
  );
};
