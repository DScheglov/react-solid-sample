import React from "react";
import { cardComponents } from "../../context-defs/cardComponents";
import vertical from "../Card/vertical";
import horizontal from "../Card/horizontal";

export type CardGroupProps = {
  direction?: "vertical" | "horizontal";
  children: React.ReactNode;
};

const CardGroup = ({ direction = "vertical", children }: CardGroupProps) =>
  direction === "vertical" ? (
    <cardComponents.Provider value={vertical}>
      <div className="card-group">{children}</div>
    </cardComponents.Provider>
  ) : (
    <cardComponents.Provider value={horizontal}>
      {children}
    </cardComponents.Provider>
  );

export default CardGroup;
