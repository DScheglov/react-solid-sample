import React from "react";
import { CardDetailsProps } from "./CardDetailsProps";
import { CardFooterProps } from "./CardFooterProps";
import { CardPreviewProps } from "./CardPreviewProps";
import { CardProps } from "./CardProps";
import { CardTitleProps } from "./CardTitleProps";

export type CardComponents = {
  Card: React.FC<CardProps>;
  Preview: React.FC<CardPreviewProps>;
  Title: React.FC<CardTitleProps>;
  Details: React.FC<CardDetailsProps>;
  Footer: React.FC<CardFooterProps>;
};
