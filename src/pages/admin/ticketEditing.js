import React, { useState } from 'react'
import './ticketEditing.css'
import Sidebar from './../admin/components/Sidebar'
import Navbar from './../admin/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const TicketEditing = ({ passenger, onSave }) => {
	const [firstName, setFirstName] = useState(passenger?.firstName || '')
	const [lastName, setLastName] = useState(passenger?.lastName || '')
	const [DOB, setDOB] = useState(passenger?.DOB || '')
	const [flightDestination, setFlightDestination] = useState(
		passenger?.flightDestination || ''
	)
	const [flightDate, setFlightDate] = useState(passenger?.flightDate || '')
	const [Class, setClass] = useState(passenger?.class || '')
	const [seatNumber, setSeatNumber] = useState(passenger?.seatNumber || '')
	const [phoneNumber, setPhoneNumber] = useState(passenger?.phoneNumber || '')
	const [email, setEmail] = useState(passenger?.email || '')

	const [toggle, setToggle] = useState(true)
	const Toggle = () => {
		setToggle(!toggle)
	}

	const handleSave = () => {
		const updatedPassenger = {
			...passenger,
			firstName,
			lastName,
			DOB,
			flightDestination,
			flightDate,
			seatNumber,
			phoneNumber,
			email
		}
		onSave(updatedPassenger)
	}

	return (
		<div className="container-fluid bg-primary min-vh-100 ">
			<div className="row ">
				{toggle && (
					<div className="col-4 col-md-2 bg-white vh-100 position-fixed">
						<Sidebar />
					</div>
				)}
				{toggle && <div className="col-4 col-md-2"></div>}
				<div className="col">
					<Navbar Toggle={Toggle} />
				</div>
				<div className="form-container">
					<h2>Edit Passenger Details</h2>
					<form>
						<div>
							<label>First Name:</label>
							<input
								type="text"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>

							<label>Last Name:</label>
							<input
								type="text"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>

							<label>Date of Birth:</label>
							<input
								type="date"
								value={DOB}
								onChange={(e) => setDOB(e.target.value)}
							/>
						</div>
						<div>
							<label>Flight Destination:</label>
							<input
								type="text"
								value={flightDestination}
								onChange={(e) => setFlightDestination(e.target.value)}
							/>
							<label>Flight Date:</label>
							<input
								type="date"
								value={flightDate}
								onChange={(e) => setFlightDate(e.target.value)}
							/>
							<label>Class: </label>
							<input
								type="text"
								value={Class}
								onChange={(e) => setClass(e.target.value)}
							/>
							<label>Seat Number:</label>
							<input
								type="text"
								value={seatNumber}
								onChange={(e) => setSeatNumber(e.target.value)}
							/>
							<label>Phone Number:</label>
							<input
								type="tel"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>

							<label>Email Address:</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<button type="button" onClick={handleSave}>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default TicketEditing
