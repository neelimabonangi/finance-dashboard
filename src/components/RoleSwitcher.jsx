import React, { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function RoleSwitcher() {
  const { role, setRole } = useContext(FinanceContext);

  return (
    <div className="role-switcher">
      <label>👤 Role:</label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}