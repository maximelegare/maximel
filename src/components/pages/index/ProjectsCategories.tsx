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
  const [dialogs, setDialogs] = useRecoilState(dialogVisibilityAtom);
  const { locale } = useRouter();

  const { data } = api.category.allCategories.useQuery({ lang: locale });

  if (!data || !data.res) return <div>no data</div>;

  const lastItem = data.res[data.res.length -1]

  return (
    <Section styles="bg-black relative z-10" bluredBackground>
      <div className="grid auto-rows-auto grid-cols-2 grid-rows-1 gap-x-4 pb-5" style={{alignItems:"flex-start"}}>
        {data?.res.map((el, idx, arr) => {
          return (
            <div key={idx}>
              <ProjectsCategory data={el} />
              
            </div>
          );
        })}
        {/* {lastItem?.styles.titlePosition === "right" && 
                <TitleTopLines
                  styles={lastItem?.styles}
                  dotHighlight="bg-red-100"
                ></TitleTopLines>
              } */}
        <div>test</div>
      </div>
    </Section>
  );
};
