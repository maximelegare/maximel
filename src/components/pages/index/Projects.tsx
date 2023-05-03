import React from "react";
import { Section } from "~/components/core/Section";

import { Card } from "~/components/core/Card";
import { BigTitle } from "~/components/core/BigTitle";
import { GiDeathStar } from "react-icons/gi";

export const Projects = () => {
  return (
    <Section styles="gradiant " bluredBackground>
      <>
        <BigTitle
          smallTitle="Star of the show"
          title="One music player to rule them all"
          icon={<GiDeathStar />}
        />
        <div className="grid grid-cols-2 gap-4">
          <Card styles="col-span-2" imageUrl="/maximel/public/assets/img/hodei.png" />
          <Card imageUrl="/maximel/public/assets/img/hodei.png" />
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
