import React from "react";
import { Card, FlipCard } from "~/components/core/Card";
import { Section } from "~/components/core/Section";
import PhotographyIcons from "../../../../public/assets/SVG/photography icons.svg";
import { BigTitle } from "~/components/core/BigTitle";

import { api } from "~/utils/api";

import { ProjectsCategory } from "./ProjectsCategory";

import { TfiRulerPencil } from "react-icons/tfi";
import { useRecoilState } from "recoil";
import { dialogVisibilityAtom } from "atoms/dialogAtom";
import { useRouter } from "next/router";

export const ProjectsCategories = () => {
  const [dialogs, setDialogs] = useRecoilState(dialogVisibilityAtom);
  const { locale } = useRouter();

  const { data } = api.category.allCategories.useQuery({ lang: locale });

  if (!data || !data.res) return <div>no data</div>;

  return (
    <Section styles="bg-black relative z-[-1]" bluredBackground>
      <div className="grid grid-cols-2 gap-x-4 pb-5">
        {data?.res.map((el, idx) => {
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
