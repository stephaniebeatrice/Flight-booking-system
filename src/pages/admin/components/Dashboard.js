import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Home from "../Home";

function Dashboard() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="">
      <Home Toggle={Toggle} />
    </div>
  );
}
export default Dashboard;
