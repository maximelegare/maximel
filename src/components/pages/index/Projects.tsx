/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from "react";
import { Section } from "~/components/core/Section";

import { Card } from "~/components/core/Card";
import { BigTitle } from "~/components/core/BigTitle";
import { GiDeathStar } from "react-icons/gi";

import { api } from "~/utils/api";

import { useRouter } from "next/router";

export const Projects = () => {
  const { locale } = useRouter();

  const { data } = api.project.allProjects.useQuery({ lang: locale ?? "" });

  if(!data?.res) return <div>no data</div>

  return (
    <Section styles="gradiant " bluredBackground>
      <>
        <BigTitle
          smallTitle="Star of the show"
          title="One music player to rule them all"
          icon={<GiDeathStar />}
        />
        <div className="grid grid-cols-2 gap-4">
          <Card
            styles="col-span-2"
            imageUrl="/maximel/public/assets/img/hodei.png"
          />
          <Card imageUrl={data?.res[0]?.images[0]?.imageUrl ?? ""} />
          <Card imageUrl="/maximel/public/assets/img/hodei.png" />
        </div>
        <BigTitle
          smallTitle="Star of the show"
          title="One music player to rule them all"
          icon={<GiDeathStar />}
        />
        {/* <div className="grid grid-cols-2 gap-4">
          <Card styles="col-span-2" imageUrl="/maximel/public/assets/img/hodei.png" />
          <Card imageUrl="/maximel/public/assets/img/hodei.png" />
          <Card imageUrl="/maximel/public/assets/img/hodei.png" />
        </div> */}
        <Card imageUrl="/maximel/public/assets/img/hodei.png" />
      </>
    </Section>
  );
};
