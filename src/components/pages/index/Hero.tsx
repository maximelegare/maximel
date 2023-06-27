/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Section } from "~/components/core/Section";
import { useTranslation } from "next-i18next";

import { Button } from "~/components/core/Button";

import { SvgWrapper } from "~/components/core/SvgWrapper";

import { Bubble3DCanvas } from "~/components/canvas/Bubble3DCanvas";
import { TitleTopLines } from "~/components/core/BigTitle";
export const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <div className="relative flex h-screen flex-col justify-between">
      <div className="relative z-10 h-full">hello</div>
      <Section topSection bluredBackground>
        <div className="pt-6">
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
