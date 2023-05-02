import React from "react";
import { Section } from "~/components/core/Section";

import { Card } from "~/components/core/Card";
import { BigTitle } from "~/components/core/BigTitle";
import { GiDeathStar } from "react-icons/gi";

export const Projects = () => {
  return (
    <Section styles="gradiant">
      <>
        <BigTitle
          smallTitle="Star of the show"
          title="One music player to rule them all"
          icon={<GiDeathStar />}
        />
        <Card />
      </>
    </Section>
  );
};
