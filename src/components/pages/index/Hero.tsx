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
    <div className="flex h-full sm:h-screen flex-col justify-between bg-black">
      <div className="container relative z-10 mx-auto h-full ">
        <div className="block px-6 md:flex">
          <div 
          className="mt-10 w-full md:mt-28"
          >
            <h1 className="leading-[3rem] sm:leading3">
              {t("index.hero.h1.hi-im-maxime")}
              <span className="gradiant-text-green">
                {t("index.hero.h1.dot")}
              </span>
            </h1>
            <h2 className="tracking-wide max-w-[400px] lg:max-w-[500px]">
              <span className="opacity-70">
                {t("index.hero.h2.and-if-im-not-coding-im-in-a")}
              </span>
              <span className="gradiant-text-green opacity-100">
                {t("index.hero.h2.really-big")}
              </span>{" "}
              <span className="opacity-70">{t("index.hero.h2.bubble")}</span>
            </h2>
          </div>
          <div className="relative h-[300px] sm:h-[450px] w-full opacity-70 ">
            <HeroBubble3D />
            <video
              autoPlay
              loop
              muted
              className="absolute left-1/2 top-1/2 z-[-1] h-[220px] w-[150px] -translate-x-1/2 -translate-y-1/2 rotate-3 lg:h-[300px] lg:w-[230px]"
            >
              <source src="/avatar_portfolio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <Section id="portfolio" layout="top" bluredBackground>
        <div className="pt-10">
          <TitleTopLines
            dotHighlight="bg-[#3c1155]"
            topWithDot
            title={t("index.hero.explore-my-portfolio") ?? ""}
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
