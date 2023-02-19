import React, { useCallback } from "react";
import DataLoader from "../DataLoader";

type DataProviderProps<T> = {
  getData: () => Promise<T>;
  context: React.Context<T>;
  loader?: React.FC<{}>;
  children: React.ReactNode;
};

// prettier-ignore
const DataProvider = <T, >({
  getData,
  context,
  loader,
  children
}: DataProviderProps<T>) => (
  <DataLoader
    getData={useCallback(() => getData().then((data) => ({ data })), [getData])}
    loader={loader}
    render={({ data }) => (
      <context.Provider value={data}>{children}</context.Provider>
    )}
  />
);

export default DataProvider;
