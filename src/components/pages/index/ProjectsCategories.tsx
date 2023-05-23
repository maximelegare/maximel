import React from "react";
import { Card, FlipCard } from "~/components/core/Card";
import { Section } from "~/components/core/Section";
import PhotographyIcons from "../../../../public/assets/SVG/photography icons.svg";
import { BigTitle } from "~/components/core/BigTitle";

import { api } from "~/utils/api";

import { ProjectsCategory } from "./ProjectsCategory";

import { TfiRulerPencil } from "react-icons/tfi";
import { useRouter } from "next/router";
export const ProjectsCategories = () => {
  const { locale } = useRouter();

  const { data } = api.category.allCategories.useQuery({ lang: locale });

  if (!data?.res) return <div>no data</div>;

  return (
    <Section styles="bg-black" bluredBackground>
      <div className="">
        {data.res.map((el, idx) => {
          return (
            <div key={idx}>
              <ProjectsCategory data={el}/>
            </div>
          );
        })}
        
        {/* <FlipCard gradiantBorder colorHighlight={"bg-gray-800"} circleHover>
          <div className="fill-gray-800 p-10 opacity-60">
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center  font-display text-5xl">
                Design
                <br />&<br />
                Photography
              </div>
              <PhotographyIcons />
            </div>
          </div>
        </FlipCard> */}
        <div></div>
        <div></div>
      </div>
    </Section>
  );
};
