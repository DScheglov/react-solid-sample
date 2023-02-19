import { createContext, useContext } from "react";
import vertical from "../components/Card/vertical";

export const cardComponents = createContext(vertical);

export const useCardComponents = () => useContext(cardComponents);
