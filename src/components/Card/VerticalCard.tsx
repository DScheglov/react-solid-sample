import { CardProps } from "../interfaces/CardProps";

const VerticalCard = ({ preview, title, details, footer }: CardProps) => (
  <div className="card" style={{ width: "18rem" }}>
    {preview}
    <div className="card-body">
      {title}
      {details}
    </div>
    {footer}
  </div>
);

export default VerticalCard;
