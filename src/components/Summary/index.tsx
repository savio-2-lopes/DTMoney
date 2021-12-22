import React, { useContext } from "react";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

export function Summary() {
  const data = useContext(TransactionsContext);
  console.log(data);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Ícone de Entrada" />
        </header>
        <strong>R$1000.00</strong>
      </div>

      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeImg} alt="Ícone de Saída" />
        </header>
        <strong>- R$500.00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Ícone do valor total" />
        </header>
        <strong>R$500.00</strong>
      </div>
    </Container>
  );
}
