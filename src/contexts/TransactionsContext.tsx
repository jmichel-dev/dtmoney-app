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

type TransactionRequest = Omit<Transaction, "id" | "createdAt">;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextProps {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionRequest) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

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

  const createTransaction = async (transaction: TransactionRequest) => {
    await api.post("/transactions", transaction);
  };

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionContext.Provider>
  );
};
