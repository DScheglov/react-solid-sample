import { VideoType, AnyVideoDetails, Video, VideoDetailsMap } from "../domain";
import { raise } from "../utils/raise";
import { delay } from "../utils/delay";
import * as fake from "../domain/_fakes_";

export const getVideos = (n: number = 5) =>
  delay({ sec: 1 }).then(() => fake.videos(n));

type ByIdProvider<T> = (id: string) => Promise<T>;

export type ByIdProviderMap = {
  [T in VideoType]: ByIdProvider<VideoDetailsMap[T]>;
};

let byIdProviders: ByIdProviderMap | null = null;

export const getVideo = ({ id, type }: Video): Promise<AnyVideoDetails> => {
  if (byIdProviders == null) {
    raise(ReferenceError, `Video Types are not mapped to byIdProvider`);
  }

  const provider = byIdProviders[type];

  return provider(id);
};

getVideo.mapVideoTypes = (map: ByIdProviderMap) => {
  byIdProviders = map;
};

export const getAllVideoDetails = async (
  n: number = 5
): Promise<AnyVideoDetails[]> => {
  const videos = await getVideos(n);
  return Promise.all(videos.map(getVideo));
};
