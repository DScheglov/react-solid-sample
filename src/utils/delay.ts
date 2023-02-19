type ShortDuration = {
  sec?: number;
  ms?: number;
};

export const delay = ({ sec = 0, ms = 0 }: ShortDuration = {}) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000 + ms));
