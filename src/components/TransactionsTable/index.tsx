import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { Container } from "./styles";

export const TransactionsTable: React.FC = () => {
  const transactions = useContext(TransactionContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor (R$)</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(transaction.createdAt)
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
};
