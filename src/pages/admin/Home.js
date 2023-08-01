import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import { Inquiries } from "./components/Inquiries";
import Sidebar from "./components/Sidebar";
import { EmployeeMatching } from "./components/employeeMatching";
import "./home.css";

export function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  //EmployeeMatching inquiries

  return (
    <div className="App">
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar setActiveTab={setActiveTab} />
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">{getView(activeTab)}</div>
      </div>
    </div>
  );
}

const getView = tab => {
  if (tab === "dashboard") return <Dashboard />;
  else if (tab === "employeeMatching") return <EmployeeMatching />;
  else return <Inquiries />;
};
