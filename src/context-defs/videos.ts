import { createContext, useContext } from "react";
import { AnyVideoDetails } from "../domain";

const videosContext = createContext<AnyVideoDetails[]>([]);

export const useVideos = () => useContext(videosContext);

export default videosContext;
