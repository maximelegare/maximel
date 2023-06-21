import React, { useState, useEffect } from "react";
import { dialogVisibilityAtom } from "atoms/dialogAtom";
import { useRecoilState } from "recoil";

interface SlugObject {
  [slug: string]: boolean;
}

export const useDialogs = () => {
  const [usedSlug, setUsedSlug] = useState("");

  //   const [dialogVisibility, setDialogVisibility] = useState<SlugObject>({});
  const [cardIsFlipped, setCardIsFlipped] = useState<SlugObject>({});

  const [dialogVisibility, setDialogVisibility] =
    useRecoilState(dialogVisibilityAtom);

  const bodyOverflowHidden = () => {
    document.querySelector("body")?.classList.add("overflow-hidden");
  };

  const bodyOverflowVisible = () => {
    document.querySelector("body")?.classList.remove("overflow-hidden");
  };

  const checkIfDialogOpen = (dialogs: SlugObject) => {
    const values = Object.values(dialogs);
    console.log(values);

    const truthyValues: boolean[] = [];

    values.forEach((val) => {
      if (val === true) {
        truthyValues.push(val);
      }
    });
    if (truthyValues.length === 0) {
      bodyOverflowVisible();
    }
  };

  const flipCard = (slug: string, noTimeout = false) => {
    bodyOverflowHidden();
    setUsedSlug(slug);

    setTimeout(
      () => {
        setDialogVisibility((oldValues) => {
          const obj = { ...oldValues, [slug]: true };
          return obj;
        });
        setCardIsFlipped((oldValues) => {
          const obj = { ...oldValues, [slug]: true };
          return obj;
        });
      },
      noTimeout ? 0 : 400
    );
  };

  const closeDialog = (slug: string) => {
    setDialogVisibility((oldValues) => {
      const obj = { ...oldValues, [slug]: false };
      checkIfDialogOpen(obj);
      return obj;
    });
    setCardIsFlipped((oldValues) => {
      const obj = { ...oldValues, [slug]: false };

      return obj;
    });
    setUsedSlug(slug);
  };

  const setDialogSlug = (slug:string) => {
    setDialogVisibility((oldValues) => {
      const obj = { ...oldValues, [slug]: false };
      return obj;
    });
    setUsedSlug(slug);
  }





  return {
    dialogVisibility: dialogVisibility[usedSlug],
    cardIsFlipped: cardIsFlipped[usedSlug],
    closeDialog,
    flipCard,
    setDialogSlug
  };
};
