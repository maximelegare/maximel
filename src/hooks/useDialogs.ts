import React, { useEffect, useState } from "react";
import { dialogVisibilityAtom } from "atoms/dialogAtom";
import { useRecoilState } from "recoil";



interface SlugObject {
    [slug: string]: boolean;
  }  

export const useDialogs = () => {

    
  const [usedSlug, setUsedSlug] = useState("")  
  const [dialogVisibility, setDialogVisibility] = useState<SlugObject>({});
  const [cardIsFlipped, setCardIsFlipped] = useState<SlugObject>({});


  const flipCard = (slug:string) => {
    setTimeout(() => {
      setDialogVisibility((oldValues) => {
        const obj = { ...oldValues, [slug]: true };
        return obj;
      });
      setCardIsFlipped((oldValues) => {
        const obj = { ...oldValues, [slug]: true };
        return obj;
      });
    }, 400);
    setUsedSlug(slug)
  };


  const closeDialog = (slug:string) => {
    setDialogVisibility((oldValues) => {
      const obj = { ...oldValues, [slug]: false };
      return obj;
    });
    setCardIsFlipped((oldValues) => {
        const obj = { ...oldValues, [slug]: false };
        return obj;
      });
      setUsedSlug(slug)
  };


  return {
    dialogVisibility:dialogVisibility[usedSlug],
    cardIsFlipped:cardIsFlipped[usedSlug],
    closeDialog,
    flipCard,
 
  };
};
