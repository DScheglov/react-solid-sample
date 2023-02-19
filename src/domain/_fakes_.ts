import { Video } from "./index";

export const videos = (
  n: number = Math.ceil(100 * Math.random()),
  m: number = 1 + Math.round(6 * Math.random())
): Video[] =>
  Array.from({ length: n }, (_, index) =>
    (index + (n % m)) % m === 0
      ? {
          id: `stream#${index + 1}`,
          title: `Stream #${index + 1}`,
          type: "stream"
        }
      : {
          id: `video#${index + 1}`,
          title: `Video #${index + 1}`,
          type: "recorded"
        }
  );
