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
  totalIncome: () => number;
  totalOutcome: () => number;
  totalExpenses: () => number;
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

  const createTransaction = async (transactionInput: TransactionRequest) => {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions((currentTransactions) => [
      ...currentTransactions,
      transaction,
    ]);
  };

  const totalIncome = () => {
    const total = transactions.reduce((acc, transaction) => {
      if (transaction.type === "income") {
        return acc + transaction.amount;
      }

      return acc;
    }, 0);

    return total;
  };

  const totalOutcome = () => {
    const total = transactions.reduce((acc, transaction) => {
      if (transaction.type === "outcome") {
        return acc - transaction.amount;
      }

      return acc;
    }, 0);

    return total;
  };

  const totalExpenses = () => {
    const total = transactions.reduce((acc, transaction) => {
      if (transaction.type === "income") {
        return acc + transaction.amount;
      } else {
        return acc - transaction.amount;
      }
    }, 0);

    return total;
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        createTransaction,
        totalExpenses,
        totalIncome,
        totalOutcome,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};
