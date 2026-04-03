import React, { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function Transactions() {
  const { transactions, role, addTransaction } = useContext(FinanceContext);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  // 🔍 Filter + Search logic
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      filterType === "all" ? true : t.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="section">
      <h2>📄 Transactions</h2>

      {/* 🔍 Search + Filter UI */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* 📊 Table */}
      <div className="table">
        <div className="table-header">
          <span>Date</span>
          <span>Category</span>
          <span>Amount</span>
        </div>

        {filteredTransactions.length === 0 ? (
          <p style={{ padding: "10px" }}>No transactions found</p>
        ) : (
          filteredTransactions.map((t) => (
            <div key={t.id} className="table-row">
              <span>{t.date}</span>
              <span>{t.category}</span>
              <span className={t.type === "income" ? "green" : "red"}>
                ₹{t.amount}
              </span>
            </div>
          ))
        )}
      </div>

      {/* 👤 Role-based UI */}
      {role === "admin" && (
        <button
          onClick={() =>
            addTransaction({
              id: Date.now(),
              date: "2026-04-05",
              amount: 500,
              category: "Misc",
              type: "expense",
            })
          }
        >
          ➕ Add Transaction
        </button>
      )}
    </div>
  );
}