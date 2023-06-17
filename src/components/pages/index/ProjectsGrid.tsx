import React from "react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { CardGrid } from "~/components/core/CardGrid";
import { CardBasic } from "~/components/core/Card";
import { TechnologyIcon } from "~/components/core/TechnologyIcon";
import { SimonsGame } from "~/components/games/SimonsGame";

export const ProjectsGrid = () => {
  const { locale } = useRouter();
  const { data } = api.project.smallProjects.useQuery({ lang: locale });

  if (!data?.res) return <div>no data</div>;

  const getTechs = (technologies: { imageUrl: string; title: string }[]) => {
    return (
      <div className="flex gap-3">
        {technologies.map((tech, idx) => (
          <TechnologyIcon key={idx} color="" tech={tech} />
        ))}
      </div>
    );
  };

  return (
    <>
      <CardGrid>
        <>
          {data?.res.map((project, idx) => {
            return (
              <CardBasic
                technologies={getTechs(project.technologies)}
                key={idx}
                colorHighlight=""
              >
                {project.title}
              </CardBasic>
            );
          })}
          <CardBasic
            technologies={<TechnologyIcon color="white" variant="local" />}
            colorHighlight=""
          >
            <SimonsGame />
          </CardBasic>
        </>
      </CardGrid>
    </>
  );
};
