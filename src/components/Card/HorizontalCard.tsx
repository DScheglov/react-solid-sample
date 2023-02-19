import { CardProps } from "../interfaces/CardProps";

const HorizontalCard = ({ preview, title, details, footer }: CardProps) => (
  <div className="card mb-3" style={{ maxWidth: "540px" }}>
    <div className="row g-0">
      <div className="col-md-4">{preview}</div>
      <div className="col-md-8">
        <div className="card-body">
          {title}
          {details}
        </div>
        {footer}
      </div>
    </div>
  </div>
);

export default HorizontalCard;
