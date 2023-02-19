import { CardDetailsProps } from "../interfaces/CardDetailsProps";

const CardDetails = ({ children }: CardDetailsProps) => (
  <div className="card-text">{children}</div>
);

export default CardDetails;
