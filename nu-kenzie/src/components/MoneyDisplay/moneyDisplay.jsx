import "./styles.css";

export function MoneyDisplay({ listTransactions }) {
  function sumPositive() {
    const positive = listTransactions.filter(
      (element) => element.type === "Entrada"
    );
    return positive.reduce(
      (accumulator, element) => accumulator + element.value,
      0
    );
  }

  function sumNegative() {
    const negative = listTransactions.filter(
      (element) => element.type === "Despesa"
    );
    return negative.reduce(
      (accumulator, element) => accumulator + element.value,
      0
    );
  }

  function getDisplayValue() {
    return sumPositive() - sumNegative();
  }

  return (
    <div className="moneyContainer">
      <div className="textPart">
        <div>Saldo:</div>
        <div className="money">
          {getDisplayValue().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
    </div>
  );
}
