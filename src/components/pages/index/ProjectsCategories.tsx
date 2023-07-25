import React from "react";
import { Card, FlipCard } from "~/components/core/Card";
import { Section } from "~/components/core/Section";
import PhotographyIcons from "../../../../public/assets/SVG/photography icons.svg";
import { BigTitle, TitleTopLines } from "~/components/core/BigTitle";

import { api } from "~/utils/api";

import { ProjectsCategory } from "./ProjectsCategory";

import { TfiRulerPencil } from "react-icons/tfi";
import { useRecoilState } from "recoil";
import { dialogVisibilityAtom } from "atoms/dialogAtom";
import { useRouter } from "next/router";

import { When } from "react-if";

export const ProjectsCategories = () => {
  // const [dialogs, setDialogs] = useRecoilState(dialogVisibilityAtom);
  const { locale } = useRouter();

  const { data } = api.category.allCategories.useQuery({ lang: locale });

  if (!data || !data.res) return <div>no data</div>;


  return (
    <Section styles="bg-black relative z-10">
      <div className="grid auto-rows-auto lg:grid-cols-2 lg:grid-rows-1 gap-x-4 pb-5" style={{alignItems:"flex-start"}}>
        {data?.res.map((el, idx, arr) => {
          return (
            <div key={idx}>
              <ProjectsCategory data={el} />
            </div>
          );
        })}
       
      </div>
    </Section>
  );
};
