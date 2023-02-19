import HorizontalCard from "./HorizontalCard";
import components from "./components";
import { CardComponents } from "../interfaces/CardComponents";

const Horizontal: CardComponents = {
  Card: HorizontalCard,
  ...components
};

export default Horizontal;
