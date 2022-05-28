import { useEffect } from "react";
import { Container } from "./styles";

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    fetch("https://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="income">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="expense">- R$ 1.800</td>
            <td>Moradia</td>
            <td>21/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
