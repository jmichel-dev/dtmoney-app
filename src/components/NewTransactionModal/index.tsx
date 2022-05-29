import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/img/close.svg";
import incomeImg from "../../assets/img/income.svg";
import outcomeImg from "../../assets/img/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onCloseNewModalTransaction: () => void;
}
export const NewTransactionModal: React.FC<NewTransactionModalProps> = (
  props
) => {
  const { createTransaction } = useTransactions();

  const [typeTransaction, setTypeTransaction] = useState("income");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction({
      title,
      amount: value,
      type: typeTransaction,
      category,
    });

    props.onCloseNewModalTransaction();
    setTypeTransaction("income");
    setTitle("");
    setCategory("");
    setValue(0);
  };

  return (
    <Modal
      isOpen={props.isNewTransactionModalOpen}
      onRequestClose={props.onCloseNewModalTransaction}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={props.onCloseNewModalTransaction}
        className="react-modal-close-btn"
      >
        <img src={closeImg} alt="Fechar cadastro de nova transação" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setTypeTransaction("income")}
            isActive={typeTransaction === "income"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setTypeTransaction("outcome")}
            isActive={typeTransaction === "outcome"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
