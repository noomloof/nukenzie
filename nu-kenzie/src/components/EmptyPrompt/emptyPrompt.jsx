import "./styles.css";

export function EmptyPrompt() {
  return (
    <li className="emptyCard">
      <div>
        <span className="spaceFiller">&zwnj;</span>
        <div className="longerRectangle">&zwnj;</div>
        <div className="smallerRectangle">&zwnj;</div>
      </div>
    </li>
  );
}
