import React from "react";
import "../App.css";   // ✅ ADD THIS LINE

import SummaryCards from "./SummaryCards";
import Charts from "./Charts";
import Transactions from "./Transactions";
import Insights from "./Insights";
import RoleSwitcher from "./RoleSwitcher";

export default function Dashboard() {
  return (
    <div className="container">   {/* ✅ CHANGED */}
      <h1 className="title">💰 Finance Dashboard</h1>  {/* ✅ STYLED */}
      
      <RoleSwitcher />
      <SummaryCards />
      <Charts />
      <Transactions />
      <Insights />
    </div>
  );
}