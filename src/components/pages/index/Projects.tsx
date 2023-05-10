/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from "react";
import { Section } from "~/components/core/Section";

import { Card } from "~/components/core/Card";
import { BigTitle } from "~/components/core/BigTitle";
import { GiDeathStar } from "react-icons/gi";

import { api } from "~/utils/api";

import { useRouter } from "next/router";

import { Button } from "~/components/core/Button";
import { AiOutlineGithub } from "react-icons/ai";
import {BsGlobe} from "react-icons/bs"


export const Projects = () => {
  const { locale } = useRouter();

  const { data } = api.project.allProjects.useQuery({ lang:"fr" });

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

        <div className="grid grid-cols-2 grid-rows-4 gap-x-4">
          <Card
            imageUrl={data.res[0]?.images[0]?.imageUrl}
            styles="col-span-2"
          />
          <BigTitle
            smallTitle="Star of the show"
            title="One music player to rule them all"
            icon={<GiDeathStar />}
            buttons={starOfShowButtons}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui
            praesentium harum porro animi, tenetur est consequuntur, earum
            odio vel laudantium officiis corporis amet deserunt ad ipsum
            molestias nulla vitae labore facilis, blanditiis non. Harum fugiat
            consectetur non laboriosam possimus."
          />
          <Card imageUrl={""} styles="gradiant mt-8" gradiantBorder />
          <Card imageUrl="/maximel/public/assets/img/hodei.png" />
          <BigTitle
            smallTitle="Star of the show"
            title="One music player to rule them all"
            icon={<GiDeathStar />}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui
            praesentium harum porro animi, tenetur est consequuntur, earum
            odio vel laudantium officiis corporis amet deserunt ad ipsum
            molestias nulla vitae labore facilis, blanditiis non. Harum fugiat
            consectetur non laboriosam possimus."
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
