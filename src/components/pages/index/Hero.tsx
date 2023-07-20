/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Section } from "~/components/core/Section";
import { useTranslation } from "next-i18next";

import { Button } from "~/components/core/Button";

import { SvgWrapper } from "~/components/core/SvgWrapper";

import { Bubble3DCanvas } from "~/components/canvas/Bubble3DCanvas";
import { TitleTopLines } from "~/components/core/BigTitle";
import { HeroBubble3D } from "~/components/canvas/HeroBubble3D";
export const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <div className="relative flex h-screen flex-col justify-between">
      <div className="container relative z-10 mx-auto h-full">
        <div className="flex h-full px-6">
          <div className="mt-28 w-full">
            <h1 className="text-7xl leading-normal">
              Hi, I&apos;m Maxime<span className="gradiant-text-green">.</span>
            </h1>
            <h1 className="leading-tight tracking-wide">
              <span className="opacity-70">
                And if I&apos;m not coding,
                <br /> I&apos;m in a{" "}
              </span>
              <span className="gradiant-text-green opacity-100">
                Really big
              </span>{" "}
              <span className="opacity-70">bubble.</span>
            </h1>
          </div>
          <div className="relative w-full">
            <HeroBubble3D />
            <video
              autoPlay
              loop
              muted
              className="absolute z-[-1] h-[300px] w-[230px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rotate-3"
            >
              <source src="/avatar_portfolio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <Section topSection bluredBackground>
        <div className="pt-10">
          <TitleTopLines
            dotHighlight="bg-[#3c1155]"
            topWithDot
            styles={{
              accent: "gradiant-purple-same",
              textAccent: "",
              titlePosition: "default",
            }}
          ></TitleTopLines>
        </div>
      </Section>
      <Bubble3DCanvas />
    </div>
  );
};
