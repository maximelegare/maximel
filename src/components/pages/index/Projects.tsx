/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from "react";

import { api } from "~/utils/api";

import { useRouter } from "next/router";

import { Button } from "~/components/core/Button";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { Media } from "~/components/core/Media";
import { Section } from "~/components/core/Section";


import { Project } from "./Project";
export const Projects = () => {

  const { locale } = useRouter();

  const { data } = api.project.allProjects.useQuery({ lang: locale });

  if (!data?.res) return <div>no data</div>;


  return (
    <Section styles="bg-black" bluredBackground>
    <div>
      {data.res.map((project, idx) => {
         
        return (
          <div key={idx}>
            <Project data={project}/>
          </div>
        );
      })}
    </div>
    </Section>
  );
};
