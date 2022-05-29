import { Container } from "./styles";

import incomeImg from "../../assets/img/income.svg";
import outcomeImg from "../../assets/img/outcome.svg";
import totalImg from "../../assets/img/total.svg";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { formatCurrency } from "../../utils/formatter";

export const Summary: React.FC = () => {
  const { totalExpenses, totalIncome, totalOutcome } =
    useContext(TransactionContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatCurrency(totalIncome())}</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>{formatCurrency(totalOutcome())}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatCurrency(totalExpenses())}</strong>
      </div>
    </Container>
  );
};
