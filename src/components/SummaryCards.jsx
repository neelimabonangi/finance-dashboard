import React, { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function SummaryCards() {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="cards">
      <div className="card income">
        💵 Income <br />
        <span>₹{income}</span>
      </div>

      <div className="card expense">
        💸 Expense <br />
        <span>₹{expense}</span>
      </div>

      <div className="card balance">
        🏦 Balance <br />
        <span>₹{balance}</span>
      </div>
    </div>
  );
}