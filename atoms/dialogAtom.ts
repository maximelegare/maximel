import { atom } from "recoil";

export interface DialogAtom {
  [slug: string]: boolean;
}

export const dialogVisibilityAtom = atom<DialogAtom>({
  key: "projectVisibilityAtom",
  default: {},
});
