import React, { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function Insights() {
  const { transactions } = useContext(FinanceContext);

  if (!transactions || transactions.length === 0) {
    return <p className="section">No insights available</p>;
  }

  // 🔥 Highest spending category
  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highestCategory = Object.keys(categoryTotals).length
    ? Object.keys(categoryTotals).reduce((a, b) =>
        categoryTotals[a] > categoryTotals[b] ? a : b
      )
    : "N/A";

  // 💰 Total Income & Expense
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  // 📊 Simple observation
  const observation =
    expense > income
      ? "⚠️ You are spending more than earning"
      : "✅ Your finances are balanced";

  return (
    <div className="section">
      <h2>📊 Insights</h2>

      <div className="table">
        <div className="table-row">
          <span>🔥 Highest Spending</span>
          <span>{highestCategory}</span>
        </div>

        <div className="table-row">
          <span>💰 Total Income</span>
          <span>₹{income}</span>
        </div>

        <div className="table-row">
          <span>💸 Total Expense</span>
          <span>₹{expense}</span>
        </div>

        <div className="table-row">
          <span>📈 Observation</span>
          <span>{observation}</span>
        </div>
      </div>
    </div>
  );
}