import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./contexts/TransactionsContext";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewModalTransaction = (): void => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewModalTransaction = (): void => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <TransactionProvider>
      <Header onOpenNewModalTransaction={handleOpenNewModalTransaction} />
      <Dashboard />

      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        onCloseNewModalTransaction={handleCloseNewModalTransaction}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}
