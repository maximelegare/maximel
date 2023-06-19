import React from "react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { CardGrid } from "~/components/core/CardGrid";
import { CardBasic } from "~/components/core/Card";
import { TechnologyIcon } from "~/components/core/TechnologyIcon";
import { SimonsGame } from "~/components/games/SimonsGame";
import Image from "next/image";
import { Separator } from "~/components/core/Separator";
import { AiOutlineCalendar } from "react-icons/ai";

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
                header={getTechs(project.technologies)}
                key={idx}
                colorHighlight=""
              >
                <div className="py-6">
                  {project.images[0] && (
                    <div className="mb-6  flex w-full justify-center">
                      <Image
                        src={project.images[0]?.imageUrl}
                        className="rounded-md"
                        width={400}
                        height={0}
                        alt=""
                      />
                    </div>
                  )}
                  <div className="mb-1 text-lg font-semibold">HODEI MUSIC</div>
                  <div className="text-sm opacity-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat provident delectus sed odit suscipit, ipsam a?
                    Ullam, corporis. Minima laudantium vel non aliquid hic illo
                    modi at neque totam. Tenetur.
                  </div>
                  <Separator />
                  <div className="flex items-center gap-1">
                    <AiOutlineCalendar />
                    <p className="text-xs">Still in Process</p>
                  </div>
                </div>
              </CardBasic>
            );
          })}
          <CardBasic
            header={<TechnologyIcon color="white" variant="local" />}
            colorHighlight=""
          >
            <SimonsGame />
          </CardBasic>
        </>
      </CardGrid>
    </>
  );
};
