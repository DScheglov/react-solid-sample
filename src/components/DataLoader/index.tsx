import React, { useEffect } from "react";
import { IDataLoader, DataLoaderProps } from "./types";

const DefaultLoader: React.FC<{}> = () => <>Loading...</>;

// prettier-ignore
const DataLoader: IDataLoader = <T, >({
  getData,
  render,
  loader: Loader = DefaultLoader
}: DataLoaderProps<T>) => {
  const [data, setData] = React.useState<T | T[] | null>(null);

  useEffect(() => {
    getData().then(setData);
  }, [getData]);

  if (data === null) return Loader && <Loader />;

   return Array.isArray(data) ? data.map(render) : (render as any)(data);
};

export default DataLoader;
