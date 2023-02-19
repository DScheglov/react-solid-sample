import VerticalCard from "./VerticalCard";
import components from "./components";
import { CardComponents } from "../interfaces/CardComponents";

const Vertical: CardComponents = {
  Card: VerticalCard,
  ...components
};

export default Vertical;
