import React from "react";

export type CommonDataLoaderProps = {
  loader?: null | React.FC<{}>;
};

export type ListLoaderProps<T extends any[]> = CommonDataLoaderProps & {
  getData: () => Promise<T>;
  render: (item: T[number], index: number) => JSX.Element;
};

export type ItemLoaderProps<
  T extends Exclude<any, any[]>
> = CommonDataLoaderProps & {
  getData: () => Promise<T>;
  render: (item: T) => JSX.Element;
};

export type DataLoaderProps<T> = T extends any[]
  ? ListLoaderProps<T>
  : ItemLoaderProps<T>;

export interface IDataLoader {
  <T extends any[]>(props: ListLoaderProps<T>): JSX.Element;
  <T extends Exclude<any, any[]>>(props: ItemLoaderProps<T>): JSX.Element;
}
