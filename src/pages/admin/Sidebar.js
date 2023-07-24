import React from "react";

function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-airplane-engines-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">Admin</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span>Dashboard</span>
        </a>
        <a className="list-group-item py-2 ">
          <i className="bi bi-house fs-5 me-3"></i>
          <span>Home</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-ticket-detailed fs-5 me-3"></i>
          <span>Tickets</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-person-vcard fs-5 me-3"></i>
          <span>Employee Report</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i>
          <span>Customers</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}
export default Sidebar;
