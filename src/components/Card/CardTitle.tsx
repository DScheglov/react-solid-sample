import { CardTitleProps } from "../interfaces/CardTitleProps";

const CardTitle = ({ children }: CardTitleProps) => (
  <h5 className="card-title">{children}</h5>
);

export default CardTitle;
