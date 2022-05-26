import "./styles.css";
import { useState } from "react";

export function Form({
  listTransactions,
  setListTransactions,
  addTransaction,
}) {
  const [nameInput, setNameInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [typeValue, setTypeValue] = useState("Entrada");

  function createNewTransaction() {
    const newTransaction = {
      description: nameInput,
      type: typeValue,
      value: Number(valueInput),
    };

    addTransaction(newTransaction);
  }

  return (
    <div className="formContainer">
      <div className="descContainer">
        <label htmlFor="description">Descrição</label>
        <div className="descInputContainer forceSpacing">
          <input
            type="text"
            name="description"
            className="descInput"
            value={nameInput}
            placeholder="Digite aqui sua descrição"
            onChange={(event) => {
              setNameInput(event.target.value);
            }}
          />
          <span className="descExample">Ex.: Compra de roupas</span>
        </div>
      </div>
      <div className="valueContainer">
        <div className="valueDetails">
          <label htmlFor="value" className="forcePad">
            Valor
          </label>
          <div className="forceSpacing">
            <span className="symbolsInput">R$</span>
            <input
              type="number"
              name="value"
              className="valueInput"
              value={valueInput}
              placeholder="1"
              onChange={(event) => {
                setValueInput(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="valueType">
          <label htmlFor="type">Tipo de valor</label>
          <div className="typeInputContainer forceSpacing">
            <select
              name="type"
              id="type"
              className="typeValueInput"
              value={typeValue}
              onChange={(event) => setTypeValue(event.target.value)}
            >
              <option value="Entrada" selected>
                Entrada
              </option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
      </div>
      <button className="infoSend" onClick={createNewTransaction}>
        Inserir Valor
      </button>
    </div>
  );
}
