export const isPromise = (value: any): value is Promise<any> =>
  value != null && typeof value.then === "function";
