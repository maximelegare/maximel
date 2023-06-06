import React, { type FC, useEffect } from "react";

import { type CategorySchemaModel } from "~/server/api/validation/category";
import Image from "next/image";
import { BigTitle } from "~/components/core/BigTitle";
import { FlipCard } from "~/components/core/Card";
import { TfiRulerPencil } from "react-icons/tfi";
import { Dialog } from "~/components/core/Dialog";
import { dialogVisibilityAtom } from "atoms/dialogAtom";
import { useRecoilState } from "recoil";

interface Props {
  data: CategorySchemaModel;
}

export const ProjectsCategory: FC<Props> = ({ data }) => {
  const { titlePosition } = data.styles;
  const [dialogVisibility, setDialogVisibility] =
    useRecoilState(dialogVisibilityAtom);

  const handleCardFlip = () => {
    setTimeout(() => {
      setDialogVisibility((oldValues) => {
        const obj = { ...oldValues, [data.slug]: true };
        return obj;
      });
    }, 500);
  };

  const handleCloseDialog = () => {
    setDialogVisibility((oldValues) => {
      const obj = { ...oldValues, [data.slug]: false };
      return obj;
    });
  };

  useEffect(() => {
    setDialogVisibility((oldValues) => {
      const obj = { ...oldValues, [data.slug]: false };
      return obj;
    });
  }, []);

  return (
    <>
      <div
        className={
          titlePosition === "right" || titlePosition === "left"
            ? "mt-[600px]"
            : ""
        }
      >
        <BigTitle
          styles={data.styles}
          title={"Other projects"}
          subtitle={data.headline}
          dotHighlight={data.styles.accent}
          logoElement={
            <div className="text-2xl">
              <TfiRulerPencil className=""/>
            </div>
          }
          logo={{ alt: "", imageUrl: "" }}
        />

        <FlipCard
          messageUnderneath="CLICK THE BUBBLE!"
          gradiantBorder
          textHiglight={data.styles.textAccent}
          colorHighlight={data.styles.accent}
          bubbleColor={data.styles.bubbleColor}
          canvas2DBubbles
          onCardFlip={() => console.log("cardFliped")}
        >
          <div className="fill-gray-800 p-10 opacity-60">
            <div className="relative h-auto w-full">
              {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-4xl">
              {data.title}
            </div> */}

              <Image
                src={data.image.imageUrl}
                alt={data.image.alt}
                className="relative z-10 h-auto w-full object-cover"
                width={0}
                height={0}
              />
            </div>
          </div>
        </FlipCard>
      </div>

      {
        <Dialog
          header="hello"
          show={dialogVisibility[data.slug] || false}
          onDialogClose={() => handleCloseDialog()}
        >
          hello
        </Dialog>
      }
    </>
  );
};
