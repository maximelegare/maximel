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
import { Button } from "~/components/core/Button";
import { Media } from "~/components/core/Media";
import { When } from "react-if";
import { useSetRecoilState } from "recoil";
import { dialogVisibilityAtom } from "atoms/dialogAtom";

import { useDialogs } from "~/hooks/useDialogs";

export const ProjectsGrid = () => {
  const { locale } = useRouter();

  const isTrue = false;

  const { data } = api.project.allProjects.useQuery({ lang: locale });

  const { flipCard } = useDialogs();


  if (!data?.res) return <div>no data</div>;

  // const handleSeeMoreButton = (projectSlug: string) => {
  //   setDialogVisibility((oldValues) => {
  //     const obj = { ...oldValues, [projectSlug]: true };
  //     return obj;
  //   });
  // };

  const getHeader = (
    technologies: { imageUrl: string; title: string }[],
    links: { href: string; type: string }[]
  ) => {
    return (
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          {technologies.map((tech, idx) => (
            <TechnologyIcon key={idx} color="" tech={tech} />
          ))}
        </div>
        <div className="flex gap-2">
          {links.map(({ href, type }, idx) => (
            <Media key={idx} href={href} type={type} />
          ))}
        </div>
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
                header={getHeader(project.technologies, project.links)}
                key={idx}
                colorHighlight={project.styles.singleColorAccent}
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
                  <div className="mb-1 text-lg font-semibold">
                    {project.title.toLocaleUpperCase()}
                  </div>
                  <div className="text-sm opacity-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat provident delectus sed odit suscipit, ipsam a?
                    Ullam, corporis. Minima laudantium vel non aliquid hic illo
                    modi at neque totam. Tenetur.
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <AiOutlineCalendar />
                      <p className="text-xs pb-0">Still in Process</p>
                    </div>
                    <div>
                      <When condition={project.mainProject === true}>
                        <Button
                          variant="link"
                          styles="w-fit h-fit zoom-in-animation"
                          handleClick={() =>
                            flipCard(project.slug, true)
                          }
                        >
                          <div className="flex items-center text-xs backface-hidden">
                            see more
                          </div>
                        </Button>
                      </When>
                    </div>
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
