/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Section } from "~/components/core/Section";
import { useTranslation } from "next-i18next";
import Logo from "../../../../public/assets/SVG/logo.svg";

import { Button } from "~/components/core/Button";

import { SvgWrapper } from "~/components/core/SvgWrapper";

import { api } from "~/utils/api";

import { useRecoilState } from "recoil";
import { counterAtomState } from "atoms/counterAtom";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bubble3DCanvas } from "~/components/canvas/Bubble3DCanvas";
export const Hero = () => {
  const { t } = useTranslation("common");

  const [counterState, setCounterState] = useRecoilState(counterAtomState);


  return (
    <Section
      styles="gradiant-purple"
      noContainerElements={<Bubble3DCanvas />}
    >
      <div></div>
      {/* <div className="flex h-full flex-col items-center pt-[15%]">
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-back"
          data-aos-delay="600"
          className="mb-8"
        >
          
        </div>
        <div data-aos="fade-up-custom" data-aos-easing="ease-in-out-back">
          <h1 className="text-center">
            {t("index.hero.this-is-my")}{" "}
            <span className="font-display text-6xl text-accent">
              {t("index.hero.template")}
            </span>
            <br /> {t("index.hero.for")}{" "}
            <span className="font-display text-6xl text-accent">
              {t("index.hero.future")}
            </span>{" "}
            {t("index.hero.projects")}{" "}
            <span className="font-display text-6xl text-accent">.</span>
          </h1>
        </div>
        <div
          data-aos="fade-up-custom"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="600"
          data-aos-delay="700"
        >
          <div className="border-base mt-14 flex items-center gap-4 rounded-lg border-[1px] p-5">
            <h3 className="text-3xl">{counterState}</h3>
            <Button
              handleClick={() => setCounterState(counterState + 1)}
              styles="btn-accent"
            >
              {t("index.hero.add-one")}
            </Button>
          </div>
        </div>
      </div> */}
    </Section>
  );
};
