interface IErrorConstructor<Args extends any[], E extends Error> {
  new (...args: Args): E;
}

export function raise<Args extends any[], E extends Error>(
  ErrorConstructor: IErrorConstructor<Args, E> = Error as any,
  ...args: Args
): never {
  throw new ErrorConstructor(...args);
}
