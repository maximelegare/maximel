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

import { BubblesCanvas } from "./BubblesCanvas";

export const Hero = () => {
  const { t } = useTranslation("common");

  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Section styles="gradiant" noContainerElement={<BubblesCanvas />}>
      <div>hello</div>
    </Section>
  );
};
