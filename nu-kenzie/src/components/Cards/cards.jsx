import "./styles.css";

export function Card({ trash, item, removeTransaction }) {
  function handleTransactionRemoval(event) {
    let targetId = event.target.parentElement.parentElement.parentElement.id;
    if (!targetId) {
      targetId =
        event.target.parentElement.parentElement.parentElement.parentElement.id;
    }
    removeTransaction(targetId);
  }

  let cardType = "";
  item.type === "Entrada"
    ? (cardType = "cardItself cardEntrada")
    : (cardType = "cardItself cardDespesa");

  return (
    <div className={cardType}>
      <div className="nameType">
        <h2 className="name">{item.description}</h2>
        <p className="type">{item.type}</p>
      </div>
      <div className="valueDelete">
        <div className="value">
          {item.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
        <div className="delete" onClick={handleTransactionRemoval}>
          <img src={trash} alt="delete" />
        </div>
      </div>
    </div>
  );
}
