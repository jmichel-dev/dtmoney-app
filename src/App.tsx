import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
    <>
      <Header onOpenNewModalTransaction={handleOpenNewModalTransaction} />
      <Dashboard />

      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        onCloseNewModalTransaction={handleCloseNewModalTransaction}
      />
      <GlobalStyle />
    </>
  );
}
