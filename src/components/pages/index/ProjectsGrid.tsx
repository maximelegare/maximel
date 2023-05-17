import React from "react";
import { Card, FlipCard } from "~/components/core/Card";
import { Section } from "~/components/core/Section";
import PhotographyIcons from "../../../../public/assets/SVG/photography icons.svg";
import { BigTitle } from "~/components/core/BigTitle";

import {BsFillCameraFill} from "react-icons/bs" 

export const ProjectsGrid = () => {
  return (
    <Section styles="bg-black" bluredBackground>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-4">
        <BigTitle
            styles={{accent:"gradiant-purple", textAccent:""}}
            smallTitle="Star of the show"
            title={"Other projects"}
            //   icon={<GiDeathStar />}
            // subtitle={""}
            logo={{alt:"", imageUrl:""}}
          />

          <FlipCard gradiantBorder colorHighlight={"bg-gray-800"} circleHover>
            <div className="fill-gray-800 p-10 opacity-60">
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold">
                  PROTOGRAPHY
                </div>
                <PhotographyIcons />
              </div>
            </div>
          </FlipCard>
          <FlipCard gradiantBorder colorHighlight={"bg-gray-800"} circleHover>
            <div className="fill-gray-800 p-10 opacity-60">
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl  text-center font-display">
                Design<br/>&<br/>Photography 
                </div>
                <PhotographyIcons />
              </div>
            </div>
          </FlipCard>
          <div></div>
          <div></div>
        
        </div>
        
    </Section>
  );
};
