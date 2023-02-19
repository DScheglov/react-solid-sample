import { CardFooterProps } from "../interfaces/CardFooterProps";

const CardFooter = ({ children }: CardFooterProps) => (
  <div className="card-footer text-muted">{children}</div>
);

export default CardFooter;
