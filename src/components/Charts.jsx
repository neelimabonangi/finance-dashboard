import React, { useContext } from "react";   // ✅ FIXED
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { FinanceContext } from "../context/FinanceContext";

export default function Charts() {
  const { transactions } = useContext(FinanceContext);

  return (
    <LineChart width={400} height={200} data={transactions}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line dataKey="amount" />
    </LineChart>
  );
}