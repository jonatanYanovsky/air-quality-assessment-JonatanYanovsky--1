require("./two-column.scss");

export default function TwoColumn(props) {
  return (
    <div className="two-column">
      <div className="column">{props.leftColumn}</div>
      <div className="column">{props.rightColumn}</div>
    </div>
  );
}
