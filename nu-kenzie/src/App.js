import "./App.css";
import myLogo from "./nukenzie.svg";
import landingLogo from "./landinglogo.svg";
import trash from "./trash.svg";
import landingImage from "./group277.png";
import { Form } from "./components/Form/form";
import { useState } from "react";
import { MoneyDisplay } from "./components/MoneyDisplay/moneyDisplay";
import { Card } from "./components/Cards/cards";
import { LandingPage } from "./components/LandingPage/landingPage";
import { EmptyPrompt } from "./components/EmptyPrompt/emptyPrompt";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState("landingPage");

  function addTransaction(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
  }

  function removeTransaction(index) {
    const number = Number(index);
    const beforeIndex = listTransactions.slice(0, number);
    const afterIndex = listTransactions.slice(
      number + 1,
      listTransactions.length
    );
    setListTransactions([...beforeIndex, ...afterIndex]);
  }

  function resetActive(event) {
    const allTags = document.querySelectorAll(".tagIndiv");
    allTags.forEach((element) => {
      element.classList.remove("active");
    });
    const targetTag = event.target.innerText;
    if (targetTag === "Todos") {
      const target = document.getElementById("all");
      target.classList.add("active");
      setFilter("all");
    } else if (targetTag === "Entradas") {
      const target = document.getElementById("inflow");
      target.classList.add("active");
      setFilter("inflow");
    } else {
      const target = document.getElementById("outflow");
      target.classList.add("active");
      setFilter("outflow");
    }
  }

  function handleRedirect() {
    setPage("landingPage");
  }

  if (page === "landingPage") {
    return (
      <div className="testClass">
        <LandingPage
          setPage={setPage}
          landingLogo={landingLogo}
          landingImage={landingImage}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="header">
          <div className="logo">
            <img src={myLogo} alt="logo" />
          </div>
          <div className="homeButton" onClick={handleRedirect}>
            Início
          </div>
        </header>
        <main>
          <div className="valueSetterDisplayer">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              addTransaction={addTransaction}
            />
            <MoneyDisplay listTransactions={listTransactions} />
          </div>
          <div className="transactionsDisplayer">
            <div className="titleTagContainer">
              <div className="titulo">Resumo financeiro</div>
              <div className="tags">
                <div className="tagIndiv active" id="all" onClick={resetActive}>
                  Todos
                </div>
                <div className="tagIndiv" id="inflow" onClick={resetActive}>
                  Entradas
                </div>
                <div className="tagIndiv" id="outflow" onClick={resetActive}>
                  Saídas
                </div>
              </div>
            </div>
            <div className="cardsContainer">
              <ul>
                {listTransactions.length < 1 ? (
                  <div className="emptyContainer">
                    <li className="messagePrompt">
                      Você ainda não possui nenhum lançamento
                    </li>
                    <EmptyPrompt />
                    <EmptyPrompt />
                    <EmptyPrompt />
                  </div>
                ) : filter === "all" ? (
                  listTransactions.map((element, index) => (
                    <li key={index} id={index}>
                      <Card
                        trash={trash}
                        item={element}
                        removeTransaction={removeTransaction}
                      />
                    </li>
                  ))
                ) : filter === "inflow" ? (
                  listTransactions.map((element, index) => {
                    if (element.type === "Entrada") {
                      return (
                        <li key={index} id={index}>
                          <Card
                            trash={trash}
                            item={element}
                            removeTransaction={removeTransaction}
                          />
                        </li>
                      );
                    }
                    return null;
                  })
                ) : (
                  listTransactions.map((element, index) => {
                    if (element.type === "Despesa") {
                      return (
                        <li key={index} id={index}>
                          <Card
                            trash={trash}
                            item={element}
                            removeTransaction={removeTransaction}
                          />
                        </li>
                      );
                    }
                    return null;
                  })
                )}
              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
