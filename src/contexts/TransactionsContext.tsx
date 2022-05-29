import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext<Transaction[]>([]);

export const TransactionProvider: React.FC<TransactionProviderProps> = (
  props
) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const getTransactions = () => {
      api
        .get("/transactions")
        .then((response) => setTransactions(response.data.transactions));
    };

    getTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {props.children}
    </TransactionContext.Provider>
  );
};
