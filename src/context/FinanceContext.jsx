import React, { createContext, useState } from "react";
import { transactionsData } from "../data/mockData";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");

  const addTransaction = (txn) => {
    setTransactions([...transactions, txn]);
  };

  return (
    <FinanceContext.Provider value={{ transactions, role, setRole, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};