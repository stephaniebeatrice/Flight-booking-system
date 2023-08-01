import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
	return (
		<div className="bg-white sidebar p-2">
			<div className="m-2">
				<i className="bi bi-airplane-engines-fill me-3 fs-4"></i>
				<span className="brand-name fs-4">Admin</span>
			</div>
			<hr className="text-dark" />
			<div className="list-group list-group-flush">
				<Link to="/Admin" className="list-group-item py-2">
					<i className="bi bi-speedometer2 fs-5 me-3"></i>
					<span>Dashboard</span>
				</Link>
				<Link to="/" className="list-group-item py-2 ">
					<i className="bi bi-house fs-5 me-3"></i>
					<span>Home</span>
				</Link>
				<Link to={'/TicketEdit'} className="list-group-item py-2">
					<i className="bi bi-ticket-detailed fs-5 me-3"></i>
					<span>Tickets</span>
				</Link>
				<Link to="/EmployeeMatching" className="list-group-item py-2">
					<i className="bi bi-person-vcard fs-5 me-3"></i>
					<span>Employee Report</span>
				</Link>
				<Link to="/AddPassenger" className="list-group-item py-2">
					<i className="bi bi-people fs-5 me-3"></i>
					<span>Passengers</span>
				</Link>
				<Link to="/" className="list-group-item py-2">
					<i className="bi bi-power fs-5 me-3"></i>
					<span>Logout</span>
				</Link>
			</div>
		</div>
	)
}
export default Sidebar
