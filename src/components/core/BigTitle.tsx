import React from "react";
import type { FC, ReactNode } from "react";
import type { ReactElement } from "react";
import { BlockContent } from "./BlockContent";
import { Media } from "./Media";
import Image from "next/image";
import type {
  BlockContentModel,
  LinksModel,
} from "~/server/api/validation/project";

interface Props {
  smallTitle: string;
  title?: string;
  paddingBottom?:string;
  subtitle?: BlockContentModel;
  buttons?: LinksModel;
  logo: {
    alt: string;
    imageUrl: string;
  };
  styles: {
    textAccent: string;
    accent: string;
  };
}

export const BigTitle: FC<Props> = ({
  smallTitle,
  title,
  paddingBottom = "pb-10",
  subtitle,
  buttons,
  logo,
  styles,
}) => {
  return (
    <div className="ml-4">
      <div className="flex flex-col gap-6">
        <div className="flex">
          <div className="flex w-7 flex-col items-center gap-2">
            <div className={`to-b-${styles.accent} h-[100px] w-[3px]`}></div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex">
            <div className="flex w-7 flex-col items-center gap-6">
              <Image
                src={logo.imageUrl}
                alt={logo.alt}
                width={1000}
                height={1000}
              />
              <div
                className={`to-b-${styles.accent}-reverse h-full  w-[3px]`}
              ></div>
            </div>
          </div>
          <div>
            <div className={paddingBottom}>
              {/* <h2
                data-aos="fade-left-custom"
                data-aos-duration="300"
                data-aos-easing="ease-out"
                className="text-2xl"
              >
                {smallTitle}
              </h2>
              <h4 className="mt-6 justify-self-stretch">{text}</h4> */}
              <h1
                data-aos="fade-left-custom"
                data-aos-duration="300"
                data-aos-easing="ease-out"
                className="mb-1 text-lg font-medium"
              >
                {title}
              </h1>
              <BlockContent
                separatorColor={styles.accent}
                data={subtitle}
                highlightColor={styles.textAccent}
              />
              <div className="mt-6 flex gap-2">
                {buttons?.map(({ href, type }, idx) => (
                  <div key={idx}>
                    <Media href={href} type={type} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
