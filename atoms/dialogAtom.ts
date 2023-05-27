import {atom} from "recoil"

interface DialogAtom{
    hodei:boolean;
    bikanky:boolean;
    pictures:boolean;
    web:boolean;
}

export const dialogVisibilityAtom = atom<DialogAtom>({
    key:"projectVisibilityAtom",
    default:{
        hodei:false,
        bikanky:false,
        pictures:false,
        web:false
    }
})