import { atom } from "jotai";
import { Spot } from "../spots/spot.entity";

export const favoritesAtom = atom<Spot[]>([]);
