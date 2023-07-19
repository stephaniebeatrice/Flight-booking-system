import React, { useState } from 'react'

const PassengerForm = () => {
	const [passenger, setPassenger] = useState({
		title: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		passport: ''
	})

	const handleChange = (e) => {
		setPassenger({
			...passenger,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Perform form submission logic here
		console.log(passenger)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Title:</label>
				<input
					type="text"
					name="title"
					value={passenger.title}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>First Name:</label>
				<input
					type="text"
					name="firstName"
					value={passenger.firstName}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Last Name:</label>
				<input
					type="text"
					name="lastName"
					value={passenger.lastName}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Email:</label>
				<input
					type="email"
					name="email"
					value={passenger.email}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Phone:</label>
				<input
					type="tel"
					name="phone"
					value={passenger.phone}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Address:</label>
				<textarea
					name="address"
					value={passenger.address}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Passport:</label>
				<input
					type="text"
					name="passport"
					value={passenger.passport}
					onChange={handleChange}
					required
				/>
			</div>
			<button type="submit">Next</button>
		</form>
	)
}

export default PassengerForm
