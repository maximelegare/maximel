import {atom} from "recoil"

export const projectVisibilityAtom = atom<boolean>({
    key:"projectVisibilityAtom",
    default:false
})